'use client';

import React, { useState, useEffect } from 'react';
import { Cookie } from 'lucide-react';

interface CookieBannerProps {
  onOpenLegal: (tab: 'privacy' | 'terms' | 'legal') => void;
}

export default function CookieBanner({ onOpenLegal }: CookieBannerProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('implantes_landing_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('implantes_landing_cookie_consent', 'accepted');
    setShow(false);
  };

  const handleReject = () => {
    localStorage.setItem('implantes_landing_cookie_consent', 'rejected');
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Consentimiento de Cookies"
      className="fixed bottom-4 left-4 right-4 md:left-auto md:right-4 md:max-w-md z-50 p-5 rounded-2xl bg-clinic-900/95 border border-dental-500/40 shadow-2xl backdrop-blur-md text-white animate-fadeIn"
    >
      <div className="flex items-start gap-3 mb-3">
        <div className="p-2 rounded-xl bg-dental-500/10 text-dental-400 flex-shrink-0">
          <Cookie className="w-5 h-5" />
        </div>
        <div>
          <h4 className="text-sm font-bold text-white">Privacidad y Cookies Sanitarias</h4>
          <p className="text-xs text-slate-300 mt-1 leading-relaxed">
            Utilizamos cookies técnicas y analíticas de bajo impacto para asegurar el funcionamiento del portal y respetar tu privacidad según el RGPD y la LOPD-GDD.
          </p>
        </div>
      </div>

      <div className="flex items-center justify-between gap-2 pt-2 border-t border-slate-800">
        <button
          onClick={() => onOpenLegal('privacy')}
          className="text-[11px] text-dental-300 underline hover:text-dental-200 transition-colors cursor-pointer"
        >
          Política de Cookies
        </button>

        <div className="flex items-center gap-2">
          <button
            onClick={handleReject}
            className="px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors cursor-pointer"
          >
            Rechazar
          </button>
          <button
            onClick={handleAccept}
            className="px-4 py-1.5 rounded-lg text-xs font-bold text-slate-950 bg-gradient-to-r from-dental-400 to-teal-300 hover:from-dental-300 hover:to-white transition-colors cursor-pointer shadow-md"
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </aside>
  );
}
