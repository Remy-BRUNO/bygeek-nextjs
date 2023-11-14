"use client"

import { ThemeProvider } from "next-themes"
import Navbar from "./nav/navbar"

export function Providers({ children }) {
  return (
    <ThemeProvider>
      <Navbar />
      {children}
    </ThemeProvider>
  )
}
