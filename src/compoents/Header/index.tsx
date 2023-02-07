import SearchFilter from 'compoents/SearchFilter'
import { LogoIcon } from 'icons/applogo'
import * as S from './styles'

export default function Header() {
  return (
    <S.Wrapper>
      <S.Container>
        <LogoIcon />
        <S.Title>Pokedex</S.Title>
      </S.Container>
      <SearchFilter />
    </S.Wrapper>
  )
}
