"use client"
import Image from "next/image"
import Link from "next/link"
import { useFormStatus } from "react-dom"

export default function LoginForm() {
  const { pending } = useFormStatus()

  return (
    <form className="form-box">
      <h2>Login</h2>
      <div className="inputbox">
        <Image
          src="/email.png"
          alt="email"
          width={32}
          height={32}
          className="img"
        />

        <input type="email" name="email" id="email" required />
        <label htmlFor="email" className="label">
          Email
        </label>
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
        Connexion
      </button>
      <div className="register">
        <p>
          Vous n&apos;etes pas membre?{" "}
          <Link href="/register"> S&apos;inscrire</Link>
        </p>
      </div>
    </form>
  )
}
