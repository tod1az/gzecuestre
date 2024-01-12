import type { Metadata } from 'next'
import './globals.css'
import localFont from 'next/font/local'
import { Footer } from '@/components/footer/Footer'

const CastoroRegular = localFont({
  src: '../fonts/Castoro-Regular.ttf',
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'GZ ECUESTRE |  El mejor lugar para la compra y venta de caballos',
  description: 'Compra y venta de caballos',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='!scroll-smooth'>
      <body className={`${CastoroRegular.className}`}>
        {children}
        <Footer />
      </body>
    </html>
  )
}
