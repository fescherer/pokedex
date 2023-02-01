import { NamedAPIType } from './Common'

export type EvolutionChainType = {
  id: number
  baby_trigger_item: NamedAPIType
  chain: ChainLinkType
}

export type ChainLinkType = {
  is_baby: boolean
  species: NamedAPIType
  evolution_details: EvolutionDetailType[]
  evolves_to: ChainLinkType[]
}

export type EvolutionDetailType = {
  item: NamedAPIType
  trigger: NamedAPIType
  gender: number
  held_item: NamedAPIType
  known_move: NamedAPIType
  known_move_type: NamedAPIType
  location: NamedAPIType
  min_level: number
  min_happiness: number
  min_beauty: number
  min_affection: number
  needs_overworld_rain: boolean
  party_species: NamedAPIType
  party_type: NamedAPIType
  relative_physical_stats: number
  time_of_day: string
  trade_species: NamedAPIType
  turn_upside_down: boolean
}
