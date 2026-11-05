import React from 'react';
import { Language } from '../types/chemistry';
import { ApparatusPhoto } from '../data/apparatusPhotos';

const licenseLabel = (photo: ApparatusPhoto, language: Language) =>
  photo.license === 'Public domain' && language !== 'en' ? 'Нийтийн өмч' : photo.license;

const isOurLaboratory = (photo: ApparatusPhoto) => !photo.sourceUrl;

/** One line of credits for photos too small to carry their own. */
export const PhotoCreditList: React.FC<{ photos: ApparatusPhoto[]; language: Language }> = ({ photos, language }) => (
  <p className="text-[11px] text-slate-500 leading-relaxed">
    {language === 'en'
      ? `Photos from ${photos.some(isOurLaboratory) ? 'our laboratory and ' : ''}Wikimedia Commons, resized or cropped: `
      : `Зургууд ${photos.some(isOurLaboratory) ? 'манай лаборатори болон ' : ''}Wikimedia Commons-оос, хэмжээг өөрчилсөн эсвэл хэсэглэсэн: `}
    {photos.map((photo, index) => (
      <React.Fragment key={photo.src}>
        {index > 0 && ' · '}
        {isOurLaboratory(photo) ? (language === 'en' ? 'our laboratory' : 'манай лаборатори') : (
        <>
        <a href={photo.sourceUrl} target="_blank" rel="noreferrer" className="underline hover:opacity-70">{photo.author}</a>
        {' ('}
        {photo.licenseUrl
          ? <a href={photo.licenseUrl} target="_blank" rel="noreferrer" className="underline hover:opacity-70">{licenseLabel(photo, language)}</a>
          : licenseLabel(photo, language)}
        {')'}
        </>
        )}
      </React.Fragment>
    ))}
  </p>
);

export const PhotoCredit: React.FC<{ photo: ApparatusPhoto; language: Language; cropped?: boolean; className?: string }> = ({ photo, language, cropped, className = 'text-slate-500' }) => {
  const en = language === 'en';
  if (isOurLaboratory(photo)) {
    return <figcaption className={`text-[11px] leading-snug ${className}`}>{en ? 'Photo: our laboratory' : 'Зураг: манай лаборатори'}</figcaption>;
  }
  const license = licenseLabel(photo, language);
  const change = cropped ? (en ? 'cropped' : 'хэсэглэсэн') : (en ? 'resized' : 'хэмжээг өөрчилсөн');
  return (
    <figcaption className={`text-[11px] leading-snug ${className}`}>
      {en ? 'Photo' : 'Зураг'}: {photo.author},{' '}
      {photo.licenseUrl
        ? <a href={photo.licenseUrl} target="_blank" rel="noreferrer" className="underline hover:opacity-70">{license}</a>
        : license},{' '}
      <a href={photo.sourceUrl} target="_blank" rel="noreferrer" className="underline hover:opacity-70">Wikimedia Commons</a>, {change}
    </figcaption>
  );
};
