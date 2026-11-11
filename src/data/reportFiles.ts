import { LabNotebookEntry } from '../types/chemistry';

// Students and teachers exchange reports as files, because the site has no server or accounts.
const FILE_TYPE = 'chemistry-practical-report';
// Reports copied from an exam paper can carry whiteboard pictures, so files may be a few megabytes.
const MAX_FILE_BYTES = 6_000_000;

export const ao3Skills = [
  { id: 'mmo', labelEn: 'Manipulation, Measurement & Observation', labelMn: 'Ажиллагаа, хэмжилт ба ажиглалт' },
  { id: 'pdo', labelEn: 'Presentation of Data & Observations', labelMn: 'Өгөгдөл ба ажиглалтын танилцуулга' },
  { id: 'ace', labelEn: 'Analysis, Conclusions & Evaluation', labelMn: 'Шинжилгээ, дүгнэлт ба үнэлгээ' },
  { id: 'planning', labelEn: 'Planning & Safety Assessment', labelMn: 'Төлөвлөлт ба аюулгүй байдлын үнэлгээ' },
];

export const MAX_SKILL_SCORE = 5;

export const downloadReport = (entry: LabNotebookEntry) => {
  const payload = JSON.stringify({ type: FILE_TYPE, version: 1, entry }, null, 2);
  const url = URL.createObjectURL(new Blob([payload], { type: 'application/json' }));
  const safeName = (entry.studentName || 'student').replace(/[^\p{L}\p{N}]+/gu, '-');
  const link = document.createElement('a');
  link.href = url;
  link.download = `chem-report-${safeName}-${entry.date}.json`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
};

const isText = (value: unknown): value is string => typeof value === 'string';

/** Reads a report file. Anything that does not match the expected shape is rejected. */
export const readReportFile = async (file: File): Promise<LabNotebookEntry> => {
  if (file.size > MAX_FILE_BYTES) throw new Error('too-large');
  const parsed = JSON.parse(await file.text());
  const entry = parsed?.entry;
  const textFields = [
    entry?.id,
    entry?.date,
    entry?.studentName,
    entry?.experimentTitle,
    entry?.chapterCode,
    entry?.aim,
    entry?.equipmentUsed,
    entry?.observations,
    entry?.calculations,
    entry?.conclusion,
    entry?.evaluations,
  ];
  const measurementsValid =
    Array.isArray(entry?.measurements) &&
    entry.measurements.every((row: Record<string, unknown>) =>
      [row?.parameter, row?.trial1, row?.trial2, row?.trial3, row?.mean, row?.unit].every(isText)
    );
  if (parsed?.type !== FILE_TYPE || !textFields.every(isText) || !measurementsValid) {
    throw new Error('invalid');
  }
  // The exam fields are optional: anything that is not plain text or a JPEG/PNG picture is dropped.
  const whiteboardImages = Array.isArray(entry.whiteboardImages)
    ? entry.whiteboardImages.filter(
        (wb: Record<string, unknown>) => isText(wb?.page) && isText(wb?.image) && /^data:image\/(jpeg|png);base64,[A-Za-z0-9+/=]+$/.test(wb.image as string)
      )
    : undefined;
  return {
    ...entry,
    examPaperId: isText(entry.examPaperId) ? entry.examPaperId : undefined,
    examScore: isText(entry.examScore) ? entry.examScore : undefined,
    whiteboardImages: whiteboardImages?.length ? whiteboardImages : undefined,
    status: entry.status === 'graded' ? 'graded' : 'submitted',
  };
};

export const statusLabel = (status: LabNotebookEntry['status'], language: 'en' | 'mn') => {
  const labels = {
    draft: { en: 'Draft', mn: 'Ноорог' },
    submitted: { en: 'Submitted', mn: 'Илгээсэн' },
    graded: { en: 'Graded', mn: 'Дүгнэсэн' },
  };
  return labels[status][language];
};
