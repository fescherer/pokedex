import axios from 'axios'
import { Title } from 'compoents/Title'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import React from 'react'
import { PokemonTypeColors } from 'types/enum/PokemonTypeColors'
import * as S from './styles'

export function PokemonFeatures() {
  const { pokemonDetail: pokemon, setPokemonDetail } = usePokemonDetailContext()
  const { pokemonEvolution, setPokemonEvolution } = React.useState([])

  React.useEffect(() => {
    if (!pokemon || pokemon.speciesFullData) return

    axios.get(pokemon.species.url).then((response) => {
      axios.get(response.data.evolution_chain.url).then((resposeEvolution) => {
        console.log(resposeEvolution.data, '1')

        const dataaa = pokemon.evolution.chain.evolves_to.map((poke) => {
          return poke
        })

        // <span>
        //   {pokemon.evolution.chain.evolves_to.map((poke) => {
        //     return (
        //       <div key={poke.species.name}>
        //         <div>{poke.species.name}</div>
        //         {poke.evolves_to.map((pokeLast) => {
        //           return (
        //             <div key={pokeLast.species.name}>
        //               <div>{pokeLast.species.name}</div>
        //             </div>
        //           )
        //         })}
        //       </div>
        //     )
        //   })}
        // </span>

        setPokemonDetail((prev) => {
          if (prev)
            return {
              ...prev,
              speciesFullData: response.data,
              evolution: resposeEvolution.data,
              evolutionSprites: []
            }
          else return null
        })
      })
    })
  }, [pokemon, setPokemonDetail])

  if (!pokemon || !pokemon.speciesFullData || !pokemon.evolution)
    return <div>Loading...</div>

  const pokemonColor =
    PokemonTypeColors[
      pokemon.types[0].type.name as keyof typeof PokemonTypeColors
    ]

  console.log('specie data: ', pokemon.speciesFullData) //Pegar o varieties, genera, habitat, names
  console.log('evolution data: ', pokemon.evolution) //Pegar o evolution- talvez seja melhor criar o próprio componente

  return (
    <div>
      <Title color={pokemonColor}>Forma física</Title>

      <S.PokemonFeatureContainer>
        <span>{pokemon?.height}</span>
        <S.Divider decorative orientation="vertical" />
        <span>{pokemon?.weight}</span>
      </S.PokemonFeatureContainer>

      <div>
        <span>{`Generation: ${pokemon.speciesFullData.generation.name}`}</span>
      </div>

      <div>
        <span> {pokemon.evolution.chain.species.name}</span>
        <span>
          {pokemon.evolution.chain.evolves_to.map((poke) => {
            return (
              <div key={poke.species.name}>
                <div>{poke.species.name}</div>
                {poke.evolves_to.map((pokeLast) => {
                  return (
                    <div key={pokeLast.species.name}>
                      <div>{pokeLast.species.name}</div>
                    </div>
                  )
                })}
              </div>
            )
          })}
        </span>
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
