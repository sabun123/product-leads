import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muslim Digital Clock - Prayer Times Reimagined',
  description: 'The ultimate digital prayer clock for the Muslim community. Precise prayer times, beautiful design, and smart features combined.',
  keywords: ['prayer clock', 'muslim clock', 'digital prayer times', 'islamic clock', 'smart prayer clock'],
  openGraph: {
    title: 'Muslim Digital Clock - Prayer Times Reimagined',
    description: 'The ultimate digital prayer clock for the Muslim community. Join the waitlist for early access.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1584636778193-ab37de4a4c1f?w=1200&q=80',
        width: 1200,
        height: 630,
        alt: 'Muslim Digital Clock Preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muslim Digital Clock - Prayer Times Reimagined',
    description: 'The ultimate digital prayer clock for the Muslim community. Join the waitlist for early access.',
    images: ['https://images.unsplash.com/photo-1584636778193-ab37de4a4c1f?w=1200&q=80'],
  },
  viewport: 'width=device-width, initial-scale=1',
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}