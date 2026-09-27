import type { Metadata, Viewport } from 'next';
import './globals.css';
import SEOHead from '../components/SEOHead';

export const metadata: Metadata = {
  title: 'Implantes Dentales de Alta Gama en 24h | Clínica Especializada',
  description: 'Recupera tu sonrisa y función masticatoria en un solo día con implantes de precisión. TAC 3D bonificado, sedación consciente monitorizada y financiación hasta 60 meses.',
  keywords: [
    'implantes dentales en 24 horas',
    'carga inmediata implantes',
    'implantes arcada completa all on 4',
    'sedacion consciente dentista',
    'cirugia guiada 3D implantes',
    'precio implante dental fijo',
  ],
  authors: [{ name: 'Clínica Dental Especializada', url: 'https://serviciodemarketingdigital.com' }],
  metadataBase: new URL('https://landing-10-dental.vercel.app'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Recupera tu Sonrisa en un Solo Día con Implantes de Precisión',
    description: 'Diagnóstico TAC 3D bonificado, presupuesto cerrado sin letra pequeña y planes de financiación hasta 60 meses.',
    url: 'https://landing-10-dental.vercel.app',
    siteName: 'Clínica Dental Especializada',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/LOGO.png',
        width: 1200,
        height: 630,
        alt: 'Clínica Dental Especializada en Implantes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Implantes Dentales de Alta Gama en un Solo Día',
    description: 'Dientes fijos en 24 horas con sedación consciente y garantía de osteointegración de por vida.',
    images: ['/LOGO.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: '#040b18',
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark scroll-smooth">
      <head>
        <SEOHead />
      </head>
      <body className="bg-clinic-950 text-slate-100 min-h-screen selection:bg-teal-500 selection:text-slate-950 font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
