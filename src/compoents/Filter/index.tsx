import { MagnifyingGlass } from 'phosphor-react'
import React from 'react'
import * as S from './styles'

export default function Filter() {
  const [value, setValue] = React.useState('')

  function handleChange(change: string) {
    setValue(change)
  }

  return (
    <S.Wrapper>
      <S.Input
        id="search"
        name="search"
        type="text"
        placeholder="Pesquisar"
        value={value ?? ''}
        onChange={(event) => handleChange(event.target.value)}
      />

      <S.SearchIconContainer>
        <MagnifyingGlass size={16} color={'#000000'} />
      </S.SearchIconContainer>
    </S.Wrapper>
  )
}
