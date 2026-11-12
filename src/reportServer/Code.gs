/**
 * Report inbox for Chemistry Practical & LSM, in the teacher's own Google Sheet.
 *
 * Students' Lab Notebook reports (including reports copied from Exam Practice) are sent here and
 * kept as rows of the "Reports" sheet. Whiteboard pictures are saved as files in a Drive folder.
 * Only someone with the teacher key can read the reports or save a grade.
 *
 * Setup (once): open the Sheet, Extensions → Apps Script, paste this file, save, run setup(),
 * then Deploy → New deployment → Web app, Execute as: Me, Who has access: Anyone.
 */

var SHEET_NAME = 'Reports';
var FOLDER_NAME = 'Chemistry report pictures';
var HEADERS = ['Received', 'Report id', 'Student', 'Date', 'Title', 'Exam marks', 'Status', 'Grade', 'Teacher remarks', 'Report'];
var REPORT_COLUMN = 10; // the report itself, split over this and the next columns when it is long
var CELL_LIMIT = 45000; // a Sheets cell holds at most 50 000 characters
var MAX_BYTES = 8000000;

/** Run once by hand: makes the sheet and the folder, and shows the teacher key. */
function setup() {
  var sheet = sheet_();
  folder_();
  var props = PropertiesService.getScriptProperties();
  var key = props.getProperty('TEACHER_KEY');
  if (!key) {
    key = Utilities.getUuid().replace(/-/g, '').slice(0, 12);
    props.setProperty('TEACHER_KEY', key);
  }
  var message = 'Ready. Teacher key: ' + key + '\nБэлэн. Багшийн түлхүүр: ' + key + '\nSheet: ' + sheet.getParent().getUrl();
  Logger.log(message);
  try {
    SpreadsheetApp.getUi().alert(message);
  } catch (e) {
    // Run from the script editor without the Sheet open: the key is in the execution log.
  }
}

/** Students send reports; the teacher saves grades. */
function doPost(e) {
  try {
    if (!e || !e.postData || !e.postData.contents) return json_({ ok: false, error: 'empty' });
    if (e.postData.contents.length > MAX_BYTES) return json_({ ok: false, error: 'too-large' });
    var body = JSON.parse(e.postData.contents);
    if (body.action === 'grade') return grade_(body);
    var entry = body.entry;
    if (body.type !== 'chemistry-practical-report' || !entry || typeof entry.id !== 'string') return json_({ ok: false, error: 'invalid' });
    var lock = LockService.getScriptLock();
    lock.waitLock(20000);
    try {
      var sheet = sheet_();
      var id = String(entry.id);
      var rows = idRows_(sheet);
      for (var k = 0; k < rows.length; k++) {
        if (String(rows[k][0]) !== id) continue;
        // The same report sent twice (a retry) is kept once.
        if (String(rows[k][1]) === text_(entry.studentName)) return json_({ ok: true, id: id });
        // Two students sent in the same millisecond: give this one its own id.
        id = id + '-' + Utilities.getUuid().slice(0, 4);
        break;
      }
      var folder = folder_();
      var pictures = [];
      var list = entry.whiteboardImages || [];
      for (var i = 0; i < list.length && i < 8; i++) {
        var match = /^data:image\/(jpeg|png);base64,(.+)$/.exec(String(list[i].image || ''));
        if (!match) continue;
        var blob = Utilities.newBlob(Utilities.base64Decode(match[2]), 'image/' + match[1], safe_(id) + '-' + (i + 1) + (match[1] === 'png' ? '.png' : '.jpg'));
        pictures.push({ page: text_(list[i].page), fileId: folder.createFile(blob).getId() });
      }
      var stored = copy_(entry);
      delete stored.whiteboardImages;
      stored.id = id;
      stored.pictureFiles = pictures;
      stored.status = 'submitted';
      var row = [new Date(), id, text_(entry.studentName), text_(entry.date), text_(entry.experimentTitle), text_(entry.examScore), 'submitted', '', ''];
      sheet.appendRow(row.concat(chunks_(JSON.stringify(stored))));
    } finally {
      lock.releaseLock();
    }
    return json_({ ok: true, id: id });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

/** The teacher reads the list of reports, or one report with its pictures. */
function doGet(e) {
  try {
    var p = (e && e.parameter) || {};
    if (!keyOk_(p.key)) return json_({ ok: false, error: 'key' });
    var sheet = sheet_();
    var values = sheet.getDataRange().getValues();
    var reports = [];
    for (var r = values.length - 1; r >= 1; r--) {
      var entry = read_(values[r]);
      if (!entry) continue;
      if (p.action === 'get') {
        if (entry.id !== p.id) continue;
        entry.whiteboardImages = (entry.pictureFiles || []).map(function (pic) {
          try {
            var file = DriveApp.getFileById(pic.fileId);
            return { page: pic.page, image: 'data:' + file.getMimeType() + ';base64,' + Utilities.base64Encode(file.getBlob().getBytes()) };
          } catch (x) {
            return null;
          }
        }).filter(function (x) { return x; });
        return json_({ ok: true, report: entry });
      }
      entry.pictureCount = (entry.pictureFiles || []).length;
      delete entry.pictureFiles;
      entry.received = values[r][0] instanceof Date ? values[r][0].toISOString() : String(values[r][0]);
      reports.push(entry);
    }
    if (p.action === 'get') return json_({ ok: false, error: 'not-found' });
    return json_({ ok: true, reports: reports });
  } catch (err) {
    return json_({ ok: false, error: String(err) });
  }
}

function grade_(body) {
  if (!keyOk_(body.key)) return json_({ ok: false, error: 'key' });
  var lock = LockService.getScriptLock();
  lock.waitLock(20000);
  try {
    var sheet = sheet_();
    var rows = idRows_(sheet);
    for (var k = 0; k < rows.length; k++) {
      if (String(rows[k][0]) !== String(body.id)) continue;
      var r = k + 2; // the sheet row: row 1 holds the headings
      var width = Math.max(1, sheet.getLastColumn() - REPORT_COLUMN + 1);
      var entry = parse_(sheet.getRange(r, REPORT_COLUMN, 1, width).getValues()[0]) || {};
      entry.status = 'graded';
      entry.gradeScore = text_(body.gradeScore);
      entry.teacherRemarks = text_(body.teacherRemarks);
      entry.skillScores = body.skillScores || {};
      sheet.getRange(r, 7, 1, 3).setValues([['graded', entry.gradeScore, entry.teacherRemarks]]);
      var parts = chunks_(JSON.stringify(entry));
      while (parts.length < width) parts.push('');
      sheet.getRange(r, REPORT_COLUMN, 1, parts.length).setValues([parts]);
      return json_({ ok: true });
    }
    return json_({ ok: false, error: 'not-found' });
  } finally {
    lock.releaseLock();
  }
}

/** The report id and student name of every report row, without reading the long report cells. */
function idRows_(sheet) {
  var last = sheet.getLastRow();
  return last < 2 ? [] : sheet.getRange(2, 2, last - 1, 2).getValues();
}

function read_(row) {
  return parse_(row.slice(REPORT_COLUMN - 1));
}

/** Joins the report cells back into one report. */
function parse_(cells) {
  var text = cells.map(function (c) { return String(c || ''); }).join('');
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch (e) {
    return null;
  }
}

function chunks_(text) {
  var parts = [];
  for (var i = 0; i < text.length; i += CELL_LIMIT) parts.push(text.slice(i, i + CELL_LIMIT));
  return parts.length ? parts : [''];
}

function keyOk_(key) {
  var expected = PropertiesService.getScriptProperties().getProperty('TEACHER_KEY');
  return !!expected && String(key || '') === expected;
}

function sheet_() {
  var book = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = book.getSheetByName(SHEET_NAME);
  if (!sheet) {
    sheet = book.insertSheet(SHEET_NAME);
    sheet.appendRow(HEADERS);
    sheet.setFrozenRows(1);
  }
  return sheet;
}

function folder_() {
  var props = PropertiesService.getScriptProperties();
  var id = props.getProperty('FOLDER_ID');
  if (id) {
    try {
      return DriveApp.getFolderById(id);
    } catch (e) {
      // The folder was deleted: make a new one.
    }
  }
  var folder = DriveApp.createFolder(FOLDER_NAME);
  props.setProperty('FOLDER_ID', folder.getId());
  return folder;
}

function copy_(o) { return JSON.parse(JSON.stringify(o)); }
function text_(v) { return v == null ? '' : String(v).slice(0, 2000); }
function safe_(v) { return String(v).replace(/[^A-Za-z0-9_-]/g, '-').slice(0, 60); }
function json_(o) { return ContentService.createTextOutput(JSON.stringify(o)).setMimeType(ContentService.MimeType.JSON); }
