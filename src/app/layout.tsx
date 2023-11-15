import './globals.css'
import type { Metadata } from 'next'
import * as C from '@/components'

import { Roboto_Flex as Roboto } from 'next/font/google'

const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })

export const metadata: Metadata = {
  title: 'Dona Águia Store',
  description: 'Moda Infantil. baby e kids.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable} font-roboto`}>
        <C.Header />
        {children}
        <C.Footer />
      </body>
    </html>
  )
}
