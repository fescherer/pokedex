import {
  APIResourceType,
  DescriptionType,
  FlavorTextType,
  NamedAPIType,
  NamesType
} from './Common'

export type PokemonSpeciesFullDataType = {
  id: number
  name: string
  order: number
  gender_rate: number
  capture_rate: number
  base_happiness: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  hatch_counter: number
  has_gender_differences: boolean
  forms_switchable: boolean
  growth_rate: NamedAPIType
  pokedex_numbers: PokedexNumbersType[]
  egg_groups: NamedAPIType[]
  color: NamedAPIType
  shape: NamedAPIType
  evolves_from_species: NamedAPIType
  evolution_chain: APIResourceType
  habitat: NamedAPIType
  generation: NamedAPIType
  names: NamesType[]
  pal_park_encounters: PalParkEncounterAreaType[]
  flavor_text_entries: FlavorTextType[]
  form_descriptions: DescriptionType[]
  genera: GenusType[]
  varieties: PokemonSpeciesVarietyType[]
}

export type PokedexNumbersType = {
  entry_number: number
  pokedex: NamedAPIType
}

export type PalParkEncounterAreaType = {
  base_score: number
  rate: number
  area: NamedAPIType
}

export type GenusType = {
  genus: string
  language: NamedAPIType
}

export type PokemonSpeciesVarietyType = {
  is_default: boolean
  pokemon: NamedAPIType
}
