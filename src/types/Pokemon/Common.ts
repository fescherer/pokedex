import { MachineType } from './Machine'

export type NamedAPIType = {
  name: string
  url: string
}

export type VersionGameType = {
  game_index: number
  version: NamedAPIType
}

export type PokemonHeldItemType = {
  item: NamedAPIType
  version_details: PokemonHeldItemVersionType
}

export type PokemonHeldItemVersionType = {
  version: NamedAPIType
  rarity: number
}

export type APIResourceType = {
  url: string
}

export type NamesType = {
  name: string
  language: NamedAPIType
}

export type FlavorTextType = {
  flavor_text: string
  language: NamedAPIType
  version: NamedAPIType
}

export type DescriptionType = {
  description: string
  language: NamedAPIType
}

export type VerboseEffectType = {
  effect: string
  short_effect: string
  language: NamedAPIType
}

export type VersionGroupFlavorTextType = {
  text: string
  language: NamedAPIType
  version_group: NamedAPIType
}

export type MachineVersionDetailType = {
  machine: MachineType
  version_group: NamedAPIType
}
