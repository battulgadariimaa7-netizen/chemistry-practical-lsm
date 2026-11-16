import { LabNotebookEntry } from '../types/chemistry';
import { MAX_SKILL_SCORE, ao3Skills, statusLabel } from './reportFiles';

// Turns a student's report into a PDF file in the browser, so the teacher can read it as a PDF, keep it and send it
// on. Each A4 page is drawn on a canvas with the site's own font, which covers Cyrillic, and the pages are put into
// a small PDF by hand as JPEG pictures. Nothing leaves the browser, and no library is needed.

type Lang = 'en' | 'mn';

const PT_W = 595.28; // A4 in points
const PT_H = 841.89;
const SCALE = 2.5; // canvas pixels per point, about 180 dpi
const MARGIN = 48;
const FONT = "'Inter Variable', 'Segoe UI', Arial, sans-serif";
const INK = '#0f172a';
const MUTED = '#64748b';
const ACCENT = '#0e7490';
const LINE = '#cbd5e1';

const words = {
  site: { en: 'Chemistry Practical & LSM · Student report', mn: 'Chemistry Practical & LSM · Сурагчийн тайлан' },
  student: { en: 'Student', mn: 'Сурагч' },
  date: { en: 'Date', mn: 'Огноо' },
  status: { en: 'Status', mn: 'Төлөв' },
  examMarks: { en: 'Exam Practice marks', mn: 'Шалгалтын дадлагын оноо' },
  aim: { en: 'Aim', mn: 'Зорилго' },
  apparatus: { en: 'Apparatus', mn: 'Багаж' },
  measurements: { en: 'Measurements', mn: 'Хэмжилт' },
  quantity: { en: 'Quantity', mn: 'Хэмжигдэхүүн' },
  mean: { en: 'Mean', mn: 'Дундаж' },
  unit: { en: 'Unit', mn: 'Нэгж' },
  answers: { en: 'Answers', mn: 'Хариултууд' },
  observations: { en: 'Observations', mn: 'Ажиглалт' },
  calculations: { en: 'Calculations', mn: 'Тооцоолол' },
  marks: { en: 'Marks', mn: 'Оноо' },
  conclusion: { en: 'Conclusion', mn: 'Дүгнэлт' },
  evaluation: { en: 'Evaluation', mn: 'Үнэлгээ' },
  whiteboard: { en: 'Whiteboard', mn: 'Самбар' },
  grade: { en: 'Teacher’s grade (AO3 skills)', mn: 'Багшийн дүгнэлт (AO3 чадвар)' },
  remarks: { en: 'Teacher remarks', mn: 'Багшийн тэмдэглэл' },
  page: { en: 'Page', mn: 'Хуудас' },
};

const loadImage = (src: string) =>
  new Promise<HTMLImageElement>((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });

/** Draws the report onto as many A4 canvases as it needs. */
const drawPages = async (report: LabNotebookEntry, lang: Lang) => {
  const t = (w: { en: string; mn: string }) => w[lang];
  const pages: HTMLCanvasElement[] = [];
  let ctx!: CanvasRenderingContext2D;
  let y = 0;
  const bottom = PT_H - MARGIN - 18;
  const width = PT_W - MARGIN * 2;

  const newPage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = Math.round(PT_W * SCALE);
    canvas.height = Math.round(PT_H * SCALE);
    ctx = canvas.getContext('2d')!;
    ctx.scale(SCALE, SCALE);
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(0, 0, PT_W, PT_H);
    ctx.textBaseline = 'top';
    pages.push(canvas);
    y = MARGIN;
  };
  const font = (size: number, weight = 400) => {
    ctx.font = `${weight} ${size}px ${FONT}`;
  };
  const room = (height: number) => {
    if (y + height > bottom) newPage();
  };
  /** Splits text into lines that fit the width, keeping the writer's own line breaks. */
  const wrap = (text: string, maxWidth: number) => {
    const lines: string[] = [];
    const fits = (s: string) => ctx.measureText(s).width <= maxWidth;
    for (const paragraph of text.split('\n')) {
      let line = '';
      for (let word of paragraph.split(/(\s+)/)) {
        if (fits(line + word)) {
          line += word;
          continue;
        }
        if (line.trim()) {
          lines.push(line.trimEnd());
          line = '';
          word = word.trimStart();
        }
        // A word wider than the whole line is broken by characters.
        for (const ch of word) {
          if (!fits(line + ch) && line) {
            lines.push(line);
            line = '';
          }
          line += ch;
        }
      }
      lines.push(line.trimEnd());
    }
    return lines;
  };
  const paragraph = (text: string, size = 10, color = INK, weight = 400, indent = 0) => {
    font(size, weight);
    const lineHeight = size * 1.45;
    for (const line of wrap(text || '—', width - indent)) {
      room(lineHeight);
      // A new page has its own drawing state, so the font and colour are set for every line.
      font(size, weight);
      ctx.fillStyle = color;
      ctx.fillText(line, MARGIN + indent, y);
      y += lineHeight;
    }
  };
  const heading = (text: string) => {
    room(34);
    y += 10;
    font(9.5, 700);
    ctx.fillStyle = ACCENT;
    ctx.fillText(text.toUpperCase(), MARGIN, y);
    y += 14;
    ctx.strokeStyle = LINE;
    ctx.lineWidth = 0.6;
    ctx.beginPath();
    ctx.moveTo(MARGIN, y);
    ctx.lineTo(MARGIN + width, y);
    ctx.stroke();
    y += 6;
  };
  const section = (title: string, text: string) => {
    heading(title);
    paragraph(text);
  };

  newPage();
  // ---- Heading of the report ----
  paragraph(t(words.site), 8.5, MUTED);
  y += 4;
  paragraph(report.experimentTitle, 16, INK, 700);
  y += 4;
  const facts = [
    `${t(words.student)}: ${report.studentName || '—'}`,
    `${t(words.date)}: ${report.date || '—'}`,
    `${t(words.status)}: ${statusLabel(report.status, lang)}${report.gradeScore ? ` · ${report.gradeScore}` : ''}`,
  ].join('     ');
  paragraph(facts, 10, INK, 500);
  if (report.examScore) paragraph(`${t(words.examMarks)}: ${report.examScore}`, 10, ACCENT, 600);

  section(t(words.aim), report.aim);
  section(t(words.apparatus), report.equipmentUsed);

  // ---- Measurements table ----
  if (report.measurements.length) {
    heading(t(words.measurements));
    const cols = [0.34, 0.12, 0.12, 0.12, 0.14, 0.16].map((f) => f * width);
    const head = [t(words.quantity), '1', '2', '3', t(words.mean), t(words.unit)];
    const drawRow = (cells: string[], bold: boolean, fill?: string) => {
      font(9, bold ? 700 : 400);
      const wrapped = cells.map((cell, i) => wrap(cell || '', cols[i] - 8));
      const height = Math.max(...wrapped.map((l) => l.length)) * 13 + 8;
      room(height);
      let x = MARGIN;
      if (fill) {
        ctx.fillStyle = fill;
        ctx.fillRect(MARGIN, y, width, height);
      }
      ctx.strokeStyle = LINE;
      ctx.lineWidth = 0.6;
      ctx.strokeRect(MARGIN, y, width, height);
      wrapped.forEach((lines, i) => {
        if (i) {
          ctx.beginPath();
          ctx.moveTo(x, y);
          ctx.lineTo(x, y + height);
          ctx.stroke();
        }
        ctx.fillStyle = INK;
        font(9, bold || i === 4 ? 700 : 400);
        lines.forEach((line, k) => ctx.fillText(line, x + 4, y + 4 + k * 13));
        x += cols[i];
      });
      y += height;
    };
    drawRow(head, true, '#f1f5f9');
    report.measurements.forEach((row) => drawRow([row.parameter, row.trial1, row.trial2, row.trial3, row.mean, row.unit], false));
    y += 4;
  }

  section(report.examPaperId ? t(words.answers) : t(words.observations), report.observations);
  section(t(words.calculations), report.calculations);
  section(report.examPaperId ? t(words.marks) : t(words.conclusion), report.conclusion);
  section(t(words.evaluation), report.evaluations);

  // ---- Whiteboard pictures, each scaled to the width of the page ----
  if (report.whiteboardImages?.length) {
    heading(t(words.whiteboard));
    for (const board of report.whiteboardImages) {
      try {
        const img = await loadImage(board.image);
        const w = width;
        const h = (img.height / img.width) * w;
        const fit = Math.min(1, (bottom - MARGIN - 16) / h);
        room(h * fit + 16);
        ctx.drawImage(img, MARGIN, y, w * fit, h * fit);
        ctx.strokeStyle = LINE;
        ctx.strokeRect(MARGIN, y, w * fit, h * fit);
        y += h * fit + 3;
        paragraph(board.page, 8.5, MUTED);
        y += 6;
      } catch {
        paragraph(`${t(words.whiteboard)}: ${board.page} —`, 9, MUTED);
      }
    }
  }

  // ---- The teacher's grade, once there is one ----
  const scores = report.skillScores ?? {};
  if (report.gradeScore || report.teacherRemarks || Object.keys(scores).length) {
    heading(t(words.grade));
    ao3Skills.forEach((skill) => paragraph(`${lang === 'en' ? skill.labelEn : skill.labelMn}: ${scores[skill.id] ?? 0} / ${MAX_SKILL_SCORE}`, 10));
    if (report.gradeScore) paragraph(report.gradeScore, 11, ACCENT, 700);
    if (report.teacherRemarks) {
      y += 4;
      paragraph(`${t(words.remarks)}:`, 10, INK, 600);
      paragraph(report.teacherRemarks, 10);
    }
  }

  // ---- Page numbers and the student's name at the foot of every page ----
  pages.forEach((canvas, i) => {
    const c = canvas.getContext('2d')!;
    c.save();
    c.setTransform(SCALE, 0, 0, SCALE, 0, 0);
    c.font = `400 8px ${FONT}`;
    c.fillStyle = MUTED;
    c.textBaseline = 'alphabetic';
    c.fillText(`${report.studentName || ''}${report.studentName ? ' · ' : ''}${report.experimentTitle}`.slice(0, 110), MARGIN, PT_H - MARGIN + 18);
    const label = `${t(words.page)} ${i + 1} / ${pages.length}`;
    c.fillText(label, PT_W - MARGIN - c.measureText(label).width, PT_H - MARGIN + 18);
    c.restore();
  });
  return pages;
};

const toJpeg = (canvas: HTMLCanvasElement) =>
  new Promise<Uint8Array>((resolve, reject) =>
    canvas.toBlob((blob) => (blob ? blob.arrayBuffer().then((b) => resolve(new Uint8Array(b)), reject) : reject(new Error('no-image'))), 'image/jpeg', 0.9),
  );

/** A PDF with one full-page JPEG picture on each page. */
const buildPdf = (images: { data: Uint8Array; width: number; height: number }[], title: string) => {
  const chunks: Uint8Array[] = [];
  const offsets: number[] = [];
  let length = 0;
  const encoder = new TextEncoder();
  const push = (part: string | Uint8Array) => {
    const bytes = typeof part === 'string' ? encoder.encode(part) : part;
    chunks.push(bytes);
    length += bytes.length;
  };
  const object = (n: number, body: string | (string | Uint8Array)[]) => {
    offsets[n] = length;
    push(`${n} 0 obj\n`);
    (Array.isArray(body) ? body : [body]).forEach(push);
    push('\nendobj\n');
  };
  // A PDF text string in UTF-16 with a byte order mark, so the title keeps its Cyrillic letters.
  const pdfText = (text: string) => {
    let hex = 'FEFF';
    for (const ch of text) {
      const code = ch.codePointAt(0)!;
      const units = code > 0xffff ? [0xd800 + ((code - 0x10000) >> 10), 0xdc00 + ((code - 0x10000) & 0x3ff)] : [code];
      units.forEach((u) => (hex += u.toString(16).padStart(4, '0').toUpperCase()));
    }
    return `<${hex}>`;
  };

  push('%PDF-1.4\n%âãÏÓ\n');
  const pageIds = images.map((_, i) => 4 + i * 3);
  object(1, '<< /Type /Catalog /Pages 2 0 R >>');
  object(2, `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(' ')}] /Count ${images.length} >>`);
  object(3, `<< /Title ${pdfText(title)} /Producer (Chemistry Practical & LSM) >>`);
  images.forEach((img, i) => {
    const page = 4 + i * 3;
    const content = `q ${PT_W} 0 0 ${PT_H} 0 0 cm /Im${i} Do Q`;
    object(page, `<< /Type /Page /Parent 2 0 R /MediaBox [0 0 ${PT_W} ${PT_H}] /Resources << /XObject << /Im${i} ${page + 2} 0 R >> >> /Contents ${page + 1} 0 R >>`);
    object(page + 1, `<< /Length ${content.length} >>\nstream\n${content}\nendstream`);
    object(page + 2, [`<< /Type /XObject /Subtype /Image /Width ${img.width} /Height ${img.height} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${img.data.length} >>\nstream\n`, img.data, '\nendstream']);
  });
  const xref = length;
  const count = 4 + images.length * 3;
  let table = `xref\n0 ${count}\n0000000000 65535 f \n`;
  for (let n = 1; n < count; n++) table += `${String(offsets[n]).padStart(10, '0')} 00000 n \n`;
  push(table);
  push(`trailer\n<< /Size ${count} /Root 1 0 R /Info 3 0 R >>\nstartxref\n${xref}\n%%EOF\n`);
  return new Blob(chunks as BlobPart[], { type: 'application/pdf' });
};

/** The report as a PDF file, in the chosen language for the headings. */
export const reportPdf = async (report: LabNotebookEntry, lang: Lang): Promise<Blob> => {
  // The site's font must be ready before drawing, or the canvas falls back to another one.
  try {
    await Promise.all([document.fonts.load(`400 10px ${FONT}`, 'Аа'), document.fonts.load(`700 10px ${FONT}`, 'Аа')]);
  } catch {
    // Another font is used.
  }
  const pages = await drawPages(report, lang);
  const images = await Promise.all(pages.map(async (canvas) => ({ data: await toJpeg(canvas), width: canvas.width, height: canvas.height })));
  return buildPdf(images, `${report.studentName ? `${report.studentName} — ` : ''}${report.experimentTitle}`);
};

/** A file name made of the student's name, the lesson and the date. */
export const reportPdfName = (report: LabNotebookEntry) => {
  const part = (text: string) => text.replace(/^Хөгжүүлэх хичээл:\s*/, '').replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '').slice(0, 60);
  return `${[part(report.studentName || 'student'), part(report.experimentTitle), report.date].filter(Boolean).join('_')}.pdf`;
};
