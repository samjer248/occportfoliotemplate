import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'
import { sitemetadata } from '@/lib/data'

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
    <html
      lang="en"
      className={cn('scroll-smooth', { dark: sitemetadata.dark === true })}
    >
      <body className={cn('pt-28 font-sans sm:pt-36', fontSans.variable)}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
