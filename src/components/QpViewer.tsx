import React, { useCallback, useEffect, useRef, useState } from 'react';
import * as pdfjs from 'pdfjs-dist/legacy/build/pdf.mjs';
import type { PDFDocumentProxy, RenderTask } from 'pdfjs-dist';
import workerUrl from 'pdfjs-dist/legacy/build/pdf.worker.min.mjs?url';
import { ChevronLeft, ChevronRight, Download, Minus, Plus, X } from 'lucide-react';
import { Language } from '../types/chemistry';

// Shows a question paper inside the site, open at the page asked for. Phones and some browsers download a PDF
// instead of showing it, so the pages are drawn here instead. The older build of PDF.js also works on older phones.
pdfjs.GlobalWorkerOptions.workerSrc = workerUrl;

interface QpViewerProps {
  url: string;
  title: string;
  page: number;
  language: Language;
  onClose: () => void;
}

const ZOOMS = [0.75, 1, 1.25, 1.5, 2, 2.5];

export const QpViewer: React.FC<QpViewerProps> = ({ url, title, page: startPage, language, onClose }) => {
  const en = language === 'en';
  const [pdf, setPdf] = useState<PDFDocumentProxy | null>(null);
  const [failed, setFailed] = useState(false);
  const [page, setPage] = useState(startPage);
  const [zoom, setZoom] = useState(1);
  const [drawing, setDrawing] = useState(true);
  const [width, setWidth] = useState(0);
  const body = useRef<HTMLDivElement>(null);
  const canvas = useRef<HTMLCanvasElement>(null);
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => setPage(startPage), [startPage]);

  useEffect(() => {
    const task = pdfjs.getDocument({ url });
    let current = true;
    setPdf(null);
    setFailed(false);
    task.promise.then(
      (doc) => current && setPdf(doc),
      () => current && setFailed(true),
    );
    return () => {
      current = false;
      void task.destroy();
    };
  }, [url]);

  // The page fills the width of the screen, up to a comfortable reading width on a computer.
  useEffect(() => {
    const element = body.current;
    if (!element) return;
    // A little less than the space inside the padding, so rounding never adds a sideways scroll bar.
    const measure = () => setWidth(Math.min(element.clientWidth - 28, 900));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!pdf || !width || !canvas.current) return;
    const target = canvas.current;
    let task: RenderTask | null = null;
    let current = true;
    setDrawing(true);
    pdf.getPage(Math.min(Math.max(page, 1), pdf.numPages)).then((pdfPage) => {
      if (!current) return;
      const cssScale = (width * zoom) / pdfPage.getViewport({ scale: 1 }).width;
      const ratio = Math.min(window.devicePixelRatio || 1, 3);
      const viewport = pdfPage.getViewport({ scale: cssScale * ratio });
      target.width = Math.floor(viewport.width);
      target.height = Math.floor(viewport.height);
      target.style.width = `${Math.floor(viewport.width / ratio)}px`;
      target.style.height = `${Math.floor(viewport.height / ratio)}px`;
      const context = target.getContext('2d');
      if (!context) return;
      task = pdfPage.render({ canvasContext: context, viewport });
      task.promise.then(
        () => current && setDrawing(false),
        () => undefined, // cancelled because another page or size was chosen
      );
    }, () => current && setFailed(true));
    return () => {
      current = false;
      task?.cancel();
    };
  }, [pdf, page, width, zoom]);

  const pages = pdf?.numPages ?? 0;
  const goTo = useCallback(
    (next: number) => {
      if (!pages) return;
      setPage(Math.min(Math.max(next, 1), pages));
      body.current?.scrollTo({ top: 0, left: 0 });
    },
    [pages],
  );
  const zoomBy = (step: number) => setZoom((z) => ZOOMS[Math.min(Math.max(ZOOMS.indexOf(z) + step, 0), ZOOMS.length - 1)]);

  useEffect(() => {
    closeButton.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      else if (event.key === 'ArrowRight' || event.key === 'PageDown') goTo(page + 1);
      else if (event.key === 'ArrowLeft' || event.key === 'PageUp') goTo(page - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [goTo, onClose, page]);

  const iconButton =
    'inline-flex items-center justify-center w-9 h-9 rounded-lg text-slate-700 hover:bg-slate-100 disabled:opacity-40 disabled:hover:bg-transparent transition-colors';

  return (
    <div role="dialog" aria-modal="true" aria-label={title} className="fixed inset-0 z-[70] flex flex-col bg-slate-800">
      <div className="flex flex-wrap items-center gap-x-2 gap-y-1 px-2 sm:px-4 py-1.5 bg-white border-b border-slate-200">
        <button ref={closeButton} type="button" onClick={onClose} className={iconButton} aria-label={en ? 'Close' : 'Хаах'} title={en ? 'Close (Esc)' : 'Хаах (Esc)'}>
          <X className="w-5 h-5" />
        </button>
        <div className="min-w-0 flex-1 text-sm font-semibold text-slate-900 truncate">{title}</div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={() => goTo(page - 1)} disabled={!pages || page <= 1} className={iconButton} aria-label={en ? 'Previous page' : 'Өмнөх хуудас'}>
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="min-w-[4.5rem] text-center text-xs font-semibold text-slate-700 tabular-nums" aria-live="polite">
            {pages ? (en ? `Page ${page} / ${pages}` : `${page} / ${pages}-р хуудас`) : '…'}
          </span>
          <button type="button" onClick={() => goTo(page + 1)} disabled={!pages || page >= pages} className={iconButton} aria-label={en ? 'Next page' : 'Дараагийн хуудас'}>
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-1">
          <button type="button" onClick={() => zoomBy(-1)} disabled={zoom === ZOOMS[0]} className={iconButton} aria-label={en ? 'Zoom out' : 'Жижигрүүлэх'}>
            <Minus className="w-4 h-4" />
          </button>
          <button type="button" onClick={() => zoomBy(1)} disabled={zoom === ZOOMS[ZOOMS.length - 1]} className={iconButton} aria-label={en ? 'Zoom in' : 'Томруулах'}>
            <Plus className="w-4 h-4" />
          </button>
          <a href={url} download className={iconButton} aria-label={en ? 'Download the PDF' : 'PDF татах'} title={en ? 'Download the PDF' : 'PDF татах'}>
            <Download className="w-4 h-4" />
          </a>
        </div>
      </div>
      <div ref={body} className="relative flex-1 min-h-0 overflow-auto p-3" style={{ scrollbarGutter: 'stable' }}>
        {failed ? (
          <div className="mx-auto max-w-md mt-10 p-4 rounded-lg bg-white text-sm text-slate-700 text-center space-y-2">
            <p>{en ? 'The question paper could not be opened. Check the internet connection and try again.' : 'Асуултын хуудсыг нээж чадсангүй. Интернэтээ шалгаад дахин оролдоно уу.'}</p>
            <a href={url} download className="inline-block text-cyan-700 font-semibold underline">{en ? 'Download the PDF instead' : 'PDF-ийг татаж авах'}</a>
          </div>
        ) : (
          <>
            <canvas ref={canvas} className={`block mx-auto bg-white shadow-lg transition-opacity ${drawing ? 'opacity-60' : ''}`} />
            {drawing && (
              <div className="absolute inset-x-0 top-10 flex justify-center pointer-events-none">
                <span className="px-3 py-1.5 rounded-full bg-white/95 text-xs font-medium text-slate-700 shadow">{en ? 'Opening the page…' : 'Хуудсыг нээж байна…'}</span>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default QpViewer;
