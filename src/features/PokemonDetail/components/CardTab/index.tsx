import * as S from './styles'
import { PokemonStats } from '../PokemonStats'
import { AlignLeft, Circle, MapPin } from 'phosphor-react'
import { PokeballIcon } from 'icons/pokeball'

export function CardTab() {
  return (
    <S.TabContainer defaultValue="f">
      <S.ItemTab>
        <S.Trigger value="stats">
          <AlignLeft size={16} weight="fill" />
          <Circle size={6} weight="fill" />
        </S.Trigger>
        <S.Trigger value="evolution">
          <PokeballIcon />
          <Circle size={6} weight="fill" />
        </S.Trigger>
        <S.Trigger value="location">
          <MapPin size={20} weight="fill" />
          <Circle size={6} weight="fill" />
        </S.Trigger>
      </S.ItemTab>
      <S.Content value="stats">
        <PokemonStats />
      </S.Content>
      <S.Content value="evolution">
        <span>G</span>
      </S.Content>
      <S.Content value="location">
        <span>G</span>
      </S.Content>
    </S.TabContainer>
  )
}
