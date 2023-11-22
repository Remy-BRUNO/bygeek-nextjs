"use server"
import { z } from "zod"
import { put } from "@vercel/blob"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const Schema = z.object({
  title: z.string(),
  file: z.string(),
  univer: z.string(),
  support: z.string(),
  date: z.string(),
  description: z.string(),
  color: z.string(),
})

// image upload
export const uploadFile = async (formData: FormData) => {
  const file = formData.get("file") as File

  const filename = file.name

  const blob = await put(filename, file, {
    access: "public",
  })
  return blob.url
}

// creer un article
export async function create(formData: FormData, url: string) {
  const data = Object.fromEntries(formData)
  data.file = url
  console.log(data)
  const result = Schema.parse(data)
  const { title, file, univer, support, date, description, color } = result
  try {
    if (result!) {
      throw new Error("Tout les champs doivent etre remplis")
    }
    await sql`INSERT INTO articles (title,file,univer,support,date,description,color,user_id) VALUES (${title},${file},${univer},${support},${date},${description},${color},1)`
    revalidatePath("/dashboard")
    redirect("/dashboard")
  } catch (error) {
    return { message: "article non ajouté" }
  }
}
