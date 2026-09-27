'use client';

import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, Zap, ArrowRight, ArrowLeft, CheckCircle2, User, MapPin } from 'lucide-react';

interface QualificationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function QualificationModal({ isOpen, onClose }: QualificationModalProps) {
  const [step, setStep] = useState(1);
  const [situacion, setSituacion] = useState('');
  const [urgencia, setUrgencia] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [nombre, setNombre] = useState('');
  const [zona, setZona] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
      setStep(1);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const paso1Options = [
    'Pérdida de 1 o varias piezas aisladas.',
    'Ausencia total de dientes en una o ambas arcadas.',
    'Uso actual de dentadura postiza removible y deseo dientes fijos.',
    'Busco una segunda opinión experta sobre un presupuesto previo.',
  ];

  const paso2Options = [
    'Inmediata (tengo molestias o dolor actual).',
    'Próximos 15 a 30 días.',
    'Evaluando opciones para el mediano plazo.',
  ];

  const paso3Options = [
    'Pago al contado / tarjeta.',
    'Financiación personalizada en cuotas mensuales (hasta 60 meses).',
  ];

  const handleNext = () => {
    setError('');
    if (step === 1 && !situacion) {
      setError('Por favor, selecciona tu situación dental actual.');
      return;
    }
    if (step === 2 && !urgencia) {
      setError('Por favor, selecciona el plazo en el que deseas iniciar.');
      return;
    }
    if (step === 3 && !modalidad) {
      setError('Por favor, selecciona la modalidad de pago deseada.');
      return;
    }
    setStep((prev) => Math.min(prev + 1, 4));
  };

  const handleBack = () => {
    setError('');
    setStep((prev) => Math.max(prev - 1, 1));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre.trim() || !zona.trim()) {
      setError('Por favor, indica tu nombre y ciudad de residencia.');
      return;
    }

    // Number strictly obfuscated in client memory - NEVER in static HTML
    const p1 = '54911';
    const p2 = '2788';
    const p3 = '7093';
    const targetPhone = `${p1}${p2}${p3}`;

    // Exact required message template
    const textMessage = `¡Hola! Completé la evaluación en la web para el tratamiento de implantes dentales:

• Nombre: ${nombre.trim()}
• Zona: ${zona.trim()}
• Situación: ${situacion}
• Plazo: ${urgencia}
• Modalidad de pago: ${modalidad}

Deseo consultar fechas disponibles para una primera valoración clínica.`;

    const encoded = encodeURIComponent(textMessage);
    const targetUrl = `https://api.whatsapp.com/send?phone=${targetPhone}&text=${encoded}`;

    onClose();
    window.open(targetUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-slate-900 border border-dental-500/40 rounded-2xl shadow-2xl p-6 sm:p-8 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header & Step progress */}
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-dental-950 text-dental-300 border border-dental-700/50 mb-2">
              <Zap className="w-3.5 h-3.5 text-dental-400" />
              <span>Evaluación Clínica Previa · Paso {step} de 4</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
              {step === 1 && '1. Diagnóstico Clínico Inicial'}
              {step === 2 && '2. Urgencia de Inicio'}
              {step === 3 && '3. Modalidad de Inversión'}
              {step === 4 && '4. Datos de Contacto del Titular'}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Cerrar modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Bar */}
        <div className="w-full bg-slate-800 h-1.5 rounded-full mb-6 overflow-hidden">
          <div
            className="bg-gradient-to-r from-dental-400 to-teal-300 h-full transition-all duration-300"
            style={{ width: `${(step / 4) * 100}%` }}
          />
        </div>

        {/* Multi-step Quiz Content */}
        {step === 1 && (
          <div className="space-y-3">
            <p className="text-xs text-slate-400">¿Cuál describe mejor tu situación bucodental actual?</p>
            {paso1Options.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSituacion(opt)}
                className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm font-medium border transition-all cursor-pointer flex items-center justify-between ${
                  situacion === opt
                    ? 'bg-dental-950/80 border-dental-400 text-white shadow-md'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span>{opt}</span>
                {situacion === opt && <CheckCircle2 className="w-4 h-4 text-dental-400 flex-shrink-0 ml-2" />}
              </button>
            ))}
          </div>
        )}

        {step === 2 && (
          <div className="space-y-3">
            <p className="text-xs text-slate-400">¿Con qué rapidez necesitas realizar el tratamiento?</p>
            {paso2Options.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setUrgencia(opt)}
                className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm font-medium border transition-all cursor-pointer flex items-center justify-between ${
                  urgencia === opt
                    ? 'bg-dental-950/80 border-dental-400 text-white shadow-md'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span>{opt}</span>
                {urgencia === opt && <CheckCircle2 className="w-4 h-4 text-dental-400 flex-shrink-0 ml-2" />}
              </button>
            ))}
          </div>
        )}

        {step === 3 && (
          <div className="space-y-3">
            <p className="text-xs text-slate-400">¿Qué forma de abono prefieres para tu plan de tratamiento?</p>
            {paso3Options.map((opt, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setModalidad(opt)}
                className={`w-full p-4 rounded-xl text-left text-xs sm:text-sm font-medium border transition-all cursor-pointer flex items-center justify-between ${
                  modalidad === opt
                    ? 'bg-dental-950/80 border-dental-400 text-white shadow-md'
                    : 'bg-slate-950/60 border-slate-800 text-slate-300 hover:border-slate-700'
                }`}
              >
                <span>{opt}</span>
                {modalidad === opt && <CheckCircle2 className="w-4 h-4 text-dental-400 flex-shrink-0 ml-2" />}
              </button>
            ))}
          </div>
        )}

        {step === 4 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <p className="text-xs text-slate-400">Indica a nombre de quién reservamos el estudio TAC 3D bonificado:</p>
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-1">
                <User className="w-3.5 h-3.5 text-dental-400" />
                <span>Nombre y Apellido: *</span>
              </label>
              <input
                type="text"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                placeholder="Ej: Laura Martínez"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-dental-400 transition-all"
                required
              />
            </div>
            <div>
              <label className="flex items-center gap-1.5 text-xs font-semibold text-slate-300 mb-1">
                <MapPin className="w-3.5 h-3.5 text-dental-400" />
                <span>Ciudad / Zona de residencia: *</span>
              </label>
              <input
                type="text"
                value={zona}
                onChange={(e) => setZona(e.target.value)}
                placeholder="Ej: Madrid Centro"
                className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-700 text-white text-sm focus:outline-none focus:border-dental-400 transition-all"
                required
              />
            </div>
          </form>
        )}

        {error && (
          <div className="mt-4 p-3 rounded-xl bg-rose-500/10 border border-rose-500/40 text-rose-300 text-xs">
            {error}
          </div>
        )}

        {/* Footer Navigation Buttons */}
        <div className="flex items-center justify-between gap-3 mt-6 pt-4 border-t border-slate-800">
          {step > 1 ? (
            <button
              type="button"
              onClick={handleBack}
              className="px-4 py-2.5 rounded-xl text-xs font-semibold text-slate-400 hover:text-white hover:bg-slate-800 flex items-center gap-1.5 transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Atrás</span>
            </button>
          ) : (
            <div />
          )}

          {step < 4 ? (
            <button
              type="button"
              onClick={handleNext}
              className="px-6 py-2.5 rounded-xl text-xs font-bold text-slate-950 bg-gradient-to-r from-dental-400 to-teal-300 hover:from-dental-300 hover:to-white flex items-center gap-2 transition-all cursor-pointer shadow-md"
            >
              <span>Continuar</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              className="px-6 py-3 rounded-xl text-xs sm:text-sm font-bold text-slate-950 bg-gradient-to-r from-dental-400 to-teal-300 hover:from-dental-300 hover:to-white flex items-center gap-2 transition-all cursor-pointer shadow-lg shadow-dental-500/25"
            >
              <span>Completar y Conectar con Coordinador</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
