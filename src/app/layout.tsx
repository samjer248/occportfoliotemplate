import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import { sitemetadata } from '@/lib/data'
import ThemeContextProvider from '@/context/ThemeContext'
import ActiveSectionContextProvider from '@/context/ActiveSectionContextProvider'
import Footer from '@/components/Footer'
import ThemeSwitch from '@/components/ThemeSwitch'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: sitemetadata.title,
  description: sitemetadata.description,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={cn('scroll-smooth')}>
      <body className={cn('pt-28 font-sans sm:pt-36', fontSans.variable)}>
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            <main>{children}</main>
            <Footer />
            <ThemeSwitch />
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
      </body>
    </html>
  )
}
