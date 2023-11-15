"use client"
import Image from "next/image"
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
        <label htmlFor="email" className="label">
          Email
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Entrez votre email"
          required
        />
      </div>
      <div className="inputbox">
        <Image
          src="/password.png"
          alt="password"
          width={32}
          height={32}
          className="img"
        />

        <label htmlFor="password">Mot de passe</label>
        <input type="password" name="password" id="password" />
      </div>
      <button type="submit" className="btnSubmit" aria-disabled={pending}>
        Connexion
      </button>
      <div className="register">
        <p>
          Vous n&apos;etes pas membre? <a href="/register"> S&apos;inscrire</a>
        </p>
      </div>
    </form>
  )
}
