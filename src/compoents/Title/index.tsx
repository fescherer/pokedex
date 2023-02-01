import { ReactNode } from 'react'
import * as S from './styles'

type TitleProps = {
  color: string
  children: ReactNode
}

export function Title({ color, children }: TitleProps) {
  return <S.Title color={color}>{children}</S.Title>
}
