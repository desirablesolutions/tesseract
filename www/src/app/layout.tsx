import "./globals.css"

import { Inter } from "next/font/google"
import Footer from "@includes/Footer"
import NavBar from "@includes/NavBar"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tesseract UI",
  description: "a generous, hyperdimensional, ui library.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
