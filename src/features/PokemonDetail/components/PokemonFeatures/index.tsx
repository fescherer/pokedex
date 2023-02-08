import axios from 'axios'
import { Title } from 'compoents/Title'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import React from 'react'
import { PokemonTypeColors } from 'types/enum/PokemonTypeColors'
import PokemonEvolution from './components/PokemonEvolution'

export function PokemonFeatures() {
  const { pokemonDetail: pokemon, setPokemonDetail } = usePokemonDetailContext()
  // const { pokemonEvolution, setPokemonEvolution } = React.useState([])

  React.useEffect(() => {
    if (!pokemon || pokemon.speciesFullData) return

    axios.get(pokemon.species.url).then((response) => {
      setPokemonDetail((prev) => {
        if (prev)
          return {
            ...prev,
            speciesFullData: response.data
          }
        else return null
      })
    })
  }, [pokemon, setPokemonDetail])

  if (!pokemon || !pokemon.speciesFullData) return <div>Loading...</div>

  const pokemonColor =
    PokemonTypeColors[
      pokemon.types[0].type.name as keyof typeof PokemonTypeColors
    ]

  // console.log('specie data: ', pokemon.speciesFullData) //Pegar o varieties, genera, habitat, names
  // console.log('evolution data: ', pokemon.evolution) //Pegar o evolution- talvez seja melhor criar o próprio componente

  return (
    <div>
      <Title color={pokemonColor}>Evolução</Title>

      {/* <S.PokemonFeatureContainer>
        <span>{pokemon?.height}</span>
        <S.Divider decorative orientation="vertical" />
        <span>{pokemon?.weight}</span>
      </S.PokemonFeatureContainer>

      <div>
        <span>{`Generation: ${pokemon.speciesFullData.generation.name}`}</span>
      </div> */}

      <PokemonEvolution pokemon={pokemon.id} />
    </div>
  )
}
