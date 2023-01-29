import { ThemeConfig } from 'types/theme/Theme'
import { palette } from './palette'

export const DesertTheme: ThemeConfig = {
  colors: {
    main: {
      primary_01: palette.orange[200]
    },
    default: {
      white: palette.white as string,
      black: palette.black as string
    },
    background: {
      background: palette.orange[300],
      foreground: palette.orange[100]
    },
    typografy: {
      text: palette.black as string,
      title: palette.black as string
    },
    util: {
      hover: palette.dark_gray[50],
      divider: '#000'
    }
  }
}
