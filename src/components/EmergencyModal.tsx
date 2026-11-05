import React, { useState } from 'react';
import { Language } from '../types/chemistry';
import { emergencyProtocols } from '../data/safetyRules';
import { getSeverityLabel } from '../data/labLabels';
import { SafetyArt } from './art/SafetyArt';
import { AlertTriangle, X, PhoneCall, ShieldAlert, LifeBuoy } from 'lucide-react';

interface EmergencyModalProps {
  language: Language;
  isOpen: boolean;
  onClose: () => void;
  initialProtocolId?: string;
}

export const EmergencyModal: React.FC<EmergencyModalProps> = ({
  language,
  isOpen,
  onClose,
  initialProtocolId,
}) => {
  if (!isOpen) return null;

  const [selectedProtocolId, setSelectedProtocolId] = useState(
    initialProtocolId || emergencyProtocols[0].id
  );

  const activeProtocol =
    emergencyProtocols.find((p) => p.id === selectedProtocolId) || emergencyProtocols[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs">
      <div className="bg-white border-2 border-rose-600 rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl flex flex-col">
        {/* Urgent Header */}
        <div className="bg-rose-600 text-white p-5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-white/20 flex items-center justify-center">
              <ShieldAlert className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[11px] uppercase tracking-wider font-semibold opacity-90">
                {language === 'en' ? 'Critical Emergency Fast Guide' : 'Ослын яаралтай тусламжийн заавар'}
              </div>
              <h3 className="text-lg font-bold">
                {language === 'en' ? 'Immediate Chemical Laboratory Action' : 'Химийн лабораторийн ослын үеийн арга хэмжээ'}
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-white/20 text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Quick Select Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {emergencyProtocols.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedProtocolId(p.id)}
                className={`p-2.5 rounded-lg border text-xs font-semibold text-left transition-colors truncate ${
                  selectedProtocolId === p.id
                    ? 'bg-rose-50 border-rose-500 text-rose-900 ring-1 ring-rose-500'
                    : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
                }`}
              >
                {language === 'en' ? p.titleEn : p.titleMn}
              </button>
            ))}
          </div>

          {/* Active protocol details */}
          <div className="border border-slate-200 rounded-xl p-5 space-y-4 bg-slate-50">
            <div className="max-w-xs mx-auto aspect-[4/3] rounded-lg overflow-hidden">
              <SafetyArt id={activeProtocol.id} label={language === 'en' ? activeProtocol.titleEn : activeProtocol.titleMn} />
            </div>
            <div className="flex items-center justify-between gap-3">
              <h4 className="text-base font-bold text-slate-900">
                {language === 'en' ? activeProtocol.titleEn : activeProtocol.titleMn}
              </h4>
              <span className="text-xs font-bold uppercase text-rose-600 bg-rose-100 px-2.5 py-0.5 rounded">
                {getSeverityLabel(activeProtocol.severity, language)}
              </span>
            </div>

            <div className="space-y-2">
              <div className="text-xs font-bold uppercase text-slate-700">
                {language === 'en' ? 'Step-by-Step Response Protocol:' : 'Авах арга хэмжээний дараалал:'}
              </div>
              <ol className="space-y-2 text-xs sm:text-sm text-slate-800">
                {(language === 'en' ? activeProtocol.firstActionsEn : activeProtocol.firstActionsMn).map((st, i) => (
                  <li key={i} className="flex items-start gap-2.5 bg-white p-3 rounded-lg border border-slate-200">
                    <span className="w-5 h-5 rounded-full bg-rose-600 text-white text-xs flex items-center justify-center shrink-0 mt-0.5 font-bold">
                      {i + 1}
                    </span>
                    <span className="font-medium leading-relaxed">{st}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="p-3 rounded-lg bg-rose-100/70 border border-rose-300 text-xs text-rose-950 font-medium">
              <span className="font-bold">{language === 'en' ? 'DO NOT: ' : 'АНХААРУУЛГА: '}</span>
              {language === 'en' ? activeProtocol.cautionEn : activeProtocol.cautionMn}
            </div>

            <div className="text-xs text-slate-600">
              <span className="font-bold text-slate-800">{language === 'en' ? 'Required Equipment: ' : 'Ашиглах төхөөрөмж: '}</span>
              {language === 'en' ? activeProtocol.equipmentNeededEn : activeProtocol.equipmentNeededMn}
            </div>
          </div>
        </div>

        <div className="bg-slate-100 p-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 text-slate-700">
            <PhoneCall className="w-4 h-4 text-rose-600" />
            <span>
              {language === 'en'
                ? 'Tell your teacher at once. Mongolia: Ambulance 103 · Fire 101'
                : 'Багшдаа даруй мэдэгдэнэ. Түргэн тусламж 103 · Гал унтраах 101'}
            </span>
          </div>
          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors ml-auto"
          >
            {language === 'en' ? 'Close Emergency Protocol' : 'Цонхыг хаах'}
          </button>
        </div>
      </div>
    </div>
  );
};
