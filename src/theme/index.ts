import { Theme } from 'types/theme/Theme'
import { DarkTheme } from './dark'
import { DesertTheme } from './desert'
import { GreenTheme } from './green'
import { LightTheme } from './light'

export const theme: Theme = {
  light: LightTheme,
  dark: DarkTheme,
  green: GreenTheme,
  desert: DesertTheme
}
