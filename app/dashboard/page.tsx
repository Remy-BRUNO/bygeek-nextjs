import Card from "../ui/dashboard/card"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Dashboard",
}
export default function Page() {
  return (
    <div className="cards">
      <Card
        title="Hulk"
        image="https://res.cloudinary.com/dsgvp2wmj/image/upload/v1636769866/466-4665707_hulk-png-avengers-earths-mightiest-heroes-hulk-transparent-removebg-preview_hxdclj.png"
        univer="MARVEL"
        support="comics"
        date="1962"
        description="Le docteur Robert Bruce Banner (souvent nommé Bruce Banner, son deuxième prénom), alias Hulk est un super-héros évoluant dans l'univers Marvel de la maison d'édition Marvel Comics. Créé par le scénariste Stan Lee et le dessinateur Jack Kirby, le personnage de fiction apparaît pour la première fois dans le comic book The Incredible Hulk (vol. 1) #1 en mai 1962."
        color="#ffdd33"
      />
    </div>
  )
}
