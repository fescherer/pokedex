import Link from 'next/link'
import styled from 'styled-components'

export const Wrapper = styled.div`
  padding: 1rem;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.util.footer.text};
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
  color: ${({ theme }) => theme.colors.util.footer.icon};
  fill: ${({ theme }) => theme.colors.util.footer.icon};
`

export const SocialIcon = styled(Link)<{ color: string }>`
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    color: ${(props) => props.color};
    fill: ${(props) => props.color};
  }
`
