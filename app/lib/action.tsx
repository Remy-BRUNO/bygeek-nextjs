"use server"
import { z } from "zod"
import { put } from "@vercel/blob"
import { sql } from "@vercel/postgres"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

const Schema = z.object({
  title: z.string(),
  file: z.any(),
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
  const result = Schema.parse(data)
  result.file = url
  console.log(result)
  const { title, file, univer, support, date, description, color } = result
  console.log(sql)
  try {
    if (result!) {
      throw new Error("Tout les champs doivent etre remplis")
    }
    await sql`INSERT INTO articles (title,file,univer,support,date,description,color,user_id) VALUES (${title},${file},${univer},${support},${date},${description},${color},1)`
  } catch (error) {
    return { message: "article non ajouté" }
  }
  revalidatePath("/dashboard")
  redirect("/dashboard")
}
