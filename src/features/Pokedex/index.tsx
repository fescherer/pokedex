import { PokemonCard } from './components/PokemonCard'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import React from 'react'
import { PokemonType } from 'types/Pokemon/Pokemon'
import axios from 'axios'
import { PokemonDetail } from 'features/PokemonDetail'
import { useForm } from 'react-hook-form'
import { NamedAPIType } from 'types/Pokemon/Common'
import { filterData } from 'util/functions'

const counter = 0

export function Pokedex() {
  const { watch } = useForm()
  const search = watch('search-input')

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

  // *****************************************************************************

  // const [data, setData] = React.useState<PokemonType[]>([])

  // const loadMore = async () => {
  //   const urls: string[] = []

  //   for (let i = counter + 1; i <= counter + 20; i++) {
  //     urls.push(`https://pokeapi.co/api/v2/pokemon/${i}/`)
  //   }

  //   counter = counter + 20

  //   axios.all(urls.map((endpoint) => axios.get(endpoint))).then((data) => {
  //     const onlyData: PokemonType[] = data.map((url) => url.data)

  //     setData((prev) => [...prev, ...onlyData])
  //   })
  // }

  // React.useEffect(() => {
  //   loadMore()
  // }, [])
  // console.log(data, 'data')

  const [pokeData, setPokeData] = React.useState<NamedAPIType[]>([])
  const [pokeDataFiltered, setPokeDataFiltered] = React.useState<
    NamedAPIType[]
  >([])

  React.useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=-1').then((response) => {
      setPokeDataFiltered(response.data.results)
    })
  }, [])

  const filteredData = filterData(pokeData, search)

  return (
    <S.Wrapper>
      <Dialog.Root>
        <S.Container>
          {filteredData.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </S.Container>
        <Dialog.Portal>
          <S.DialogOverlay />
          <S.PokeDialog>
            <PokemonDetail />
            <Dialog.Close />
          </S.PokeDialog>
        </Dialog.Portal>
      </Dialog.Root>

      {/* <S.LoadMoreButton onClick={loadMore}>Load More</S.LoadMoreButton> */}
    </S.Wrapper>
  )
}
