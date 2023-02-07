import {
  MachineVersionDetailType,
  NamedAPIType,
  NamesType,
  VerboseEffectType,
  VersionGroupFlavorTextType
} from './Common'
import { EvolutionChainType } from './Evolution'
import { GenerationGameIndexType } from './Location'

export type ItemType = {
  id: number
  name: string
  cost: number
  fling_power: number
  fling_effect: NamedAPIType
  attributes: NamedAPIType[]
  category: NamedAPIType
  effect_entries: VerboseEffectType[]
  flavor_text_: VersionGroupFlavorTextType[]
  game_indices: GenerationGameIndexType[]
  names: NamesType[]
  sprites: ItemSpritesType
  held_by_pokemon: ItemHolderPokemonType[]
  baby_trigger_for: EvolutionChainType
  machines: MachineVersionDetailType[]
}

export type ItemSpritesType = {
  default: string
}

export type ItemHolderPokemonType = {
  pokemon: NamedAPIType
  version_details: ItemHolderPokemonVersionDetailType[]
}

export type ItemHolderPokemonVersionDetailType = {
  rarity: number
  version: NamedAPIType
}
