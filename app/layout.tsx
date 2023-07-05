import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: 'WGG Schülergenossenschaft',
  description: 'Die WGGenossenschaft eSG: Eine innovative Schülergenossenschaft, die Wirtschaft, Nachhaltigkeit und Demokratie durch praxisnahe Bildung vereint.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="de" className={inter.className}>
      <body>{children}</body>
    </html>
  )
}
