import styled from 'styled-components'
import { media } from 'util/breakpoints'

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  ${media.lessThan('tablet')`
    width: calc(100% - 2rem);
    margin: 1rem;
    border-radius: 5px
  `};
`

export const Input = styled.input`
  background-color: #ffffff;
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
  transition: 0.05s;
  border-radius: 10px;
  max-width: 100%;
  padding: 0.75rem 1rem;
  border: none;
  padding-right: 2rem;
  color: #000;

  &:focus-within {
    outline: 1px solid #000;
  }

  &::placeholder {
    color: #000000bf;
    opacity: 0.5;
    font-size: 0.75rem;
    font-weight: 400;
  }

  &:-ms-input-placeholder {
    color: #000000bf;
  }
  &::-ms-input-placeholder {
    color: #000000bf;
  }

  ${media.lessThan('tablet')`

    width: 100%;
  `};
`

export const SearchIconContainer = styled.button`
  position: absolute;
  right: 0.5rem;
`
