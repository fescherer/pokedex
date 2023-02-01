import * as Progress from '@radix-ui/react-progress'
import styled from 'styled-components'

export const Root = styled(Progress.Root)<{ color: string }>`
  width: 100%;
  position: relative;
  overflow: hidden;
  background: ${(props) => `${props.color}33`};
  border-radius: 10px;
  height: 4px;

  transform: translateZ(0);
`

export const ProgressIndicator = styled(Progress.ProgressIndicator)<{
  color: string
}>`
  background-color: ${(props) => props.color};
  width: 100%;
  height: 100%;
  transition: transform 660ms cubic-bezier(0.65, 0, 0.35, 1);
`
