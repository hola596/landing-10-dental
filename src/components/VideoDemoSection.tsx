'use client';

import React from 'react';
import { Play, ShieldCheck, Award } from 'lucide-react';

export default function VideoDemoSection() {
  return (
    <section className="py-16 bg-slate-900/40 border-y border-slate-800 relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-dental-950 text-dental-300 border border-dental-800 mb-2">
            <Award className="w-3.5 h-3.5 text-dental-400" />
            <span>Conoce Nuestro Enfoque / Demostración</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mt-1">
            Precisión Quirúrgica y Casos de Éxito en Carga Inmediata
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm mt-2 max-w-2xl mx-auto">
            Planificación virtual milimétrica por ordenador 3D para una intervención segura, predecible y sin postoperatorios molestos.
          </p>
        </div>

        {/* Video Container as specified in prompt */}
        <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-2xl pb-[56.25%] h-0 border border-dental-500/30 bg-slate-950">
          <iframe
            className="absolute top-0 left-0 w-full h-full border-0"
            src="https://www.youtube.com/embed/M5_QicGRh-s?si=_0gkgpp51W2mA-NQ"
            title="Demostración y Casos de Implantes Dentales"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
