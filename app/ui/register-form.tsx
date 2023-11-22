"use client"
import Image from "next/image"
import Link from "next/link"
import { useFormStatus } from "react-dom"

export default function RegisterForm() {
  const { pending } = useFormStatus()

  return (
    <form className="form-box">
      <h2>Inscription</h2>
      <div className="inputbox">
        <Image
          src="/username.png"
          alt="username"
          width={32}
          height={32}
          className="img"
        />

        <input type="text" name="name" id="name" required />
        <label htmlFor="name">Nom</label>
      </div>
      <div className="inputbox">
        <Image
          src="/email.png"
          alt="email"
          width={32}
          height={32}
          className="img"
        />

        <input type="email" name="email" id="email" required />
        <label htmlFor="email">Email</label>
      </div>
      <div className="inputbox">
        <Image
          src="/password.png"
          alt="password"
          width={32}
          height={32}
          className="img"
        />

        <input type="password" name="password" id="password" required />
        <label htmlFor="password">Mot de passe</label>
      </div>
      <button type="submit" className="btnSubmit" aria-disabled={pending}>
        S&apos;inscrire
      </button>
      <div className="register">
        <p>
          Vous etes déjà membre? <Link href="/login"> Se connecter</Link>
        </p>
      </div>
    </form>
  )
}
