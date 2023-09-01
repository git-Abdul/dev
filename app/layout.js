import './globals.css'
import './fonts.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Abdul • Dev',
  description: 'Dev portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="favicon.png" sizes="any" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
