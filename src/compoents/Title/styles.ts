import styled from 'styled-components'

export const Title = styled.span<{ color: string }>`
  font-size: 14px;
  font-weight: 800;
  color: ${(props) => props.color};
`
