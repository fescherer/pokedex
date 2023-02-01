import * as S from './styles'

type ProgressBarType = {
  progress: number
  color: string
}

export function ProgressBar({ progress, color }: ProgressBarType) {
  return (
    <S.Root color={color} value={progress}>
      <S.ProgressIndicator
        color={color}
        style={{ transform: `translateX(-${100 - progress}%)` }}
      />
    </S.Root>
  )
}
