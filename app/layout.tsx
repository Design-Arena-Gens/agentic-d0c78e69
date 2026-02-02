import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kenya Consolidation Company Guide - Mombasa',
  description: 'Complete guide to establishing a cargo consolidation company in Mombasa, Kenya - requirements, regulations, and procedures',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
