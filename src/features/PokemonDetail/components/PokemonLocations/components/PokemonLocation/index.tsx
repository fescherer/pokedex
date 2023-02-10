import axios from 'axios'
import Image from 'next/image'
import React from 'react'
import { EncounterType } from 'types/Pokemon/Location'
import { getTranslationName } from 'util/functions'
import * as S from './styles'

type PokemonLocationTypeProps = {
  location: EncounterType
}

export default function PokemonLocation({
  location
}: PokemonLocationTypeProps) {
  const [locationName, setLocationName] = React.useState<string>('')

  React.useEffect(() => {
    axios.get(location.method.url).then((response) => {
      const name = getTranslationName(response.data.names, 'en')
      setLocationName(name.name)
    })
  }, [location.method.url])

  return (
    <S.Container>
      <S.EncounterTitle>{`${locationName}`}</S.EncounterTitle>
      <S.PercentageContainer>
        <Image
          src="https://user-images.githubusercontent.com/62115215/217970351-e6a229f7-24fa-4e09-9caf-00879d294a83.png"
          width={16}
          height={16}
          alt={locationName}
          title={locationName}
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
