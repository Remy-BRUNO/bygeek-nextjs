"use client"
import { useTheme } from "next-themes"
import styled from "styled-components"
import Image from "next/image"

const Button = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
`

export default function ThemeChanger() {
  const { theme, setTheme } = useTheme()
  const handlechang = () => {
    theme === "dark" ? setTheme("light") : setTheme("dark")
  }
  return (
    <Button onClick={handlechang}>
      <Image src="/sunmoon.png" alt="Dark Mode Toggle" width={50} height={50} />
    </Button>
  )
}
