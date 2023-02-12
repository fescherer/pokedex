import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { PokemonLocationMethodsImageURL } from 'types/enum/PokemonLocationMethods'
import { EncounterType } from 'types/Pokemon/Location'
import { getTranslationName } from 'util/functions'
import * as S from './styles'

type PokemonLocationTypeProps = {
  location: EncounterType
}

export default function PokemonLocation({
  location
}: PokemonLocationTypeProps) {
  const [locationName, setLocationName] = React.useState<{
    name: string
    type: string
  }>()

  React.useEffect(() => {
    if (!location.method.url) return
    else
      axios.get(location.method.url).then((response) => {
        const name = getTranslationName(response.data.names, 'en')
        setLocationName({ name: name.name, type: response.data.name })
      })
  }, [location.method.url])

  if (!locationName) return <div>Loading...</div>

  return (
    <S.Container>
      <S.EncounterTitle>{`${locationName.name}`}</S.EncounterTitle>
      <S.PercentageContainer>
        <Image
          src={
            PokemonLocationMethodsImageURL[
              locationName.type as keyof typeof PokemonLocationMethodsImageURL
            ]
          }
          width={16}
          height={16}
          alt={locationName.name}
          title={locationName.name}
        />

        <span>{`(${location.chance}%)`}</span>
      </S.PercentageContainer>
      <S.EncounterLevel>{`LV. (${location.min_level}-${location.max_level})`}</S.EncounterLevel>

      {location.condition_values.length !== 0 && (
        <S.ConditionalEncounterContainer>
          {location.condition_values.map((conditional) => (
            <span key={conditional.name}>{`(${conditional.name})`}</span>
          ))}
        </S.ConditionalEncounterContainer>
      )}
    </S.Container>
  )
}
