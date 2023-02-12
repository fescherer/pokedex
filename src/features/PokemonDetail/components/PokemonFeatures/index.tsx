import { Title } from 'compoents/Title'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import React from 'react'
import { PokemonTypeColors } from 'types/enum/PokemonTypeColors'
import PokemonEvolution from './components/PokemonEvolution'
import * as S from './styles'

export function PokemonFeatures() {
  const { pokemonDetail: pokemon } = usePokemonDetailContext()

  if (!pokemon) return <div>Loading...</div>

  const pokemonColor =
    PokemonTypeColors[
      pokemon.types[0].type.name as keyof typeof PokemonTypeColors
    ]

  return (
    <S.Wrapper>
      <Title color={pokemonColor}>Evolution</Title>

      <PokemonEvolution />
    </S.Wrapper>
  )
}
