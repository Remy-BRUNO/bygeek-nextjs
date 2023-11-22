"use client"
import { create, uploadFile } from "@/app/lib/action"
import style from "./form.module.css"
import Image from "next/image"
import { useFormState, useFormStatus } from "react-dom"
import { useState } from "react"

const initialState = { message: null }

export default function Form() {
  const { pending } = useFormStatus()
  // const [state, formAction] = useFormState(create, initialState)
  // upload
  const [imageUrl, setImageUrl] = useState<string | null>(null)
  const [fileName, setfileName] = useState<string | null>(null)
  const handlesubmit: React.FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const url: string = await uploadFile(formData)
    if (url) {
      setImageUrl(url)

      create(formData, url)
    }
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name: string | undefined = e.currentTarget.value
      .split(/(\\|\/)/g)
      .pop()
    if (name) {
      setfileName(name)
    }
  }
  return (
    <form className={style.form} onSubmit={handlesubmit}>
      <h2>Creation d&apos;article</h2>
      <div className={style.inputs}>
        <label htmlFor="title">Titre</label>
        <input type="text" name="title" id="title" className={style.input} />
      </div>
      <div className={style.inputs}>
        <label htmlFor="file" className={style.customFileUpload}>
          <Image src="/upload.png" alt="upload" width={20} height={20} />
          Choisisez une image
        </label>
        {fileName ? <p>{fileName}</p> : null}
        <input
          type="file"
          name="file"
          id="file"
          className={style.inputUpload}
          accept="image/*"
          onChange={handleChange}
        />
      </div>
      <div className={style.inputs}>
        <label htmlFor="univer">Univer</label>
        <input type="text" name="univer" id="univer" className={style.input} />
      </div>
      <div className={style.inputs}>
        <label htmlFor="support">Support</label>
        <input
          type="text"
          name="support"
          id="support"
          className={style.input}
        />
      </div>
      <div className={style.inputs}>
        <label htmlFor="date">Année de première apparition</label>
        <input type="text" name="date" id="date" className={style.input} />
      </div>
      <div className={style.inputs}>
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          className={style.inputTextarea}
        />
      </div>
      <div className={style.inputs}>
        <label htmlFor="color">Couleur de font</label>
        <input type="color" name="color" id="color" className={style.input} />
      </div>
      <button type="submit" className="btnSubmit" aria-disabled={pending}>
        Créer
      </button>
    </form>
  )
}
