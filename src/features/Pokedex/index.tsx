import { PokemonCard } from './components/PokemonCard'
import React from 'react'
import axios from 'axios'
import { PokemonDetail } from 'features/PokemonDetail'
import { NamedAPIType } from 'types/Pokemon/Common'
import { filterData } from 'util/functions'
import { useSearchContext } from 'context/searchInput.contex'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'

export function Pokedex() {
  const { search } = useSearchContext()
  const [pokeData, setPokeData] = React.useState<NamedAPIType[]>([])
  const [pokeDataFiltered, setPokeDataFiltered] = React.useState<
    NamedAPIType[]
  >([])

  React.useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=-1').then((response) => {
      setPokeData(response.data.results)
    })
  }, [])

  React.useEffect(() => {
    const filteredData = filterData(pokeData, search)
    setPokeDataFiltered(filteredData)
    console.log(filteredData)
  }, [pokeData, search])

  return (
    <S.Wrapper>
      <Dialog.Root>
        <S.Container>
          {pokeDataFiltered.map((pokemon) => (
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
    </S.Wrapper>
  )
}
