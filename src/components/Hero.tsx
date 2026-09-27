'use client';

import React from 'react';
import { ShieldCheck, ArrowRight, Zap, CheckCircle2, Clock, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenModal: () => void;
}

export default function Hero({ onOpenModal }: HeroProps) {
  return (
    <section className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[750px] h-[450px] bg-dental-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-teal-500/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Superior Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-dental-950 text-dental-300 border border-dental-700/60 mb-6 shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-dental-400" />
          <span>Cirugía Guiada 3D · Especialistas Acreditados European Board</span>
        </div>

        {/* H1 Headline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.14] mb-6 max-w-4xl mx-auto">
          Recupera tu sonrisa y función masticatoria en un solo día con{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-300 via-teal-300 to-cyan-200">
            implantes de precisión
          </span>
        </h1>

        {/* Value Proposition */}
        <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Diagnóstico TAC 3D bonificado, presupuesto cerrado sin letra pequeña y planes de financiación personalizada hasta 60 meses. Odontología quirúrgica mínimamente invasiva con sedación consciente monitorizada.
        </p>

        {/* Primary CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <button
            onClick={onOpenModal}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-xl font-extrabold text-base text-slate-950 bg-gradient-to-r from-dental-400 via-teal-300 to-cyan-200 hover:from-dental-300 hover:to-white shadow-xl shadow-dental-500/25 hover:shadow-dental-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Solicitar Diagnóstico y Estudio 3D</span>
            <ArrowRight className="w-5 h-5 text-slate-950" />
          </button>
        </div>

        {/* Clinical Trust Points */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/80 text-left">
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-sm font-bold text-white flex items-center gap-1.5 mb-1">
              <CheckCircle2 className="w-4 h-4 text-dental-400" />
              <span>TAC 3D Bonificado</span>
            </div>
            <div className="text-xs text-slate-400">Estudio óseo volumétrico completo</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-sm font-bold text-white flex items-center gap-1.5 mb-1">
              <CheckCircle2 className="w-4 h-4 text-dental-400" />
              <span>Carga Inmediata 24h</span>
            </div>
            <div className="text-xs text-slate-400">Dientes fijos en una sola sesión</div>
          </div>
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80">
            <div className="text-sm font-bold text-white flex items-center gap-1.5 mb-1">
              <CheckCircle2 className="w-4 h-4 text-dental-400" />
              <span>Presupuesto Cerrado</span>
            </div>
            <div className="text-xs text-slate-400">Financiación a medida hasta 60 meses</div>
          </div>
        </div>
      </div>
    </section>
  );
}
