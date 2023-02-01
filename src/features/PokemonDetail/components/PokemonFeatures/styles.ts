import Image from 'next/image'
import styled from 'styled-components'
import * as Separator from '@radix-ui/react-separator'

export const Wrapper = styled.div``

export const PokemonChain = styled.div`
  display: flex;
  gap: 1rem;
`

export const PokemonChainItem = styled(Image)`
  width: 100px;
  height: 100px;
`

export const PokemonItem = styled(Image)`
  width: 120px;
  height: 120px;
`

export const Divider = styled(Separator.Root)`
  height: 20px;
  width: 1px;
  background-color: #e0e0e0;
  display: flex;
  align-self: stretch;
  justify-self: stretch;
`
