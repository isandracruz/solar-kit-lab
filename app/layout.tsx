import type { Metadata, Viewport } from 'next'
import { DM_Sans, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const _dmSans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Solar Kit Lab - Calculadora de Equipos Solares',
  description: 'Descubre exactamente que equipos solares necesitas para tu hogar o negocio. Calcula inversores, baterias y paneles en tiempo real.',
  icons: {
    icon: '/favicon.svg',
  },
}

export const viewport: Viewport = {
  themeColor: '#295740',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
