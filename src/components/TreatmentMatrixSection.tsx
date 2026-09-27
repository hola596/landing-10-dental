'use client';

import React from 'react';
import { Check, ShieldCheck, HeartPulse, Award, ArrowRight } from 'lucide-react';

interface MatrixProps {
  onOpenModal: () => void;
}

export default function TreatmentMatrixSection({ onOpenModal }: MatrixProps) {
  const treatments = [
    {
      title: 'Implante Unitario / Puente Fijo',
      tag: 'Piezas Aisladas',
      price: 'Desde 690€ / implante',
      desc: 'Sustitución de dientes individuales o tramos sin tocar los dientes sanos adyacentes. Corona de zirconio monolítico de alta estética.',
      features: [
        'Titanio grado 4 biocompatible',
        'Cirugía mínimamente invasiva',
        'Carga estética inmediata disponible',
        'Garantía de osteointegración de por vida',
      ],
    },
    {
      title: 'Sobredentadura sobre Implantes',
      tag: 'Semifija Estabilizada',
      price: 'Desde 5.290€ ref.',
      desc: 'Especialmente diseñada para pacientes con dentadura postiza que buscan firmeza y seguridad al masticar sin pegamentos ni movimientos.',
      features: [
        'Fijación sobre 2 a 4 implantes de precisión',
        'Sistema de anclaje Locator de alta retención',
        'Fácil higiene y extracción para limpieza',
        'Estudio de adaptación ósea incluido',
      ],
    },
    {
      title: 'Prótesis Fija Arcada Completa 24h',
      tag: 'Tratamiento Estrella All-on-4/6',
      price: 'Desde 8.230€ ref.',
      desc: 'Rehabilitación total de una arcada en un solo día con sedación consciente. Dientes fijos definitivos sin paladar ni movilidad.',
      features: [
        'Dientes fijos colocados en 24 horas',
        'Sedación consciente monitorizada por anestesista',
        'Estructura interna reforzada de alta resistencia',
        'Incluye TAC 3D, cirugía guiada y revisiones anuales',
      ],
      highlight: true,
    },
  ];

  const differentials = [
    {
      icon: Award,
      title: 'Implantólogos European Board',
      desc: 'Equipo médico quirúrgico con dedicación exclusiva y membresía en sociedades científicas internacionales (SEPA, SECIB, EAO).',
    },
    {
      icon: HeartPulse,
      title: 'Sedación Consciente Monitorizada',
      desc: 'Presencia continua de médico especialista en anestesiología para garantizar una experiencia totalmente libre de dolor, estrés o ansiedad.',
    },
    {
      icon: ShieldCheck,
      title: 'Titanio y Zirconio Certificado',
      desc: 'Materiales 100% biocompatibles con pasaporte de implante y trazabilidad oficial de los mejores fabricantes suizos y alemanes.',
    },
  ];

  return (
    <section className="py-20 bg-slate-900/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold tracking-widest text-dental-400 uppercase">
            Transparencia Clínica
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-2 tracking-tight">
            Matriz de Claridad de Tratamiento y Presupuesto
          </h2>
          <p className="text-slate-400 mt-3 text-base sm:text-lg">
            Diagnóstico preliminar y estudio personalizado con presupuesto cerrado por escrito desde la primera visita.
          </p>
        </div>

        {/* Treatment Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {treatments.map((item, idx) => (
            <div
              key={idx}
              className={`rounded-2xl p-7 flex flex-col justify-between transition-all ${
                item.highlight
                  ? 'bg-gradient-to-b from-slate-900 to-dental-950/70 border-2 border-dental-400 shadow-xl shadow-dental-500/10'
                  : 'bg-slate-950/80 border border-slate-800'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold px-3 py-1 rounded-full bg-dental-950 text-dental-300 border border-dental-700/60">
                    {item.tag}
                  </span>
                  {item.highlight && (
                    <span className="text-[11px] font-bold text-teal-300 uppercase tracking-wider">
                      Más demandado
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <div className="text-2xl font-extrabold text-dental-300 mb-3 font-mono">
                  {item.price}
                </div>
                <p className="text-xs sm:text-sm text-slate-300 mb-6 leading-relaxed">
                  {item.desc}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {item.features.map((feat, fIdx) => (
                    <li key={fIdx} className="flex items-center gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-dental-400 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                onClick={onOpenModal}
                className={`w-full py-3.5 px-4 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  item.highlight
                    ? 'text-slate-950 bg-gradient-to-r from-dental-400 to-teal-300 hover:from-dental-300 hover:to-white shadow-lg'
                    : 'text-white bg-slate-800 hover:bg-dental-600 border border-slate-700'
                }`}
              >
                <span>Solicitar valoración para este caso</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Differentials & Authority */}
        <div className="pt-12 border-t border-slate-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-bold tracking-widest text-dental-400 uppercase">
              Autoridad y Excelencia Médica
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white mt-2">
              Diferenciales Clínicos que Garantizan tu Éxito
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {differentials.map((diff, dIdx) => {
              const Icon = diff.icon;
              return (
                <div
                  key={dIdx}
                  className="p-6 rounded-2xl bg-slate-950/70 border border-slate-800 text-left"
                >
                  <div className="p-3 w-fit rounded-xl bg-dental-500/10 text-dental-400 mb-4">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white mb-2">{diff.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{diff.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
