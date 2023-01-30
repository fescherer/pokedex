import styled from 'styled-components'
import { media } from 'util/breakpoints'

export const Container = styled.div`
  box-sizing: border-box !important;
  background-color: ${({ theme }) => theme.colors.background.background};
`

export const Contain = styled.div`
  overflow: hidden;
  margin: auto;
  z-index: 10;
  position: inherit;
`

export const MainLayout = styled.main`
  min-height: calc(100vh - 102px - 85px);
  display: flex;

  ${media.lessThan('tablet')`
  min-height: calc(100vh - 141px - 85px);
  `};
`
