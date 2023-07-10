import '../styles/globals.css'

export const metadata = {
  title: "Lizzy Pine | Software Developer",
  description: "Lizzy Pine Portfolio Site",
};

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
