"use client"
import style from "./nav.module.css"

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLinks() {
  const pathname = usePathname()

  return (
    <>
      <Link href="/">
        <Image src="/logo.svg" width={100} height={100} alt="Logo" priority />
      </Link>
      <Link className={clsx({ [style.active]: pathname === "/" })} href="/">
        Home
      </Link>

      <Link
        className={clsx({
          [style.active]: pathname === "/login" || "/register",
        })}
        href="/login"
      >
        Login
      </Link>
    </>
  )
}
