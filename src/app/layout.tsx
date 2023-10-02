
import DynamicStyle from '@/components/dynamicStyles'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReduxProvider } from '@/redux/reduxProvider'
import { Logo } from '@/assets/logo'

const inter = Inter({ subsets: ['latin'] })


export const metadata: Metadata = {
  title: 'Marketplace',
  icons: 'https://cdn.icon-icons.com/icons2/943/PNG/512/shoppaymentorderbuy-20_icon-icons.com_73877.png',
  description: 'This is my pet project😎',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <DynamicStyle />
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  )
}
