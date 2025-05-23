// app/fonts.js
import { Inter, Space_Grotesk } from 'next/font/google'

// Modern alternative to Neue Haas Grotesk
export const neueHaas = Inter({
  subsets: ['latin'],
  variable: '--font-neue-haas',
  display: 'swap',
})

// Elegant monospace alternative to GT America
export const gtAmerica = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-gt-america',
  display: 'swap',
})