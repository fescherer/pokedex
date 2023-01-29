import Filter from 'compoents/Filter'
import { LogoIcon } from 'icons/applogo'
import * as S from './styles'

export default function Header() {
  return (
    <S.Wrapper>
      <S.Container>
        <LogoIcon />
        <S.Title>Pokedex</S.Title>
      </S.Container>
      <Filter />
    </S.Wrapper>
  )
}
