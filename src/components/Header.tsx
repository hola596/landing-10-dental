'use client';

import React from 'react';
import { Award, Mail, ArrowUpRight, Sparkles } from 'lucide-react';

interface HeaderProps {
  onOpenModal: () => void;
}

export default function Header({ onOpenModal }: HeaderProps) {
  return (
    <header className="sticky top-0 z-40 w-full bg-clinic-950/85 backdrop-blur-md border-b border-dental-800/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo strictly pointing to /LOGO.png with fetchpriority="high" */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center gap-2 group">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/LOGO.png"
              alt="Clínica Dental Especializada en Implantes"
              className="h-10 md:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              loading="eager"
              decoding="async"
              // @ts-ignore
              fetchpriority="high"
            />
          </a>
          <span className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-dental-950/80 text-dental-300 border border-dental-700/50">
            <Award className="w-3.5 h-3.5 text-dental-400" /> Especialistas Acreditados European Board
          </span>
        </div>

        {/* Right side contact & CTA */}
        <div className="flex items-center gap-4 sm:gap-6">
          <a
            href="mailto:hola@serviciodemarketingdigital.com"
            className="hidden md:flex items-center gap-1.5 text-xs font-mono font-medium text-dental-300 hover:text-white transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>hola@serviciodemarketingdigital.com</span>
          </a>

          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm text-slate-950 bg-gradient-to-r from-dental-400 via-teal-300 to-cyan-200 hover:from-dental-300 hover:to-white shadow-lg shadow-dental-500/20 hover:shadow-dental-400/40 transition-all transform hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            <span>Solicitar Diagnóstico</span>
            <ArrowUpRight className="w-4 h-4 text-slate-950" />
          </button>
        </div>
      </div>
    </header>
  );
}
