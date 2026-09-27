'use client';

import React from 'react';
import { Mail, ShieldCheck, HeartPulse, Award } from 'lucide-react';

interface FooterProps {
  onOpenLegal: (tab: 'privacy' | 'terms' | 'legal') => void;
}

export default function Footer({ onOpenLegal }: FooterProps) {
  return (
    <footer className="bg-clinic-950 border-t border-slate-800 text-slate-400 text-xs py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-10 items-start">
          {/* Brand Info */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/LOGO.png"
                alt="Clínica Dental Especializada en Implantes"
                className="h-10 w-auto object-contain"
              />
              <span className="text-white font-bold text-sm tracking-wide">
                Clínica Especializada en Implantes Dentales
              </span>
            </div>
            <p className="text-slate-400 text-xs leading-relaxed max-w-md">
              Centro de referencia en implantología avanzada, cirugía guiada 3D y rehabilitación de arcada completa con carga inmediata en 24 horas y sedación consciente monitorizada.
            </p>
          </div>

          {/* Contact and Legal Links */}
          <div className="md:col-span-6 flex flex-col md:items-end justify-between space-y-4">
            <div className="text-left md:text-right">
              <span className="text-xs font-semibold text-slate-200 block mb-1">Atención Médica y Coordinación:</span>
              <a
                href="mailto:hola@serviciodemarketingdigital.com"
                className="inline-flex items-center gap-2 text-dental-300 hover:text-white text-sm font-mono font-medium transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>hola@serviciodemarketingdigital.com</span>
              </a>
            </div>

            <div className="flex flex-wrap gap-4 text-xs">
              <button
                onClick={() => onOpenLegal('privacy')}
                className="text-slate-400 hover:text-white transition-colors underline cursor-pointer"
              >
                Política de Privacidad
              </button>
              <button
                onClick={() => onOpenLegal('terms')}
                className="text-slate-400 hover:text-white transition-colors underline cursor-pointer"
              >
                Términos del Servicio
              </button>
              <button
                onClick={() => onOpenLegal('legal')}
                className="text-slate-400 hover:text-white transition-colors underline cursor-pointer"
              >
                Aviso Legal
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Line */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
          <p>© {new Date().getFullYear()} Clínica Dental Especializada. Todos los derechos reservados.</p>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-3.5 h-3.5 text-dental-400" />
            <span>Registro Sanitario Oficial • Protocolo Quirúrgico Libre de Dolor • RGPD Sanitario</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
