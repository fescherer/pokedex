export type PokemonStatType =
  | 'hp'
  | 'attack'
  | 'defense'
  | 'special-attack'
  | 'special-defense'
  | 'speed'

export enum PokemonStatEnum {
  hp = 'HP',
  attack = 'ATK',
  defense = 'DEF',
  'special-attack' = 'SP.ATK',
  'special-defense' = 'SP.DEF',
  speed = 'SPD',
  total = 'Total'
}
