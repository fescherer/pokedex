import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import Image from 'next/image'
import { ArrowLeft } from 'phosphor-react'
import { CardTab } from './components/CardTab'
import * as S from './styles'

export function PokemonDetail() {
  const { pokemonDetail: pokemon } = usePokemonDetailContext()

  if (!pokemon) return <div>Loading...</div>

  return (
    <S.Wrapper>
      <S.Container>
        <S.HeaderContainer>
          <S.HeaderTitleContainer>
            <ArrowLeft size={20} />
            <span>{pokemon.name}</span>
          </S.HeaderTitleContainer>
          <S.Number>#{String(pokemon.id).padStart(5, '0')}</S.Number>
        </S.HeaderContainer>

        <S.DataContainer>
          <S.ImageContainer>
            <Image
              src={pokemon.sprites.front_default}
              width={150}
              height={150}
              alt=""
            />
          </S.ImageContainer>

          <CardTab />
        </S.DataContainer>
      </S.Container>
    </S.Wrapper>
  )
}
