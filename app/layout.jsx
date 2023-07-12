// import { read } from 'fs';
import '../styles/globals.css'
// import { readex_pro, yanone_kaffeesatz } from './fonts';
// import { Readex_Pro, Yanone_Kaffeesatz} from 'next/font/google'
import { Montserrat, Open_Sans} from 'next/font/google'

export const metadata = {
  title: "Lizzy Pine | Software Developer",
  description: "Lizzy Pine Portfolio Site",
  icons: {
    icon: '/icon.ico',
    apple: '/apple-touch-icon.png',
  },
};

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: '200'
})

const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${open_sans.variable}`}>
      <body>
        {children}
      </body>
    </html>
  )
}
