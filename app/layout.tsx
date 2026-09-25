import type { Metadata, Viewport } from 'next'
import { Manrope, Caveat } from 'next/font/google'
import './globals.css'

const manrope = Manrope({ subsets: ['latin'], variable: '--font-manrope', display: 'swap' })
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat', display: 'swap' })

export const metadata: Metadata = {
  title: 'Shamuthrika S P — Portfolio',
  description: 'Full-stack engineer, creative problem solver, and Computer Science student in Chennai. Explore Shamuthrika’s work in thoughtful web experiences, AI, and automation.',
  openGraph: {
    title: 'Shamuthrika S P — Portfolio',
    description: 'Full-stack engineer, creative problem solver, and Computer Science student in Chennai. Explore Shamuthrika’s work in thoughtful web experiences, AI, and automation.',
    type: 'website',
    images: [{ url: '/images/shamuthrika-professional.jpg', width: 1312, height: 1640, alt: 'Shamuthrika portrait' }],
  },
  icons: {
    icon: { url: '/icon.svg', type: 'image/svg+xml' },
    apple: '/images/shamuthrika-professional.jpg',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f7f5ee',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="light">
      <body className={`${manrope.variable} ${caveat.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}
