import { NamedAPIType } from './Common'

export type LocationType = {
  id: number
  name: string
  region: NamedAPIType
  names: NamesType[]
  game_indices: GenerationGameIndexType[]
  areas: NamedAPIType
}

export type NamesType = {
  name: string
  language: NamedAPIType
}

export type GenerationGameIndexType = {
  game_index: number
  generation: NamedAPIType
}

export type LocationAreaType = {
  id: number
  name: string
  game_index: number
  encounter_method_rates: EncounterMethodRateType[]
  location: NamedAPIType
  names: NamesType[]
  pokemon_encounters: PokemonEncounterType[]
}

export type EncounterMethodRateType = {
  encounter_method: NamedAPIType
  version_details: EncounterVersionDetailsType[]
}

export type EncounterVersionDetailsType = {
  rate: number
  version: NamedAPIType
}

export type PokemonEncounterType = {
  pokemon: NamedAPIType
  version_details: VersionEncounterDetailType[]
}

export type VersionEncounterDetailType = {
  version: NamedAPIType
  max_chance: number
  encounter_details: EncounterType[]
}

export type EncounterType = {
  min_level: number
  max_level: number
  condition_values: NamedAPIType
  chance: number
  method: NamedAPIType
}
