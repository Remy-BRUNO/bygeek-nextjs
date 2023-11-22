"use client"
import Image from "next/image"

export default function Card({
  title,
  image,
  support,
  univer,
  date,
  description,
  color,
}: {
  title: string
  image: string
  support: string
  univer: string
  date: string
  description: string
  color: string
}) {
  return (
    <div className="card-inner">
      <div className="card-flip">
        <div className="card" id="card">
          <div className="card-image" style={{ backgroundColor: `${color}` }}>
            <Image alt={title} src={image} width={370} height={270} />
          </div>
          <div className="card-text">
            <h2 className="title">{title}</h2>
            <h2 className="univer">{univer}</h2>
            <div>
              <div>
                <span>{support}</span>
              </div>
              <div>
                <span>{date}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="card-info">
          <p>{description}</p>
        </div>
      </div>
    </div>
  )
}
