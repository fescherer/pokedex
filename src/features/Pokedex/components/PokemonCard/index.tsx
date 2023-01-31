import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import React from 'react'
import { PokemonType } from 'types/Pokemon/Pokemon'
import * as S from './styles'

type PokemonCardProps = {
  pokemon: PokemonType
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const [isHovering, setIsHovered] = React.useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  const { setPokemonDetail } = usePokemonDetailContext()

  const savePokemonDetail = (pokemon: PokemonType) => {
    setPokemonDetail(pokemon)
  }
  return (
    <S.Wrapper
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onClick={() => savePokemonDetail(pokemon)}
    >
      <S.Header>
        <span>{pokemon.name}</span>
        <S.Number>#{String(pokemon.id).padStart(5, '0')}</S.Number>
      </S.Header>
      {isHovering ? (
        <S.PokeImage
          src={
            pokemon.sprites?.versions?.['generation-v']?.['black-white']
              ?.animated?.front_default ?? pokemon.sprites.front_default
          }
          width={96}
          height={96}
          alt={pokemon.name}
        />
      ) : (
        <S.PokeImage
          src={pokemon.sprites.front_default ?? ''}
          width={96}
          height={96}
          alt={pokemon.name}
        />
      )}
    </S.Wrapper>
  )
}
