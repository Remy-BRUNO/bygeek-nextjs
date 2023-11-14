"use client"

import { ThemeProvider } from "next-themes"
import Navbar from "./nav/navbar"

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
    </ThemeProvider>
  )
}
