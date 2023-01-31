import styled from 'styled-components'

export const Wrapper = styled.div`
  height: 100%;
  padding: 0.5rem;
  height: 100%;
`

export const Container = styled.div`
  background-color: lightgreen;
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
  top: -25%;
  left: 50%;
  translate: -50%;
  border: 1px solid black;
`
