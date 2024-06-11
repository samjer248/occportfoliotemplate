import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import { cn } from '@/lib/utils'
import Header from '@/components/Header'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: 'Replace With Your Full Name',
  description: 'Replace with a description of you that is 145-160 characters.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={cn('pt-28 font-sans sm:pt-36', fontSans.variable)}>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
