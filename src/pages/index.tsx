import { Pokedex } from 'features/Pokedex'
import Image from 'next/image'

export default function Home() {
  // return <Pokedex />
  return (
    <div>
      <span>dsadasd</span>
      <Image
        src="https://user-images.githubusercontent.com/62115215/216988708-f30e2c75-66d2-43a1-b3ce-d0a2a86bba7f.jpg"
        alt={''}
        title={''}
        width={173}
        height={27}
        priority
      />
    </div>
  )
}
