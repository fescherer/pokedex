import styled from 'styled-components'
import { PokemonTypeColors } from 'types/enum/PokemonTypeColors'

export const Wrapper = styled.div`
  height: 100%;
  padding: 0.5rem;
  height: 100%;
`

export const Container = styled.div<{ type: string }>`
  background-color: ${(props) =>
    PokemonTypeColors[props.type as keyof typeof PokemonTypeColors]};
  height: 100%;
  border-radius: 10px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
`

export const HeaderContainer = styled.div`
  display: flex;
  align-items: flex-start;
  color: white;
  width: 100%;
  font-weight: 600;
  padding: 1rem;
  height: 30%;
`

export const HeaderTitleContainer = styled.div`
  display: flex;
  align-items: center;

  gap: 1rem;
  width: 100%;
`

export const Number = styled.div`
  font-size: 12px;
`

export const DataContainer = styled.div`
  background-color: white;

  margin: 0.2rem;
  border-radius: 5px;
  height: 70%;

  position: relative;
`

export const ImageContainer = styled.div`
  image-rendering: pixelated;
  position: absolute;
  top: -30%;
  left: 50%;
  translate: -50%;
  border: 1px solid black;

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
  color: #fff;
  padding: 0.25rem 0.5rem;
  font-size: 10px;
  font-weight: 800;
  border-radius: 10px;
`
