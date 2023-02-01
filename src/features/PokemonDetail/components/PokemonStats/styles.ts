import styled from 'styled-components'
import * as Separator from '@radix-ui/react-separator'

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`

export const StatContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  gap: 5%;
  font-size: 10px;
`

export const Title = styled.span<{ color: string }>`
  min-width: 35px;
  text-align: end;

  font-weight: 700;
  color: ${(props) => props.color};
`

export const Divider = styled(Separator.Root)`
  height: 20px;
  width: 1px;
  background-color: #e0e0e0;
  display: flex;
  align-self: stretch;
  justify-self: stretch;
`

export const Value = styled.span`
  font-weight: 400;
  color: #212121;
`
