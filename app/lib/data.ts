import { sql } from "@vercel/postgres"
import { unstable_noStore as noStore } from "next/cache"
import { User, Article, Favoris } from "./definitions"

export async function fetchArticle() {
  noStore()
  try {
    console.log("Fetching articles data...")

    const data = await sql<Article>`SELECT * FROM articles`

    return data.rows
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch articles data.")
  }
}

export async function fetchUsers() {
  noStore()
  try {
    console.log("Fetching users data...")

    const data = await sql<User>`SELECT * FROM users`

    return data.rows
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch users data.")
  }
}
export async function fetchFavoris() {
  noStore()
  try {
    console.log("Fetching Favoris data...")

    const data = await sql<Favoris>`SELECT * FROM favoris`

    return data.rows
  } catch (error) {
    console.error("Database Error:", error)
    throw new Error("Failed to fetch Favoris data.")
  }
}
