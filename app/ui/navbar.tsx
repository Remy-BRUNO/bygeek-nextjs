import Image from "next/image"
import Link from "next/link"
Image
export default function Navbar() {
  return (
    <nav>
      <Link href="/">
        <Image src="/logo.svg" width={100} height={100} alt="Logo" priority />
      </Link>
      <Link href="/">
        <h1>ByGeek</h1>
      </Link>

      <Link href="/login">login</Link>
    </nav>
  )
}
