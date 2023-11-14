export type User = {
  id: string
  name: string
  email: string
  password: string
  role: string
}
export type Article = {
  id: string
  title: string
  image: string
  description: string
  user_id: string
}
export type Favoris = {
  article_id: string
  user_id: string
}
