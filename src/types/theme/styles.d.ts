import 'styled-components'
import { AssetsTheme, Colors, Spacements, Typography } from './Theme'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: Colors
    spacements?: Spacements
    typography?: Typography
    assets?: AssetsTheme
  }
}
