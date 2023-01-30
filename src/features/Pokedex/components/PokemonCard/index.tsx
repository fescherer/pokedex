import React from 'react'
import * as S from './styles'

type PokemonCardProps = {
  name: string
  no: number
  image: string
  gif: string | undefined
}

export function PokemonCard({ name, no, image, gif }: PokemonCardProps) {
  const [isHovering, setIsHovered] = React.useState(false)
  const onMouseEnter = () => setIsHovered(true)
  const onMouseLeave = () => setIsHovered(false)

  console.log('aaa')
  return (
    <S.Wrapper onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <S.Header>
        <span>{name}</span>
        <S.Number>#{String(no).padStart(5, '0')}</S.Number>
      </S.Header>
      {isHovering ? (
        <S.PokeImage src={gif ?? ''} width={96} height={96} alt={name} />
      ) : (
        <S.PokeImage src={image ?? ''} width={96} height={96} alt={name} />
      )}
    </S.Wrapper>
  )
}
