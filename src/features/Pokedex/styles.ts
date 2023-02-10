import styled from 'styled-components'
import { media } from 'util/breakpoints'
import * as Dialog from '@radix-ui/react-dialog'

export const Wrapper = styled.div`
  margin: 1rem;
  background-color: ${({ theme }) => theme.colors.background.foreground};
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
  box-shadow: ${({ theme }) =>
    `${theme.colors.typografy.placeholder} 0px 2px 4px 0px`};
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  ${media.lessThan('tablet')`
  margin: 0;
  border-radius: 0
  `};
`

export const Container = styled(Dialog.Trigger)`
  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
  gap: 1rem;
`

export const DialogOverlay = styled(Dialog.Overlay)`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  .DialogOverlay[data-state='open'],
  .DialogContent[data-state='open'] {
    animation: fadeIn 300ms ease-out;
  }

  .DialogOverlay[data-state='closed'],
  .DialogContent[data-state='closed'] {
    animation: fadeOut 300ms ease-in;
  }
  background-color: ${({ theme }) => theme.colors.util.overlay};
  position: fixed;
  inset: 0;
`

export const PokeDialog = styled(Dialog.Content)``

export const LoadMoreButton = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.main.pokemon};
  color: ${({ theme }) => theme.colors.default.white};
  padding: 1rem 5rem;
  border-radius: 10px;
  cursor: pointer;

  &:hover {
    filter: brightness(0.8);
  }
`
