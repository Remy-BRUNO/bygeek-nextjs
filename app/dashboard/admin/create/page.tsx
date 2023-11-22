import Form from "@/app/ui/dashboard/form"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "create",
}
export default async function Page() {
  return (
    <main className="main">
      <Form />
    </main>
  )
}
