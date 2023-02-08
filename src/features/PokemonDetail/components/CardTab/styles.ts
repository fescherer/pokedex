import styled from 'styled-components'
import * as Tabs from '@radix-ui/react-tabs'

export const TabContainer = styled(Tabs.Root)`
  margin-top: 25%;
`

export const ItemTab = styled(Tabs.List)`
  margin: 1rem;

  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  border-radius: 8px;
  display: flex;
  justify-content: space-around;
`

export const Trigger = styled(Tabs.Trigger)<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    opacity: 0.5;
  }

  &[data-state='active'] {
    color: ${(props) => props.color};
  }
`
export const Content = styled(Tabs.Content)`
  padding: 1rem;
`
