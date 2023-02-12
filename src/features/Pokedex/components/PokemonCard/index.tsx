import axios from 'axios'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import React from 'react'
import { NamedAPIType } from 'types/Pokemon/Common'
import { getIDByURL, getRemovedHyphen } from 'util/functions'
import * as S from './styles'

type PokemonCardProps = {
  pokemon: NamedAPIType
}

export function PokemonCard({ pokemon }: PokemonCardProps) {
  const [isHovering, setIsHovered] = React.useState(false)
  const id = getIDByURL(pokemon.url)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)
  const [hasError, setHasError] = React.useState<boolean>(false)

  const SpriteSrc = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  const [animationSpriteSrc, setAnimationSpriteSrc] = React.useState(
    `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${id}.gif`
  )

  const { setPokemonDetail } = usePokemonDetailContext()

  const savePokemonDetail = () => {
    try {
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/${id}/`)
        .then((response) => {
          axios.get(response.data.species.url).then((pokeResponse) =>
            setPokemonDetail({
              ...response.data,
              speciesFullData: pokeResponse.data
            })
          )
        })
        .catch(() => console.log('Error loading cards'))
    } catch (err) {
      console.log('error')
    }
  }

  if (hasError) return <></>
  else
    return (
      <S.Wrapper
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={() => savePokemonDetail()}
      >
        <S.Header>
          <span>{getRemovedHyphen(pokemon.name)}</span>
          <S.Number>
            #{String(getIDByURL(pokemon.url)).padStart(5, '0')}
          </S.Number>
        </S.Header>
        {isHovering && Number(id) < 650 ? (
          <S.PokeImage
            src={animationSpriteSrc}
            width={96}
            height={96}
            alt={pokemon.name}
            onError={() => setAnimationSpriteSrc(SpriteSrc)}
          />
        ) : (
          <S.PokeImage
            src={SpriteSrc}
            width={96}
            height={96}
            alt={pokemon.name}
            onError={() => setHasError(true)}
          />
        )}
      </S.Wrapper>
    )
}
