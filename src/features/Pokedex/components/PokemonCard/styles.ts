import Image from 'next/image'
import styled from 'styled-components'

export const Wrapper = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  padding: 0.5rem;
  border-radius: 5px;
  display: flex;
  flex-direction: column;

  width: 120px;
  height: 142px;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    transform: scale(1.1);

    box-shadow: 0px 0px 5px #888888;
  }
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.25rem;
  font-size: 12px;
  text-transform: capitalize;
`

export const Number = styled.span`
  align-self: flex-end;
  color: ${({ theme }) => theme.colors.typografy.subtitle};
  font-size: 8px;
`

export const PokeImage = styled(Image)`
  align-self: center;
  image-rendering: pixelated;
`
