import { InventoryItem, BreakageReport } from '../types/chemistry';

export const mockInventory: InventoryItem[] = [
  { id: 'inv-5', name: 'Class B Burettes (50 cm³)', nameMn: 'Бюретка 50 см³', category: 'glassware', stock: 28, unit: 'pcs', location: 'Glassware Cupboard 3', locationMn: 'Шил савны шүүгээ 3', minThreshold: 25, status: 'adequate' },
  { id: 'inv-6', name: 'Volumetric Pipettes (25.0 cm³)', nameMn: 'Пипетк 25.0 см³', category: 'glassware', stock: 18, unit: 'pcs', location: 'Pipette Drawer 1', locationMn: 'Пипеткийн шургуулга 1', minThreshold: 24, status: 'low' },
  { id: 'inv-7', name: 'Gas Syringes (100 cm³)', nameMn: 'Хийн шприц 100 см³', category: 'equipment', stock: 14, unit: 'pcs', location: 'Physics-Chem Rack 4', locationMn: 'Физик-химийн тавиур 4', minThreshold: 12, status: 'adequate' },
  { id: 'inv-8', name: 'Expanded Polystyrene Calorimeters', nameMn: 'Калориметрийн аяга', category: 'equipment', stock: 45, unit: 'pcs', location: 'Thermal Cupboard 2', locationMn: 'Дулааны багажийн шүүгээ 2', minThreshold: 30, status: 'adequate' },
  { id: 'inv-9', name: 'Conical Flasks (250 cm³)', nameMn: 'Конусан колбо 250 см³', category: 'glassware', stock: 30, unit: 'pcs', location: 'Glassware Cupboard 3', locationMn: 'Шил савны шүүгээ 3', minThreshold: 20, status: 'adequate' },
  { id: 'inv-10', name: 'Beakers (250 cm³)', nameMn: 'Шилэн аяга 250 см³', category: 'glassware', stock: 40, unit: 'pcs', location: 'Glassware Cupboard 2', locationMn: 'Шил савны шүүгээ 2', minThreshold: 20, status: 'adequate' },
];

export const mockBreakage: BreakageReport[] = [
  { id: 'brk-1', date: '2026-10-28', itemId: 'inv-5', quantity: 1, apparatus: '50 cm³ Glass Burette', apparatusMn: '50 см³ шилэн бюретка', studentOrStaff: 'Grade 11 Team B', studentOrStaffMn: '11-р анги, B баг', labLocation: 'Bench 4', labLocationMn: '4-р ширээ', reason: 'Tip cracked during clamping onto bosshead', reasonMn: 'Бэхэлгээнд хавчих үед үзүүр нь хагарсан', actionTaken: 'Discarded in Broken Glass Bin. Replacement issued.', actionTakenMn: 'Хагархай шилний саванд хаяв. Шинийг олгосон.', status: 'replaced' },
  { id: 'brk-2', date: '2026-10-31', itemId: 'inv-9', quantity: 1, apparatus: '250 cm³ Conical Flask', apparatusMn: '250 см³ конусан колбо', studentOrStaff: 'Grade 12 Practical Run', studentOrStaffMn: '12-р ангийн туршилт', labLocation: 'Bench 2', labLocationMn: '2-р ширээ', reason: 'Lip chipped against tap faucet', reasonMn: 'Усны цоргонд мөргөж амсар нь хэмхэрсэн', actionTaken: 'Swept with dustpan and logged for replenishment.', actionTakenMn: 'Хог хамагчаар цэвэрлэж, нөхөхөөр бүртгэв.', status: 'pending' },
];
