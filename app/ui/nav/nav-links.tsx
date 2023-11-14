"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import styled from "styled-components"

const LinkStyled = styled(Link)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
`

export default function NavLinks() {
  const pathname = usePathname()
  return (
    <>
      <LinkStyled href="/">
        <Image src="/logo.svg" width={100} height={100} alt="Logo" priority />
      </LinkStyled>
      <LinkStyled href="/">home</LinkStyled>
      <LinkStyled href="/">Articles</LinkStyled>
      <LinkStyled href="/login">Login</LinkStyled>
    </>
  )
}
