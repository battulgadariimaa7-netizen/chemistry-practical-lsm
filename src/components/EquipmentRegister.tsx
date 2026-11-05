import React, { useRef, useState } from 'react';
import { BreakageReport, InventoryItem, Language } from '../types/chemistry';
import { apparatusList } from '../data/apparatus';
import { getInventoryCategoryLabel, getInventoryUnitLabel } from '../data/labLabels';
import { todayText } from '../data/solutionRecipes';
import { StaffCard } from './StaffCard';
import { History, Layers, Plus, ShieldAlert, Trash2 } from 'lucide-react';

const equipmentCategories = new Set(['heating', 'support', 'electrical']);
const OTHER_ITEM = 'other';

interface EquipmentRegisterProps {
  language: Language;
  items: InventoryItem[];
  onChangeItems: React.Dispatch<React.SetStateAction<InventoryItem[]>>;
  breakages: BreakageReport[];
  onChangeBreakages: React.Dispatch<React.SetStateAction<BreakageReport[]>>;
}

export const EquipmentRegister: React.FC<EquipmentRegisterProps> = ({ language, items, onChangeItems, breakages, onChangeBreakages }) => {
  const en = language === 'en';
  const breakageForm = useRef<HTMLFormElement>(null);

  const [catalogId, setCatalogId] = useState('');
  const [itemName, setItemName] = useState('');
  const [category, setCategory] = useState<'glassware' | 'equipment'>('glassware');
  const [stock, setStock] = useState('');
  const [threshold, setThreshold] = useState('');
  const [location, setLocation] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState<string | null>(null);

  const [brokenItemId, setBrokenItemId] = useState('');
  const [brokenCount, setBrokenCount] = useState('1');
  const [brokenDate, setBrokenDate] = useState(todayText);
  const [brokenBy, setBrokenBy] = useState('');
  const [brokenReason, setBrokenReason] = useState('');

  const shown = items.filter((item) => item.category !== 'chemicals');
  const itemLabel = (item: InventoryItem) => (en ? item.name : item.nameMn);
  const openBreakages = (id: string) =>
    breakages.filter((report) => report.itemId === id && report.status === 'pending').reduce((sum, report) => sum + (report.quantity ?? 1), 0);

  const handleChooseCatalog = (id: string) => {
    setCatalogId(id);
    const apparatus = apparatusList.find((item) => item.id === id);
    setItemName(apparatus ? (en ? apparatus.nameEn : apparatus.nameMn) : '');
    if (apparatus) setCategory(equipmentCategories.has(apparatus.category) || apparatus.id === 'analytical_balance' ? 'equipment' : 'glassware');
  };

  const handleAddItem = (event: React.FormEvent) => {
    event.preventDefault();
    const name = itemName.trim();
    if (!name) return;
    const apparatus = apparatusList.find((item) => item.id === catalogId);
    const untouched = apparatus && name === (en ? apparatus.nameEn : apparatus.nameMn);
    onChangeItems((current) => [
      {
        id: `inv-${Date.now()}`,
        name: untouched ? apparatus.nameEn : name,
        nameMn: untouched ? apparatus.nameMn : name,
        category,
        stock: Math.max(0, Number(stock) || 0),
        unit: 'pcs',
        location: location.trim(),
        locationMn: location.trim(),
        minThreshold: Math.max(0, Number(threshold) || 0),
        status: 'adequate',
      },
      ...current,
    ]);
    setCatalogId('');
    setItemName('');
    setStock('');
    setThreshold('');
    setLocation('');
  };

  const handleRestock = (id: string) => {
    onChangeItems((current) => current.map((item) => (item.id === id ? { ...item, stock: item.stock + 5 } : item)));
  };

  const handleLogBreakage = (event: React.FormEvent) => {
    event.preventDefault();
    const item = shown.find((entry) => entry.id === brokenItemId);
    if (!item) return;
    const quantity = Math.max(1, Math.floor(Number(brokenCount)) || 1);
    const report: BreakageReport = {
      id: `brk-${Date.now()}`,
      date: brokenDate || todayText(),
      itemId: item.id,
      quantity,
      apparatus: item.name,
      apparatusMn: item.nameMn,
      studentOrStaff: brokenBy.trim() || 'Not stated',
      studentOrStaffMn: brokenBy.trim() || 'Заагаагүй',
      labLocation: '',
      labLocationMn: '',
      reason: brokenReason.trim() || 'Not stated',
      reasonMn: brokenReason.trim() || 'Заагаагүй',
      actionTaken: 'Discarded in the broken glass bin and logged for replacement.',
      actionTakenMn: 'Хагархай шилний саванд хаяж, солихоор бүртгэв.',
      status: 'pending',
    };
    onChangeBreakages((current) => [report, ...current]);
    onChangeItems((current) => current.map((entry) => (entry.id === item.id ? { ...entry, stock: Math.max(0, entry.stock - quantity) } : entry)));
    setBrokenItemId('');
    setBrokenCount('1');
    setBrokenDate(todayText());
    setBrokenBy('');
    setBrokenReason('');
  };

  const handleReplaced = (report: BreakageReport) => {
    onChangeBreakages((current) => current.map((entry) => (entry.id === report.id ? { ...entry, status: 'replaced' } : entry)));
    if (report.itemId) {
      onChangeItems((current) =>
        current.map((entry) => (entry.id === report.itemId ? { ...entry, stock: entry.stock + (report.quantity ?? 1) } : entry))
      );
    }
  };

  const inputClass = 'w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs text-slate-900 shadow-xs focus:outline-none focus:ring-2 focus:ring-cyan-500/30 focus:border-cyan-500';

  return (
    <div className="space-y-6">
      <StaffCard
        icon={Layers}
        title={en ? 'Glassware and Equipment Register' : 'Шил сав, багаж, тоног төхөөрөмжийн бүртгэл'}
        subtitle={en ? 'Stock and storage location. A logged breakage is taken off the stock.' : 'Үлдэгдэл, хадгалах байршил. Эвдрэл бүртгэхэд үлдэгдлээс автоматаар хасагдана.'}
      >
        <form onSubmit={handleAddItem} className="p-4 rounded-xl bg-linear-to-br from-cyan-50/80 to-white border border-cyan-100 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-end">
          <div className="lg:col-span-3">
            <label htmlFor="item-catalog" className="block text-xs font-medium text-slate-700 mb-1">
              {en ? 'From the catalog' : 'Каталогоос сонгох'}
            </label>
            <select id="item-catalog" value={catalogId} onChange={(event) => handleChooseCatalog(event.target.value)} className={inputClass}>
              <option value="">{en ? 'Select an item' : 'Багаж сонгоно уу'}</option>
              {apparatusList.map((item) => (
                <option key={item.id} value={item.id}>{en ? item.nameEn : item.nameMn}</option>
              ))}
              <option value={OTHER_ITEM}>{en ? 'Other item' : 'Бусад'}</option>
            </select>
          </div>
          <div className="lg:col-span-3">
            <label htmlFor="item-name" className="block text-xs font-medium text-slate-700 mb-1">
              {en ? 'Name and size' : 'Нэр, хэмжээ'}
            </label>
            <input id="item-name" type="text" required value={itemName} onChange={(event) => setItemName(event.target.value)} className={inputClass} />
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="item-category" className="block text-xs font-medium text-slate-700 mb-1">
              {en ? 'Category' : 'Ангилал'}
            </label>
            <select id="item-category" value={category} onChange={(event) => setCategory(event.target.value as 'glassware' | 'equipment')} className={inputClass}>
              <option value="glassware">{en ? 'Glassware' : 'Шил сав'}</option>
              <option value="equipment">{en ? 'Equipment' : 'Багаж, төхөөрөмж'}</option>
            </select>
          </div>
          <div className="lg:col-span-1">
            <label htmlFor="item-stock" className="block text-xs font-medium text-slate-700 mb-1">{en ? 'Count' : 'Тоо'}</label>
            <input id="item-stock" type="number" min="0" step="1" required value={stock} onChange={(event) => setStock(event.target.value)} className={`${inputClass} tabular-nums`} />
          </div>
          <div className="lg:col-span-1">
            <label htmlFor="item-threshold" className="block text-xs font-medium text-slate-700 mb-1">{en ? 'Minimum' : 'Доод'}</label>
            <input id="item-threshold" type="number" min="0" step="1" value={threshold} onChange={(event) => setThreshold(event.target.value)} className={`${inputClass} tabular-nums`} />
          </div>
          <div className="lg:col-span-2">
            <label htmlFor="item-location" className="block text-xs font-medium text-slate-700 mb-1">{en ? 'Location' : 'Байршил'}</label>
            <input id="item-location" type="text" value={location} onChange={(event) => setLocation(event.target.value)} className={inputClass} />
          </div>
          <button
            type="submit"
            className="sm:col-span-2 lg:col-span-12 lg:justify-self-end inline-flex items-center justify-center gap-1.5 px-4 py-2 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold text-xs rounded-lg transition-colors"
          >
            <Plus className="w-3.5 h-3.5" />
            <span>{en ? 'Add to the register' : 'Бүртгэлд нэмэх'}</span>
          </button>
        </form>

        <div className="overflow-x-auto border border-slate-200 rounded-xl">
          <table className="w-full text-xs text-left">
            <thead className="bg-cyan-50 text-cyan-900 text-[11px] border-b border-cyan-100 uppercase">
              <tr>
                <th className="p-3">{en ? 'Item Name' : 'Нэр'}</th>
                <th className="p-3">{en ? 'Category' : 'Ангилал'}</th>
                <th className="p-3">{en ? 'Current Stock' : 'Үлдэгдэл'}</th>
                <th className="p-3">{en ? 'Location' : 'Байршил'}</th>
                <th className="p-3">{en ? 'Minimum' : 'Доод хязгаар'}</th>
                <th className="p-3">{en ? 'Broken' : 'Эвдэрсэн'}</th>
                <th className="p-3">{en ? 'Status' : 'Төлөв'}</th>
                <th className="p-3 text-right">{en ? 'Actions' : 'Үйлдэл'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {shown.map((item) => {
                const low = item.stock < item.minThreshold;
                const broken = openBreakages(item.id);
                return (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-semibold text-slate-900">{itemLabel(item)}</td>
                    <td className="p-3 uppercase text-[11px] text-slate-500">{getInventoryCategoryLabel(item.category, language)}</td>
                    <td className="p-3 font-bold text-slate-800 tabular-nums whitespace-nowrap">{item.stock} {getInventoryUnitLabel(item.unit, language)}</td>
                    <td className="p-3 text-slate-600">{en ? item.location : item.locationMn}</td>
                    <td className="p-3 text-slate-500 tabular-nums">{item.minThreshold}</td>
                    <td className={`p-3 tabular-nums ${broken > 0 ? 'font-bold text-rose-700' : 'text-slate-500'}`}>{broken}</td>
                    <td className="p-3">
                      <span className={`text-[11px] px-2.5 py-0.5 rounded-full font-semibold whitespace-nowrap ${low ? 'bg-rose-100 text-rose-800' : 'bg-emerald-100 text-emerald-800'}`}>
                        {low ? (en ? 'Low Stock' : 'Дутагдаж байна') : (en ? 'Sufficient' : 'Хангалттай')}
                      </span>
                    </td>
                    <td className="p-3">
                      <div className="flex items-center justify-end gap-3 whitespace-nowrap">
                        <button type="button" onClick={() => handleRestock(item.id)} className="text-cyan-700 hover:text-cyan-800 font-semibold hover:underline">
                          {en ? '+ Add 5' : '+ 5 нэмэх'}
                        </button>
                        <button
                          type="button"
                          onClick={() => {
                            setBrokenItemId(item.id);
                            breakageForm.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
                          }}
                          className="text-rose-700 hover:text-rose-800 font-semibold hover:underline"
                        >
                          {en ? 'Log breakage' : 'Эвдрэл бүртгэх'}
                        </button>
                        {confirmDeleteId === item.id ? (
                          <>
                            <button
                              type="button"
                              onClick={() => {
                                onChangeItems((current) => current.filter((entry) => entry.id !== item.id));
                                setConfirmDeleteId(null);
                              }}
                              className="px-2 py-0.5 rounded bg-rose-700 hover:bg-rose-800 text-white font-semibold"
                            >
                              {en ? 'Delete' : 'Устгах'}
                            </button>
                            <button type="button" onClick={() => setConfirmDeleteId(null)} className="text-slate-600 hover:underline">
                              {en ? 'Keep' : 'Болих'}
                            </button>
                          </>
                        ) : (
                          <button
                            type="button"
                            onClick={() => setConfirmDeleteId(item.id)}
                            aria-label={en ? `Remove ${itemLabel(item)}` : `${itemLabel(item)}-г хасах`}
                            className="text-slate-400 hover:text-rose-700"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                );
              })}
              {shown.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-4 text-slate-600">{en ? 'The register is empty.' : 'Бүртгэл хоосон байна.'}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </StaffCard>

      {/* Breakages, kept with the register so that the stock stays right */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        <StaffCard className="lg:col-span-7" icon={History} tone="amber" title={en ? 'Breakage History' : 'Эвдрэл, хагарлын түүх'}>
          {breakages.length === 0 && (
            <p className="p-6 rounded-xl border border-dashed border-slate-300 text-center text-xs text-slate-600">{en ? 'No breakages logged.' : 'Эвдрэл бүртгэгдээгүй байна.'}</p>
          )}
          <div className="space-y-3 text-xs">
            {breakages.map((report) => (
              <div
                key={report.id}
                className={`p-4 rounded-xl bg-white border border-slate-200 border-l-4 shadow-xs space-y-1.5 ${
                  report.status === 'replaced' ? 'border-l-emerald-500' : 'border-l-amber-400'
                }`}
              >
                <div className="flex flex-wrap items-center justify-between gap-2 text-[11px] text-slate-500">
                  <span className="tabular-nums">
                    {report.date}
                    {(en ? report.labLocation : report.labLocationMn) && ` · ${en ? report.labLocation : report.labLocationMn}`}
                  </span>
                  <span className={`font-semibold ${report.status === 'replaced' ? 'text-emerald-700' : 'text-amber-700'}`}>
                    {report.status === 'replaced' ? (en ? 'Replaced' : 'Сольсон') : (en ? 'Awaiting replacement' : 'Солих хүлээгдэж буй')}
                  </span>
                </div>
                <h4 className="font-bold text-slate-900 text-sm">
                  {en ? report.apparatus : report.apparatusMn}
                  {report.quantity && report.quantity > 1 && <span className="font-medium text-slate-600"> × {report.quantity}</span>}
                </h4>
                <div className="text-slate-600">
                  <span className="font-medium">{en ? 'User/Team' : 'Хэрэглэгч/баг'}:</span> {en ? report.studentOrStaff : report.studentOrStaffMn}
                </div>
                <div className="text-slate-600">
                  <span className="font-medium">{en ? 'Reason' : 'Шалтгаан'}:</span> {en ? report.reason : report.reasonMn}
                </div>
                <div className="text-slate-500 text-[11px] pt-1">
                  {en ? 'Action' : 'Авсан арга хэмжээ'}: {en ? report.actionTaken : report.actionTakenMn}
                </div>
                {report.status === 'pending' && (
                  <button
                    type="button"
                    onClick={() => handleReplaced(report)}
                    className="mt-1 px-2.5 py-1 rounded-md border border-emerald-200 bg-emerald-50 text-emerald-800 hover:bg-emerald-100 font-semibold transition-colors"
                  >
                    {en ? 'Mark as replaced' : 'Сольсон гэж тэмдэглэх'}
                  </button>
                )}
              </div>
            ))}
          </div>
        </StaffCard>

        <StaffCard
          className="lg:col-span-5"
          bodyClassName="space-y-3 text-xs"
          icon={ShieldAlert}
          tone="rose"
          title={en ? 'Log a Breakage' : 'Шинэ эвдрэл, хагарал бүртгэх'}
          onSubmit={handleLogBreakage}
          formRef={breakageForm}
        >
          <div>
            <label htmlFor="broken-item" className="block text-slate-700 font-medium mb-1">{en ? 'Item' : 'Багаж'}</label>
            <select id="broken-item" required value={brokenItemId} onChange={(event) => setBrokenItemId(event.target.value)} className={inputClass}>
              <option value="">{en ? 'Select from the register' : 'Бүртгэлээс сонгоно уу'}</option>
              {shown.map((item) => (
                <option key={item.id} value={item.id}>{itemLabel(item)}</option>
              ))}
            </select>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label htmlFor="broken-count" className="block text-slate-700 font-medium mb-1">{en ? 'How many' : 'Хэдэн ширхэг'}</label>
              <input id="broken-count" type="number" min="1" step="1" value={brokenCount} onChange={(event) => setBrokenCount(event.target.value)} className={`${inputClass} tabular-nums`} />
            </div>
            <div>
              <label htmlFor="broken-date" className="block text-slate-700 font-medium mb-1">{en ? 'Date' : 'Огноо'}</label>
              <input id="broken-date" type="date" value={brokenDate} onChange={(event) => setBrokenDate(event.target.value)} className={inputClass} />
            </div>
          </div>
          <div>
            <label htmlFor="broken-by" className="block text-slate-700 font-medium mb-1">{en ? 'Student team or bench' : 'Сурагчийн баг / ширээ'}</label>
            <input id="broken-by" type="text" value={brokenBy} onChange={(event) => setBrokenBy(event.target.value)} className={inputClass} />
          </div>
          <div>
            <label htmlFor="broken-reason" className="block text-slate-700 font-medium mb-1">{en ? 'Reason' : 'Шалтгаан / нөхцөл байдал'}</label>
            <textarea id="broken-reason" rows={3} value={brokenReason} onChange={(event) => setBrokenReason(event.target.value)} className={inputClass} />
          </div>
          <button type="submit" className="w-full py-2.5 px-4 bg-cyan-700 hover:bg-cyan-800 text-white font-semibold rounded-lg transition-colors">
            {en ? 'Save breakage' : 'Эвдрэл хадгалах'}
          </button>
        </StaffCard>
      </div>
    </div>
  );
};
