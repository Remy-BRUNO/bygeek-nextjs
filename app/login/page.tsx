import LoginForm from "../ui/login-form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Login",
}
export default function Page() {
  return (
    <main className="main">
      <div className="box">
        <LoginForm />
      </div>
    </main>
  )
}
