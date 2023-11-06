import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const universe = localFont({ src: '../assets/font/univers.otf' })

export const metadata: Metadata = {
  title: 'Portal Chamber Display Calendar',
  description: 'Calendar displayed as a portal chamber level display',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={universe.className}>
        {children}
      </body>
    </html>
  )
}
