import Image from 'next/image'
import { ArrowRight, Question } from 'phosphor-react'
import * as S from './styles'
import PokemonDetailEvolution from '../PokemonDetailEvolution'
import * as HoverCard from '@radix-ui/react-hover-card'
import { getIDByURL } from 'util/functions'
import { ChainLinkType } from 'types/Pokemon/Evolution'

type StageEvolutionProps = {
  data: ChainLinkType
}

export default function StageEvolution({ data }: StageEvolutionProps) {
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
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIDByURL(
            data.species?.url
          )}.png`}
          width={75}
          height={75}
          alt={data.species.name}
          unoptimized
        />
      </S.PokemonCard>
    </S.Wrapper>
  )
}
