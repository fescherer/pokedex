import styled from 'styled-components'
import { media } from 'util/breakpoints'

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.main.pokemon};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;

  ${media.lessThan('tablet')`
    justify-content: center;
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    padding-top: 1rem;
  `};
`

export const Title = styled.h1`
  font-size: 40px;
  color: ${({ theme }) => theme.colors.typografy.title};
`
export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`
