import styled from 'styled-components'
import * as HoverCard from '@radix-ui/react-hover-card'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
`

export const PokemonCard = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.25rem;
`

export const PokemonCardTitle = styled.span`
  font-weight: 600;
  text-transform: capitalize;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.typografy.title};
`

export const EvolutionIndicator = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
`
export const ContentCard = styled(HoverCard.Content)`
  border-radius: 6px;
  padding: 1rem;

  background-color: ${({ theme }) => theme.colors.default.white};
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  animation-duration: 400ms;
  animation-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  will-change: transform, opacity;
`

export const ArrowCard = styled(HoverCard.Arrow)`
  fill: ${({ theme }) => theme.colors.default.white};
`

export const TriggerCard = styled(HoverCard.Trigger)`
  display: flex;
  align-items: center;
  flex-direction: column;
  > * {
    color: ${({ theme }) => theme.colors.default.black};
    cursor: pointer;
  }

  &:hover {
    > * {
      opacity: 0.8;
    }
  }
`

export const WrapperHoverCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.default.white};
`
