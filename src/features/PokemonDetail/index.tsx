import Loader from 'compoents/Loader'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import Image from 'next/image'
import { ArrowLeft } from 'phosphor-react'
import React from 'react'
import { getRemovedHyphen, getTranslationName } from 'util/functions'
import { CardTab } from './components/CardTab'
import * as S from './styles'

export function PokemonDetail() {
  const { pokemonDetail: pokemon } = usePokemonDetailContext()

  if (!pokemon || !pokemon.speciesFullData)
    return (
      <S.LoadingWrapper>
        <Loader />
      </S.LoadingWrapper>
    )

  return (
    <S.Wrapper>
      <S.Container type={pokemon.types[0].type.name}>
        <S.HeaderContainer>
          <S.HeaderTitleContainer>
            <ArrowLeft size={20} />
            <span>
              {getTranslationName(pokemon.speciesFullData.names, 'en').name}
            </span>
          </S.HeaderTitleContainer>
          <S.Number>#{String(pokemon.id).padStart(5, '0')}</S.Number>
        </S.HeaderContainer>

        <S.ImageContainer>
          <Image
            src={pokemon.sprites.front_default}
            width={150}
            height={150}
            alt=""
          />

          <S.TypeContainer>
            {pokemon.types.map((type) => (
              <S.PokemonType type={type.type.name} key={type.type.name}>
                {getRemovedHyphen(type.type.name)}
              </S.PokemonType>
            ))}
          </S.TypeContainer>
        </S.ImageContainer>

        <S.DataContainer>
          <CardTab />
        </S.DataContainer>
      </S.Container>
    </S.Wrapper>
  )
}
