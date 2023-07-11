import '../styles/globals.css'

export const metadata = {
  title: "Lizzy Pine | Software Developer",
  description: "Lizzy Pine Portfolio Site",
  icons: {
    icon: '/icon.ico',
    apple: '/apple-touch-icon.png',
  },
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
