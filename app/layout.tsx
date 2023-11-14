import type { Metadata } from "next"

import "./ui/globals.css"
import Navbar from "./ui/navbar"
import { josefin } from "./ui/font"

export const metadata: Metadata = {
  title: {
    template: "%s | ByGeek",
    default: "ByGeek",
  },
  description: "Le blog des personnage culte de l'univer Geek",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={josefin.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
