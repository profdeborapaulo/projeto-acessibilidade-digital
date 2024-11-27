"use client"

import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Script from 'next/script';
import VLibras from "vlibras-nextjs";


const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = {
//   title: "Inclusive Journey",
//   description: "Inclusive Journey",
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" style={{ height: '100%', width: '100%', overflow: 'hidden' }}>
      <head>
        <Script
          src="https://cdn.userway.org/widget.js"
          data-account="3pxn3QVuJj"
          strategy="afterInteractive" // Carrega o script após a interação inicial do usuário
        />
      </head>
      <body className={inter.className}>
        <VLibras forceOnload/>
        {children}</body>
    </html>
  )
}
