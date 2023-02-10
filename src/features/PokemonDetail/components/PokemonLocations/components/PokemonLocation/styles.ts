import styled from 'styled-components'

export const Container = styled.div`
  color: ${({ theme }) => theme.colors.typografy.subtitle};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const EncounterTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.typografy.title};
`

export const PercentageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  font-size: 12px;
`

export const EncounterLevel = styled.span`
  font-weight: 600;
  font-size: 12px;
`

export const ConditionalEncounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: 12px;
`
