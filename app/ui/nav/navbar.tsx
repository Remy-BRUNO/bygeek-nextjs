import style from "./nav.module.css"
import NavLinks from "./nav-links"
import ThemeChanger from "../buttonTheme"

export default function Navbar() {
  return (
    <nav className={style.nav}>
      <NavLinks />
      <ThemeChanger />
    </nav>
  )
}
