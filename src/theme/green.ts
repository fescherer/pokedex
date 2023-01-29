import { ThemeConfig } from 'types/theme/Theme'
import { palette } from './palette'

export const GreenTheme: ThemeConfig = {
  colors: {
    main: {
      primary_01: palette.green[50]
    },
    default: {
      white: palette.white as string,
      black: palette.black as string
    },
    background: {
      background: palette.green[100],
      foreground: palette.green[200]
    },
    typografy: {
      text: palette.white as string,
      title: palette.white as string
    },
    util: {
      hover: palette.gray[100],
      divider: '#000'
    }
  }
}
