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
