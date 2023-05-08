import './globals.css'
import { Inter } from 'next/font/google'
import Header from './components/header'
import Footer from './components/footer'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NEVERLAND',
  description: 'a simple application to record and manage tasks',
  keywords: 'web development, account book, to-do-list',
  lang: 'ko',
  ogTitle: '나만의 집사 - NEVERLAND',
  ogImage: '',
  ogUrl: '',
  ogSiteName: 'NEVERLAND'
  
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>
      <Header />
      <main>{children}</main>
      <Footer />
      </body>
    </html>
  )
}
