import styled from 'styled-components'
import { PokemonTypeColors } from 'types/enum/PokemonTypeColors'

export const LoadingWrapper = styled.div`
  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: contentShow 0.5s cubic-bezier(0.16, 1, 0.3, 1);
`

export const Wrapper = styled.div`
  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  background-color: ${({ theme }) => theme.colors.background.foreground};
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  height: 500px;
  max-width: 360px;
  border-radius: 12px;
  overflow: hidden;
  padding: 0.5rem;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`

export const Container = styled.div<{ type: string }>`
  background-color: ${(props) =>
    PokemonTypeColors[props.type as keyof typeof PokemonTypeColors]};
  height: 100%;
  border-radius: 10px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  position: relative;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  color: ${({ theme }) => theme.colors.typografy.title};
  width: 100%;
  font-weight: 600;
  padding: 1rem;
  min-height: 30%;
`

export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`

export const Number = styled.div`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.typografy.subtitle};
`

export const ImageContainer = styled.div`
  image-rendering: pixelated;
  position: absolute;
  top: 10%;
  left: 50%;
  translate: -50%;
  border: 1px solid black;
  z-index: 100;
  display: flex;
  flex-direction: column;
`

export const TypeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  gap: 1rem;
`

export const PokemonType = styled.div<{ type: string }>`
  background-color: ${(props) =>
    PokemonTypeColors[props.type as keyof typeof PokemonTypeColors]};
  color: ${({ theme }) => theme.colors.typografy.text};
  padding: 0.25rem 0.5rem;
  font-size: 10px;
  font-weight: 800;
  border-radius: 10px;
`
