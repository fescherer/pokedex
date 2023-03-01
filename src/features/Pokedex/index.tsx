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
  const [take, setTake] = React.useState(30)

  React.useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/pokemon?limit=-1').then((response) => {
      setPokeData(response.data.results)
    })
  }, [])

  React.useEffect(() => {
    const filteredData = filterData(pokeData, search, take)
    setPokeDataFiltered(filteredData)
  }, [pokeData, search, take])

  function closeDialog() {
    setPokemonDetail(null)
  }

  function handleTake() {
    setTake((prev) => prev + 30)
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

      {take < 1277 && !search && (
        <S.Button onClick={handleTake}>Ver mais</S.Button>
      )}
    </S.Wrapper>
  )
}

export default React.memo(Pokedex)
