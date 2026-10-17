import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Archivo } from 'next/font/google'
import './globals.css'

const archivo = Archivo({ subsets: ['latin'], variable: '--font-archivo' })

export const metadata: Metadata = {
  title: 'Cyfek Technologies | Software Products & Development Services',
  description:
    'Cyfek Technologies Limited builds software products like Seltra, Applylot and Bikespot, and develops websites and mobile apps for clients.',
  generator: 'v0.app',
  icons: { icon: '/images/cyfek-logo.png', apple: '/images/cyfek-logo.png' },
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en-ZA" className={archivo.variable}>
      <body className="bg-background font-sans text-foreground antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
