import styled from 'styled-components'
import { getBestContrastColor } from 'util/functions'

export const Wrapper = styled.div``

export const LocationCard = styled.div`
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px 0px;
  padding: 0.5rem 0.25rem;
  border-radius: 2px;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const LocationTitle = styled.span`
  font-size: 16px;
  font-weight: 600;
`

export const VersionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const Container = styled.div<{ hasDivider: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: ${(props) => (props.hasDivider ? '1.5rem' : '1rem')};
`

export const EnconterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 1rem;
`

export const TitleGameVersion = styled.span<{ color: string }>`
  font-size: 12px;
  text-transform: capitalize;
  color: ${(props) => getBestContrastColor(props.color)};
  background-color: ${(props) => props.color};
`

export const EnconterCard = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  border: ${(props) => `1px solid ${props.color}`};
  border-radius: 5px;
  padding: 0.25rem;
`
