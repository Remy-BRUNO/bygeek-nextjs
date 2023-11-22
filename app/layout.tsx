import type { Metadata } from "next"

import "./ui/globals.css"
import Navbar from "./ui/nav/navbar"
import { josefin } from "./ui/font"
import StyledComponentsRegistry from "./lib/registry"
import { Providers } from "./ui/styles"

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
    <html lang="fr" suppressHydrationWarning>
      <body className={josefin.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
