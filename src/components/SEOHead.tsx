import React from 'react';
import { faqs } from '../data/faqs';

export default function SEOHead() {
  const jsonLdDentist = {
    '@context': 'https://schema.org',
    '@type': ['Dentist', 'MedicalBusiness'],
    name: 'Clínica Dental Especializada en Implantes Dentales de Alta Gama',
    description: 'Centro de implantología avanzada, cirugía guiada 3D y prótesis fija de arcada completa en 24 horas con sedación consciente monitorizada.',
    url: 'https://landing-10-dental.vercel.app',
    email: 'hola@serviciodemarketingdigital.com',
    priceRange: '€€€',
    areaServed: 'ES',
    medicalSpecialty: 'Dentistry',
    availableService: [
      {
        '@type': 'MedicalProcedure',
        name: 'Implantes Dentales con Carga Inmediata en 24h',
        description: 'Rehabilitación fija de arcada completa en un solo día mediante cirugía guiada por ordenador 3D.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Sedación Consciente Monitorizada en Odontología',
        description: 'Procedimiento anestésico supervisado para cirugías dentales sin dolor ni ansiedad.',
      },
      {
        '@type': 'MedicalProcedure',
        name: 'Sobredentadura sobre Implantes',
        description: 'Estabilización de dentadura con anclajes de precisión sobre implantes osteointegrados.',
      },
    ],
  };

  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: f.answer,
      },
    })),
  };

  const jsonLdVideo = {
    '@context': 'https://schema.org',
    '@type': 'VideoObject',
    name: 'Demostración y Casos de Implantes Dentales con Carga Inmediata',
    description: 'Técnica de cirugía guiada 3D y rehabilitación bucal completa en 24 horas.',
    thumbnailUrl: 'https://img.youtube.com/vi/M5_QicGRh-s/maxresdefault.jpg',
    uploadDate: '2026-09-01T08:00:00+02:00',
    embedUrl: 'https://www.youtube.com/embed/M5_QicGRh-s',
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdDentist) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdVideo) }}
      />
    </>
  );
}
