import React, { memo } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { MagnifyingGlass } from 'phosphor-react'
import * as S from './styles'

function SearchFilter() {
  const { control, watch } = useForm()
  const search = watch('search-input')

  return (
    <Controller
      control={control}
      name={search}
      render={({ field: { value, onChange } }) => (
        <S.Wrapper>
          <S.Input
            id="search"
            name="search"
            type="text"
            placeholder="Pesquisar"
            value={value ?? ''}
            onChange={onChange}
          />

          <S.SearchIconContainer>
            <MagnifyingGlass size={16} color={'#000000'} />
          </S.SearchIconContainer>
        </S.Wrapper>
      )}
    />
  )
}

export default memo(SearchFilter)
