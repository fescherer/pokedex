import { ThemeConfig } from 'types/theme/Theme'
import { palette } from './palette'

export const DarkTheme: ThemeConfig = {
  colors: {
    main: {
      primary_01: palette.yellow as string
    },
    default: {
      white: palette.white as string,
      black: palette.black as string
    },
    background: {
      background: palette.black as string,
      foreground: palette.dark_gray[100]
    },
    typografy: {
      text: palette.black as string,
      title: palette.white as string
    },
    util: {
      hover: palette.dark_gray[50],
      divider: '#000'
    }
  }
}
