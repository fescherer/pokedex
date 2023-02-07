import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { EvolutionDetailType } from 'types/Pokemon/Evolution'
import { ItemType } from 'types/Pokemon/Item'
import * as S from './styles'

type PokemonDetailEvolutionProps = {
  data: EvolutionDetailType
}

export default function PokemonDetailEvolution({
  data
}: PokemonDetailEvolutionProps) {
  const [itemSpriteHeld, setItemSpriteHeld] = React.useState<ItemType | null>(
    null
  )
  const [itemSprite, setItemSprite] = React.useState<ItemType | null>(null)

  React.useEffect(() => {
    if (data?.item)
      axios
        .get(data?.item?.url)
        .then((response) => setItemSprite(response.data))

    if (data?.held_item)
      axios
        .get(data?.held_item?.url)
        .then((response) => setItemSpriteHeld(response.data))
  }, [data])

  return (
    <S.EvolutionIndicator>
      {data.gender && <span>{data.gender}</span>}
      {data.held_item && itemSpriteHeld && (
        <Image
          src={itemSpriteHeld.sprites.default}
          width={30}
          height={30}
          alt={itemSpriteHeld.name}
          title={data.held_item.name}
        />
      )}
      {data.item && itemSprite && (
        <Image
          src={itemSprite.sprites.default}
          width={30}
          height={30}
          alt={itemSprite.name}
          title={data.item.name}
        />
      )}
      {data.known_move && <span> {data.known_move.name}</span>}
      {data.known_move_type && <span>{data.known_move_type.name}</span>}
      {data.location && <span> {data.location.name}</span>}

      {data.min_affection && <span>{data.min_affection}</span>}

      {data.min_beauty && <span>{data.min_beauty}</span>}

      {data.min_happiness && <span>{data.min_happiness}</span>}

      {data.min_level && <span>{data.min_level}</span>}

      {data.needs_overworld_rain && <span>{data.needs_overworld_rain}</span>}

      {/* {data.party_species && <span>{data.party_species}</span>} */}

      {/* {data.party_type && <span> {data.party_type}</span>} */}

      {data.relative_physical_stats && (
        <span> {data.relative_physical_stats} </span>
      )}

      {data.time_of_day && <span>{data.time_of_day}</span>}

      {/* {data.trade_species && <span>{data.trade_species} </span>} */}

      {data.trigger && <span>{data.trigger.name}</span>}

      {data.turn_upside_down && <span> {data.turn_upside_down} </span>}
    </S.EvolutionIndicator>
  )
}
