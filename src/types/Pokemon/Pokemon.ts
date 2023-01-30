import { NamedAPIType, PokemonHeldItemType, VersionGameType } from './Common'

export type PokemonType = {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: PokemonAbilityType[]
  forms: NamedAPIType[]
  game_indices: VersionGameType[]
  held_items: PokemonHeldItemType[]
  location_area_encounters: string
  moves: PokemonMoveType[]
  past_types: PokemonTypePastType[]
  sprites: PokemonSpritesType | any
  species: NamedAPIType
  stats: PokemonStatType[]
  types: PokemonTypeType[]
}

export type PokemonAbilityType = {
  is_hidden: boolean
  slot: number
  ability: NamedAPIType
}

export type PokemonMoveType = {
  move: NamedAPIType
  version_group_details: PokemonMoveVersionType
}

export type PokemonMoveVersionType = {
  move_learn_method: NamedAPIType
  version_group: NamedAPIType
  level_learned_at: number
}

export type PokemonTypePastType = {
  generation: NamedAPIType
  types: PokemonTypeType
}

export type PokemonTypeType = {
  slot: number
  type: NamedAPIType
}

export type PokemonSpritesType = {
  front_default: string
  front_shiny: string
  front_female: string
  front_shiny_female: string
  back_default: string
  back_shiny: string
  back_female: string
  back_shiny_female: string
}

export type PokemonStatType = {
  stat: NamedAPIType
  effort: number
  base_stat: number
}
