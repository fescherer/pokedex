import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { ChainLinkType, EvolutionChainType } from 'types/Pokemon/Evolution'
import { PokemonSpeciesFullDataType } from 'types/Pokemon/Species'
import StageEvolution from '../StageEvolution'
import * as S from './styles'

type PokemonEvolutionProps = {
  pokemon: string | number
}

export default function PokemonEvolution({ pokemon }: PokemonEvolutionProps) {
  const [pokeEvo, setPokeEvo] = React.useState<ChainLinkType | null>(null)

  React.useEffect(() => {
    axios
      .get<PokemonSpeciesFullDataType>(
        `https://pokeapi.co/api/v2/pokemon-species/${pokemon}`
      )
      .then((response) => {
        axios
          .get<EvolutionChainType>(response.data.evolution_chain.url)
          .then((chain) => {
            setPokeEvo(chain.data.chain)
          })
      })
  }, [pokemon])

  function getID(url: string) {
    const urlSplitted = url.split('/')
    return urlSplitted[urlSplitted.length - 2]
  }

  if (!pokeEvo) return <></>

  return (
    <S.Wrapper>
      <S.PokemonCard>
        <S.PokemonCardTitle>{pokeEvo.species?.name}</S.PokemonCardTitle>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getID(
            pokeEvo.species?.url
          )}.png`}
          width={75}
          height={75}
          alt=""
        />
      </S.PokemonCard>
      <S.Container>
        {pokeEvo.evolves_to?.map((phase2) => {
          return <StageEvolution key={phase2.species.name} data={phase2} />
        })}
      </S.Container>
      <S.Container>
        {pokeEvo.evolves_to?.map((phase2) => {
          return phase2.evolves_to?.map((phase3) => {
            return <StageEvolution key={phase3.species.name} data={phase3} />
          })
        })}
      </S.Container>
    </S.Wrapper>
  )
}
