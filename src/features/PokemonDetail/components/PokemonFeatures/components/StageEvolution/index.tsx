import Image from 'next/image'
import { ArrowRight, Question } from 'phosphor-react'
import * as S from './styles'
import PokemonDetailEvolution from '../PokemonDetailEvolution'
import * as HoverCard from '@radix-ui/react-hover-card'

export default function StageEvolution({ data }: StageEvolution) {
  function getID(url: string) {
    const urlSplitted = url.split('/')
    return urlSplitted[urlSplitted.length - 2]
  }

  return (
    <S.Wrapper>
      <HoverCard.Root>
        <S.TriggerCard>
          <Question />
          <ArrowRight />
        </S.TriggerCard>
        <HoverCard.Portal>
          <S.ContentCard>
            <S.ArrowCard />
            <S.WrapperHoverCard>
              {data?.evolution_details?.map((evoDetail, index) => (
                <PokemonDetailEvolution data={evoDetail} key={index} />
              ))}
            </S.WrapperHoverCard>
          </S.ContentCard>
        </HoverCard.Portal>
      </HoverCard.Root>

      <S.PokemonCard>
        <S.PokemonCardTitle>{data.species.name}</S.PokemonCardTitle>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getID(
            data.species?.url
          )}.png`}
          width={75}
          height={75}
          alt={data.species.name}
        />
      </S.PokemonCard>
    </S.Wrapper>
  )
}
