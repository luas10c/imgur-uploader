import type { Metadata } from 'next/types'

import './globals.css'

interface Props {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Imgur Uploader'
}

const AppLayout = (props: Props) => {
  const { children } = props

  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}

export default AppLayout
