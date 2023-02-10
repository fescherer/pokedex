import { useSearchContext } from 'context/searchInput.contex'
import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import { useTheme } from 'styled-components'
import * as S from './styles'

export default function Filter() {
  const { search, setSearch } = useSearchContext()
  const theme = useTheme()

  function handleChange(change: string) {
    setSearch(change)
  }

  return (
    <S.Wrapper>
      <S.Input
        id="search"
        name="search"
        type="text"
        placeholder="Pesquisar"
        value={search ?? ''}
        onChange={(event) => handleChange(event.target.value)}
      />

      <S.SearchIconContainer>
        <MagnifyingGlass size={16} color={theme.colors.typografy.text} />
      </S.SearchIconContainer>
    </S.Wrapper>
  )
}
