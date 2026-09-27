export interface FAQItem {
  question: string;
  answer: string;
}

export const faqs: FAQItem[] = [
  {
    question: '¿Duele la intervención de colocación de implantes dentales?',
    answer:
      'No. Gracias a nuestros protocolos de anestesia local avanzada y sedación consciente monitorizada por médico anestesista, el paciente permanece en un estado de profunda relajación, sin dolor ni sensación de ansiedad durante todo el procedimiento.',
  },
  {
    question: '¿Puedo tener dientes fijos en un solo día (carga inmediata en 24h)?',
    answer:
      'Sí. Mediante cirugía guiada por ordenador 3D y técnicas de carga inmediata, en casos clínicos indicados colocamos los implantes y una prótesis fija provisional el mismo día, permitiéndote recuperar la estética y masticación sin esperas.',
  },
  {
    question: '¿Qué garantía ofrecen los materiales de los implantes?',
    answer:
      'Trabajamos exclusivamente con titanio de grado médico y zirconio biocompatible de fabricantes líderes europeos con pasaporte de trazabilidad biológica y garantía de osteointegración de por vida.',
  },
  {
    question: '¿Cómo funciona la financiación y el presupuesto cerrado?',
    answer:
      'Ofrecemos planes de financiación personalizada hasta en 60 meses (con opciones sin intereses según plazos). El presupuesto es cerrado desde el primer día, incluyendo cirugía, prótesis, revisiones y medicación sin costes ocultos.',
  },
  {
    question: '¿Qué incluye la primera valoración y el estudio radiológico?',
    answer:
      'Incluye exploración clínica por cirujano implantólogo acreditado, escáner TAC 3D de alta resolución bonificado, diagnóstico fotográfico digital y entrega del plan de tratamiento personalizado.',
  },
];
