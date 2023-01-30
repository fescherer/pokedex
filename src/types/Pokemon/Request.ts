import { NamedAPIType } from './Common'

export type PokemonRequest = {
  count: number
  next: string
  previous: string
  results: NamedAPIType[]
}
