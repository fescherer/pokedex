import axios from 'axios'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import React from 'react'
import * as S from './styles'

export function PokemonFeatures() {
  const { pokemonDetail: pokemon, setPokemonDetail } = usePokemonDetailContext()

  React.useEffect(() => {
    if (!pokemon || pokemon.speciesFullData) return

    axios.get(pokemon.species.url).then((response) => {
      axios.get(response.data.evolution_chain.url).then((resposeEvolution) => {
        setPokemonDetail((prev) => {
          if (prev)
            return {
              ...prev,
              speciesFullData: response.data,
              evolution: resposeEvolution.data
            }
          else return null
        })
      })
    })
  }, [pokemon, setPokemonDetail])

  if (!pokemon || !pokemon.speciesFullData) return <div>Loading...</div>

  console.log('specie data: ', pokemon.speciesFullData) //Pegar o varieties, genera, habitat, names
  console.log('evolution data: ', pokemon.evolution) //Pegar o evolution- talvez seja melhor criar o próprio componente

  return (
    <div>
      <div>
        <span>{pokemon?.height}</span>
        <S.Divider decorative orientation="vertical" />
        <span>{pokemon?.weight}</span>
      </div>

      <div>
        <span>{`Generation: ${pokemon.speciesFullData.name}`}</span>
      </div>

      <S.PokemonChain>
        <S.PokemonChainItem
          alt="Pokemon Pre evolution"
          src={pokemon?.sprites}
          width={100}
          height={100}
        />
        <S.PokemonItem
          alt="Pokemon"
          src={pokemon?.sprites}
          width={120}
          height={120}
        />
        <S.PokemonChainItem
          alt="Pokemon evolution"
          src={pokemon?.sprites}
          width={100}
          height={100}
        />
      </S.PokemonChain>
    </div>
  )
}
