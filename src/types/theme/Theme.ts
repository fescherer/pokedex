export type Theme = {
  dark: ThemeConfig
  light: ThemeConfig
  green: ThemeConfig
  desert: ThemeConfig
}

export type Colors = {
  main: {
    primary_01: string
  }
  default: {
    white: string
    black: string
  }
  background: {
    background: string
    foreground: string
  }
  typografy: {
    text: string
    title: string
  }
  util: {
    hover: string
    divider: string
  }
}

export type ThemeConfig = {
  colors: Colors
}
export type ColorValue = Record<number | string, string>

export type ColorPalette = Record<string, ColorValue | string>
