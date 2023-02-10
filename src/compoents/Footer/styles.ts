import Link from 'next/link'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1rem;
  font-size: 12px;
  color: #00000099;
  background-color: ${({ theme }) => theme.colors.default.white};
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 0.5rem;
`

export const SocialContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  color: #00000066;
  fill: #00000066;
`

export const SocialIcon = styled(Link)<{ color: string }>`
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.color};
    fill: ${(props) => props.color};
  }
`
