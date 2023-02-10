import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  max-height: 100%;
  max-width: 100%;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const PokemonCardTitle = styled.span`
  font-weight: 600;
  text-transform: capitalize;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.typografy.title};
`

export const PokemonCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  gap: 0.25rem;
`
