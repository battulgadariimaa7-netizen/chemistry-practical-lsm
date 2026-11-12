import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { adoptServerFromLink } from './data/reportServer';

// A class link from the teacher connects this device to the teacher's report inbox.
adoptServerFromLink();

createRoot(document.getElementById('root')!).render(<App />);

// The build id gives each release its own offline copy of the site.
if (import.meta.env.PROD && 'serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`${import.meta.env.BASE_URL}sw.js?v=${__BUILD_ID__}`).catch(() => {
      // The site still works online without the service worker.
    });
  });
}
