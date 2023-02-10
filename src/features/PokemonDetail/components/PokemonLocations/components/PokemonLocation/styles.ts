import styled from 'styled-components'

export const EncounterTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
  color: ${({ theme }) => theme.colors.default.black};
`

export const PercentageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  width: 100%;
  font-size: 12px;
  color: #4e4e4e;
`

export const EncounterLevel = styled.span`
  color: #4e4e4e;
  font-weight: 600;
  font-size: 12px;
`

export const ConditionalEncounterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: 12px;
  color: #4e4e4e;
`
