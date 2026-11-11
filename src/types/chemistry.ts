export type Language = 'en' | 'mn';

export type UserRole = 'student' | 'teacher' | 'lab_staff';

export type NavigationTab =
  | 'dashboard'
  | 'safety_hub'
  | 'lessons'
  | 'exam_practice'
  | 'apparatus'
  | 'chemicals'
  | 'results'
  | 'notebook'
  | 'management';

export interface ChemicalReagent {
  name: string;
  nameMn: string;
  formula: string | null;
  amount: string;
  hazard: string;
  casNumber?: string;
}

export interface PracticalExperiment {
  id: string;
  chapterId: number;
  chapterCode: string;
  titleEn: string;
  titleMn: string;
  level: 'AS' | 'A2';
  paper: 'Paper 3' | 'Paper 5';
  aimEn: string;
  aimMn: string;
  theoryEn: string;
  theoryMn: string;
  equipmentIds: string[];
  chemicals: ChemicalReagent[];
  safetyNotesEn: string[];
  safetyNotesMn: string[];
  procedureEn: string[];
  procedureMn: string[];
  observationsEn: string[];
  observationsMn: string[];
  calculationsTemplate: {
    formulaEn: string;
    formulaMn: string;
    steps: { en: string; mn: string }[];
    sampleValues?: Record<string, string | number>;
  };
  conclusionEn: string;
  conclusionMn: string;
  evaluationEn: string[];
  evaluationMn: string[];
}

export interface Chapter {
  id: number;
  code: string;
  titleEn: string;
  titleMn: string;
  level: 'AS Level' | 'A Level';
  practicals: PracticalExperiment[];
}

export interface SafetyRule {
  id: number;
  titleEn: string;
  titleMn: string;
  descEn: string;
  descMn: string;
  category: 'ppe' | 'conduct' | 'heating' | 'spills' | 'hygiene';
  icon: string;
}

export interface EmergencyProtocol {
  id: string;
  titleEn: string;
  titleMn: string;
  severity: 'high' | 'critical' | 'moderate';
  firstActionsEn: string[];
  firstActionsMn: string[];
  cautionEn: string;
  cautionMn: string;
  equipmentNeededEn: string;
  equipmentNeededMn: string;
}

export interface ApparatusItem {
  id: string;
  nameEn: string;
  nameMn: string;
  category: 'glassware' | 'measuring' | 'heating' | 'separation' | 'support' | 'electrical';
  purposeEn: string;
  purposeMn: string;
  correctUseEn: string[];
  correctUseMn: string[];
  safetyEn: string[];
  safetyMn: string[];
  cleaningEn: string[];
  cleaningMn: string[];
  tolerance: string;
  uncertainty?: string;
  capacity?: string;
  meniscusNotes?: { en: string; mn: string };
}

export interface ChemicalItem {
  id: string;
  nameEn: string;
  nameMn: string;
  formula: string;
  casNumber: string;
  hazardClasses: string[];
  pictograms: string[];
  ghsCodes: string[];
  riskInfoEn: string;
  riskInfoMn: string;
  ppeRequirementsEn: string[];
  ppeRequirementsMn: string[];
  storageEn: string;
  storageMn: string;
  spillResponseEn: string;
  spillResponseMn: string;
  firstAidEn: string;
  firstAidMn: string;
  molecularWeight?: number;
  density?: string;
}

export interface QuizQuestion {
  id: number;
  questionEn: string;
  questionMn: string;
  optionsEn: string[];
  optionsMn: string[];
  correctIndex: number;
  explanationEn: string;
  explanationMn: string;
}

export interface LabNotebookEntry {
  id: string;
  date: string;
  studentName: string;
  experimentTitle: string;
  practicalId?: string;
  chapterCode: string;
  aim: string;
  equipmentUsed: string;
  measurements: {
    parameter: string;
    trial1: string;
    trial2: string;
    trial3: string;
    mean: string;
    unit: string;
  }[];
  observations: string;
  calculations: string;
  conclusion: string;
  evaluations: string;
  status: 'draft' | 'submitted' | 'graded';
  gradeScore?: string;
  teacherRemarks?: string;
  skillScores?: Record<string, number>;
  /** Set when the entry was copied from a paper in Exam Practice. */
  examPaperId?: string;
  /** The marks the paper gave, such as "23 / 40". */
  examScore?: string;
  /** The pages of the paper's whiteboard that have drawing on them, as JPEG images. */
  whiteboardImages?: { page: string; image: string }[];
}

export interface InventoryItem {
  id: string;
  name: string;
  nameMn: string;
  category: 'chemicals' | 'glassware' | 'equipment';
  stock: number;
  unit: string;
  location: string;
  locationMn: string;
  minThreshold: number;
  status: 'adequate' | 'low' | 'urgent';
  expiryDate?: string;
}

export interface BreakageReport {
  id: string;
  date: string;
  itemId?: string;
  quantity?: number;
  apparatus: string;
  apparatusMn: string;
  studentOrStaff: string;
  studentOrStaffMn: string;
  labLocation: string;
  labLocationMn: string;
  reason: string;
  reasonMn: string;
  actionTaken: string;
  actionTakenMn: string;
  status: 'pending' | 'replaced';
}

export interface PrepLine {
  id: string;
  nameEn: string;
  nameMn: string;
  recipeId?: string;
  amount?: string;
  startedOn: string;
  readyOn: string;
}

export interface PrepJob {
  id: string;
  practicalId: string;
  neededOn: string;
  preparedBy: string;
  createdOn: string;
  lines: PrepLine[];
  acknowledgedOn?: string;
}

export interface LabJournalEntry {
  id: string;
  date: string;
  author: string;
  work: string;
  notes: string;
}
