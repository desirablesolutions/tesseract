import "./globals.css"

import { Space_Mono } from "next/font/google"
import Footer from "@includes/Footer"
import NavBar from "@includes/NavBar"


const ApplicationFontFamily = Space_Mono({ subsets: ["latin"], weight: "400" })

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
      <body className={ApplicationFontFamily.className}>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
