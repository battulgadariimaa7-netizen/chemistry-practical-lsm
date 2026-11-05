import React from 'react';

const tones = {
  cyan: { header: 'from-cyan-50', icon: 'bg-cyan-100 text-cyan-700' },
  emerald: { header: 'from-emerald-50', icon: 'bg-emerald-100 text-emerald-700' },
  amber: { header: 'from-amber-50', icon: 'bg-amber-100 text-amber-700' },
  rose: { header: 'from-rose-50', icon: 'bg-rose-100 text-rose-700' },
};

interface StaffCardProps {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle?: string;
  tone?: keyof typeof tones;
  actions?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  // With onSubmit the whole card is a form.
  onSubmit?: (event: React.FormEvent) => void;
  formRef?: React.Ref<HTMLFormElement>;
  children: React.ReactNode;
}

export const StaffCard: React.FC<StaffCardProps> = ({
  icon: Icon,
  title,
  subtitle,
  tone = 'cyan',
  actions,
  className = '',
  bodyClassName = 'space-y-4',
  onSubmit,
  formRef,
  children,
}) => {
  const shell = `bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-hidden print:border-0 print:shadow-none print:rounded-none ${className}`;
  const content = (
    <>
      <div className={`flex flex-wrap items-center justify-between gap-3 px-5 sm:px-6 py-4 border-b border-slate-100 bg-linear-to-r ${tones[tone].header} to-white print:bg-none print:px-0`}>
        <div className="flex items-start gap-3 min-w-0">
          <span className={`w-9 h-9 shrink-0 rounded-xl flex items-center justify-center print:hidden ${tones[tone].icon}`}>
            <Icon className="w-[18px] h-[18px]" />
          </span>
          <div className="min-w-0">
            <h3 className="text-base font-bold text-slate-900">{title}</h3>
            {subtitle && <p className="text-xs text-slate-600 mt-0.5">{subtitle}</p>}
          </div>
        </div>
        {actions}
      </div>
      <div className={`p-5 sm:p-6 print:p-0 print:pt-3 ${bodyClassName}`}>{children}</div>
    </>
  );
  return onSubmit ? (
    <form ref={formRef} onSubmit={onSubmit} className={shell}>{content}</form>
  ) : (
    <section className={shell}>{content}</section>
  );
};
