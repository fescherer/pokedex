import { ThemeConfig } from 'types/theme/Theme'
import { palette } from './palette'

export const LightTheme: ThemeConfig = {
  colors: {
    main: {
      primary_01: palette.blue[50],
      pokemon: palette.red[400]
    },
    default: {
      white: palette.white as string,
      black: palette.black as string
    },
    background: {
      background: palette.gray[800],
      foreground: palette.white as string
    },
    typografy: {
      text: palette.white as string,
      title: palette.black as string
    },
    util: {
      hover: palette.gray[100],
      divider: '#000'
    }
  }
}
