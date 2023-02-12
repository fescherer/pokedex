import { PokemonCard } from './components/PokemonCard'
import React from 'react'
import axios from 'axios'
import { PokemonDetail } from 'features/PokemonDetail'
import { NamedAPIType } from 'types/Pokemon/Common'
import { filterData } from 'util/functions'
import { useSearchContext } from 'context/searchInput.contex'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'

function Pokedex() {
  const { search } = useSearchContext()
  const [pokeData, setPokeData] = React.useState<NamedAPIType[]>([])
  const [pokeDataFiltered, setPokeDataFiltered] = React.useState<
    NamedAPIType[]
  >([])
  const { setPokemonDetail } = usePokemonDetailContext()
  React.useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=-1').then((response) => {
      setPokeData(response.data.results)
    })
  }, [])

  React.useEffect(() => {
    const filteredData = filterData(pokeData, search)
    setPokeDataFiltered(filteredData)
  }, [pokeData, search])

  function closeDialog() {
    setPokemonDetail(null)
  }

  return (
    <S.Wrapper>
      <Dialog.Root>
        <S.Container>
          {pokeDataFiltered.map((pokemon) => (
            <PokemonCard key={pokemon.name} pokemon={pokemon} />
          ))}
        </S.Container>
        <S.DialogOverlay />
        <Dialog.Portal>
          <S.PokeDialog onInteractOutside={closeDialog}>
            <PokemonDetail />
          </S.PokeDialog>
        </Dialog.Portal>
      </Dialog.Root>
    </S.Wrapper>
  )
}

export default React.memo(Pokedex)
