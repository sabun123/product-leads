import './globals.css'
import '@fontsource-variable/inter'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Muslim Digital Clock - Prayer Times Reimagined',
  description: 'The ultimate digital prayer clock for the Muslim community. Join the waitlist for early access.',
  keywords: ['prayer clock', 'muslim clock', 'digital prayer times', 'islamic clock', 'smart prayer clock'],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <body className="min-h-screen bg-background font-default">
        {children}
      </body>
    </html>
  )
}