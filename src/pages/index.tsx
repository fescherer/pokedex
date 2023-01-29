import IconButton from 'compoents/IconButton'
import GithubIcon from 'icons/github'
import { useTheme } from 'styled-components'
import * as S from 'styles/styles'

export default function Home() {
  const theme = useTheme()

  return (
    <S.MainContent>
      <S.Title>Boilerplate dos projetos em Next JS do Felipe Scherer</S.Title>
      <IconButton>
        <a
          href="https://github.com/ofelipescherer"
          target="_blank"
          rel="noreferrer"
        >
          <GithubIcon color={theme.colors.typografy.title} />
        </a>
      </IconButton>
    </S.MainContent>
  )
}
