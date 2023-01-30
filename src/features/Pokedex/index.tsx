import { PokemonCard } from './components/PokemonCard'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import React from 'react'
import { PokemonType } from 'types/Pokemon/Pokemon'
import axios from 'axios'
import { PokemonDetail } from 'features/PokemonDetail'

let counter = 0

export function Pokedex() {
  // const [counter, setCounter] = React.useState(-20)
  // const [data, setData] = React.useState<PokemonType[]>([])

  // const loadMore = async () => {
  //   const dataa: PokemonRequest = await (
  //     await fetch(
  //       `https://pokeapi.co/api/v2/pokemon?offset=${counter + 20}&limit=${20}`
  //     )
  //   ).json()

  //   // set state when the data received
  //   setCounter((prev) => prev + 20)

  //   dataa.results.map(async (poke) => {
  //     await (await fetch(poke.url)).json().then((data) => {
  //       setData((prev) => [...prev, data])
  //     })
  //   })
  // }

  const [data, setData] = React.useState<PokemonType[]>([])

  const loadMore = async () => {
    const urls: string[] = []

    for (let i = counter + 1; i <= counter + 20; i++) {
      urls.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
    }

    counter = counter + 20

    axios.all(urls.map((endpoint) => axios.get(endpoint))).then((data) => {
      const onlyData: PokemonType[] = data.map((url) => url.data)

      setData((prev) => [...prev, ...onlyData])
    })
  }

  console.log(data, 'data')

  return (
    <S.Wrapper>
      <Dialog.Root>
        <S.Container>
          {data.map((pokemon) => (
            <PokemonCard key={pokemon.id} pokemon={pokemon} />
          ))}
        </S.Container>
        <Dialog.Portal>
          <S.DialogOverlay />
          <S.PokeDialog>
            <Dialog.Title>Oba oba</Dialog.Title>
            <Dialog.Description />
            <PokemonDetail />
            <Dialog.Close />
          </S.PokeDialog>
        </Dialog.Portal>
      </Dialog.Root>

      <button style={{ background: 'violet' }} onClick={loadMore}>
        Load More
      </button>
    </S.Wrapper>
  )
}
