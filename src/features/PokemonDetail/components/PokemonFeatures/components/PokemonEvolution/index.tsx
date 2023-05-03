import axios from 'axios'
import Loader from 'compoents/Loader'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import Image from 'next/image'
import React from 'react'
import { ChainLinkType, EvolutionChainType } from 'types/Pokemon/Evolution'
import { getIDByURL } from 'util/functions'
import StageEvolution from '../StageEvolution'
import * as S from './styles'

function PokemonEvolution() {
  const [pokeEvo, setPokeEvo] = React.useState<ChainLinkType | null>(null)
  const { pokemonDetail: pokemon } = usePokemonDetailContext()
  React.useEffect(() => {
    if (!pokemon || !pokemon.speciesFullData) return
    else
      axios
        .get<EvolutionChainType>(pokemon.speciesFullData.evolution_chain.url)
        .then((chain) => {
          setPokeEvo(chain.data.chain)
        })
  }, [pokemon])

  if (!pokeEvo)
    return (
      <div style={{ transform: 'scale(0.5)' }}>
        <Loader />
      </div>
    )

  return (
    <S.Wrapper>
      <S.PokemonCard>
        <S.PokemonCardTitle>{pokeEvo.species?.name}</S.PokemonCardTitle>
        <Image
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getIDByURL(
            pokeEvo.species?.url
          )}.png`}
          width={75}
          height={75}
          alt=""
          unoptimized
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

export default React.memo(PokemonEvolution)
