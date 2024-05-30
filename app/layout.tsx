import { Nunito } from 'next/font/google'

import Navbar from '@/app/components/navbar/Navbar'
import Footer from '@/app/components/Footer'
import LoginModal from '@/app/components/modals/LoginModal'
import RegisterModal from '@/app/components/modals/RegisterModal'
import SearchModal from '@/app/components/modals/SearchModal'
import RentModal from '@/app/components/modals/RentModal'
import ToasterProvider from '@/app/providers/ToasterProvider'
import ClientOnly from './components/ClientOnly'
import getCurrentUser from './actions/getCurrentUser'
import { ThemeProvider } from './providers/ThemeProvider'
import './globals.css'
import { cn } from '@/lib/utils'

export const metadata = {
  title: 'StayMakan',
  description:
    'StayMakan is a platform that allows users to find and book homestays, holidays all over the places.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://staymakan.mohammedhaydar.com',
    images: [
      {
        url: 'https://staymakan.mohammedhaydar.com/images/logo.png',
        width: 980,
        height: 254,
        alt: 'StayMakan | Find and book homestays, holidays all over the places.'
      }
    ]
  }
}

const font = Nunito({
  subsets: ['latin']
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser()

  return (
    <html lang='en'>
      <head>
        <link rel='icon' href='/images/logo-sm.svg' type='image/svg+xml' />
        <meta name='theme-color' content='#ca8a03' />
      </head>

      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased bg-gray-100 dark:bg-gray-900 overflow-x-clip',
          font.className
        )}
      >
        <ClientOnly>
          <ThemeProvider attribute='class' defaultTheme='system' enableSystem>
            <ToasterProvider />
            <LoginModal />
            <RegisterModal />
            <SearchModal />
            <RentModal />
            <Navbar currentUser={currentUser} />
            {children}
            <Footer />
          </ThemeProvider>
        </ClientOnly>
      </body>
    </html>
  )
}
