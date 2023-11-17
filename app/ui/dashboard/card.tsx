"use client"
import Image from "next/image"

export default function Card({
  title,
  image,
  description,
}: {
  title: string
  image: string
  description: string
}) {
  // return (
  //   <div>
  //     <h3>{title} </h3>
  //     <Image src={image} alt="" width={450} height={400} className="img" />
  //     <p style={{ backgroundImage: `url(${image})` }}>{description}</p>
  //   </div>
  // )

  return (
    <div className="card-container">
      <div className="card" id="hulk">
        <div className="card-image">
          <Image
            alt=""
            src="https://res.cloudinary.com/dsgvp2wmj/image/upload/v1636769866/466-4665707_hulk-png-avengers-earths-mightiest-heroes-hulk-transparent-removebg-preview_hxdclj.png"
            width={375}
            height={275}
          />
        </div>
        <div className="card-text">
          <h2>MARVEL</h2>
          <p>{title}</p>

          <div>
            <div>
              {/* <span>15</span>
                <span>&cent;</span> */}
            </div>
            <div>
              <span>27</span>
              <span>May</span>
            </div>
          </div>
        </div>
      </div>
      <div className="card card-info">
        <p>{description}</p>
      </div>
    </div>
  )
}
