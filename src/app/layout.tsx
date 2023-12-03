import { Toaster } from 'react-hot-toast'
import { Inter } from 'next/font/google'
import type { Metadata } from 'next/types'

import './globals.css'

interface Props {
  children: React.ReactNode
}

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  variable: '--font-inter',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Imgur Uploader'
}

const AppLayout = (props: Props) => {
  const { children } = props

  return (
    <html className={inter.className} lang="pt-BR">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}

export default AppLayout
