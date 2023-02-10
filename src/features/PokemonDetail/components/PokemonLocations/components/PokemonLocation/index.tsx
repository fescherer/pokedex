import Image from 'next/image'
import { EncounterType } from 'types/Pokemon/Location'
import * as S from './styles'

type PokemonLocationTypeProps = {
  location: EncounterType
}

export default function PokemonLocation({
  location
}: PokemonLocationTypeProps) {
  return (
    <S.Container>
      <S.EncounterTitle>{`${location.method.name}`}</S.EncounterTitle>
      <S.PercentageContainer>
        <Image
          src="https://user-images.githubusercontent.com/62115215/217970351-e6a229f7-24fa-4e09-9caf-00879d294a83.png"
          width={16}
          height={16}
          alt={location.method.name}
          title={location.method.name}
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
