import * as S from './styles'
import { PokemonStats } from '../PokemonStats'
import { AlignLeft, Circle, MapPin } from 'phosphor-react'
import { PokeballIcon } from 'icons/pokeball'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import { PokemonTypeColors } from 'types/enum/PokemonTypeColors'
import { PokemonFeatures } from '../PokemonFeatures'

export function CardTab() {
  const { pokemonDetail: pokemon } = usePokemonDetailContext()

  if (!pokemon) return <div>Loading...</div>

  const pokemonColor =
    PokemonTypeColors[
      pokemon.types[0].type.name as keyof typeof PokemonTypeColors
    ]

  return (
    <S.TabContainer defaultValue="f">
      <S.ItemTab>
        <S.Trigger value="stats" color={pokemonColor}>
          <AlignLeft size={16} weight="fill" />
          <Circle size={6} weight="fill" />
        </S.Trigger>
        <S.Trigger value="evolution" color={pokemonColor}>
          <PokeballIcon />
          <Circle size={6} weight="fill" />
        </S.Trigger>
        <S.Trigger value="location" color={pokemonColor}>
          <MapPin size={20} weight="fill" />
          <Circle size={6} weight="fill" />
        </S.Trigger>
      </S.ItemTab>
      <S.Content value="stats">
        <PokemonStats />
      </S.Content>
      <S.Content value="evolution">
        <PokemonFeatures />
      </S.Content>
      <S.Content value="location">
        <span>G</span>
      </S.Content>
    </S.TabContainer>
  )
}
