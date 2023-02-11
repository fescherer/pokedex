import { ProgressBar } from 'compoents/ProgressBar'
import { Title } from 'compoents/Title'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import { PokemonTypeColors } from 'types/enum/PokemonTypeColors'
import { PokemonType } from 'types/Pokemon/Pokemon'
import {
  PokemonStatEnum,
  PokemonStatType as PokemonStatInterface
} from 'types/Pokemon/Stat'
import * as S from './styles'

type PokemonStatType = {
  pokemonColor: string
  stat: {
    title: string
    value: number
  }
  sum: number
}

function getStat(pokemon: PokemonType, stat: PokemonStatInterface) {
  const indexStat = pokemon.stats.findIndex((value) => value.stat.name === stat)
  const statValue = pokemon.stats[indexStat].base_stat
  return { title: PokemonStatEnum[stat], value: statValue }
}

function getTotal(pokemon: PokemonType) {
  return pokemon.stats.reduce(
    (accumulator, currentValue) => accumulator + currentValue.base_stat,
    0
  )
}

function PokemonStat({ pokemonColor, stat, sum }: PokemonStatType) {
  return (
    <S.StatContainer>
      <S.Title color={pokemonColor}>{stat.title}</S.Title>
      <S.Divider decorative orientation="vertical" />

      <ProgressBar color={pokemonColor} progress={(stat.value * 100) / sum} />
      <S.Value>{stat.value}</S.Value>
    </S.StatContainer>
  )
}

const maxStats = {
  hp: 255,
  spd: 200,
  atk: 181,
  spAtk: 180,
  def: 230,
  spDef: 230
}

export function PokemonStats() {
  const { pokemonDetail: pokemon } = usePokemonDetailContext()

  if (!pokemon) return <div>Loading...</div>

  const pokemonColor =
    PokemonTypeColors[
      pokemon.types[0].type.name as keyof typeof PokemonTypeColors
    ]

  const stats = {
    hp: getStat(pokemon, 'hp'),
    attack: getStat(pokemon, 'attack'),
    defense: getStat(pokemon, 'defense'),
    spatk: getStat(pokemon, 'special-attack'),
    spdef: getStat(pokemon, 'special-defense'),
    speed: getStat(pokemon, 'speed')
  }

  const sum = getTotal(pokemon)

  return (
    <>
      <Title color={pokemonColor}>Stats</Title>

      <S.Wrapper>
        <PokemonStat
          pokemonColor={pokemonColor}
          stat={stats.hp}
          sum={maxStats.hp}
        />
        <PokemonStat
          pokemonColor={pokemonColor}
          stat={stats.attack}
          sum={maxStats.atk}
        />
        <PokemonStat
          pokemonColor={pokemonColor}
          stat={stats.defense}
          sum={maxStats.def}
        />
        <PokemonStat
          pokemonColor={pokemonColor}
          stat={stats.spatk}
          sum={maxStats.spAtk}
        />
        <PokemonStat
          pokemonColor={pokemonColor}
          stat={stats.spdef}
          sum={maxStats.spDef}
        />
        <PokemonStat
          pokemonColor={pokemonColor}
          stat={stats.spdef}
          sum={maxStats.spd}
        />

        <S.StatContainer>
          <S.Title color={pokemonColor}>{'TOTAL'}</S.Title>
          <S.Divider decorative orientation="vertical" />

          <div style={{ width: '100%' }}></div>
          <S.Value>{sum}</S.Value>
        </S.StatContainer>
      </S.Wrapper>
    </>
  )
}
