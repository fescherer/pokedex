import styled from 'styled-components'
import { media } from 'util/breakpoints'
import * as Dialog from '@radix-ui/react-dialog'

export const Wrapper = styled.div`
  margin: 1rem;
  background-color: ${({ theme }) => theme.colors.background.foreground};
  border-radius: 10px;
  padding: 1rem;
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.18) 0px 2px 4px 0px;

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
  @keyframes overlayShow {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: overlayShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
  background-color: #00000055;
  position: fixed;
  inset: 0;
`

export const PokeDialog = styled(Dialog.Content)`
  @keyframes contentShow {
    from {
      opacity: 0;
      transform: translate(-50%, -48%) scale(0.96);
    }
    to {
      opacity: 1;
      transform: translate(-50%, -50%) scale(1);
    }
  }

  background-color: white;
  border-radius: 6px;
  box-shadow: hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;
  max-width: 450px;
  max-height: 85vh;
  padding: 25px;
  animation: contentShow 150ms cubic-bezier(0.16, 1, 0.3, 1);
`
