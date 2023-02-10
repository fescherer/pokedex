import axios from 'axios'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import React from 'react'
import { PokemonGamesColor } from 'types/enum/PokemonGamesColor'
import { PokemonTypeColors } from 'types/enum/PokemonTypeColors'
import { PokemonEncounterType } from 'types/Pokemon/Location'
import { getRemovedHyphen, getTranslationName } from 'util/functions'
import PokemonLocation from './components/PokemonLocation'
import * as S from './styles'

export default function PokemonLocations() {
  const { pokemonDetail: pokemon } = usePokemonDetailContext()
  const [pokeLocation, setPokeLocation] = React.useState<
    PokemonEncounterType[]
  >([])

  React.useEffect(() => {
    if (!pokemon) return

    try {
      axios
        .get(pokemon.location_area_encounters)
        .then(async (response) => {
          const data = response.data.map(
            async (location: PokemonEncounterType) => {
              const data = await axios.get(location.location_area.url)
              const name = getTranslationName(data.data.names, 'en')
              return { ...location, location_name: name.name }
            }
          )
          return await Promise.all(data)
        })
        .then((data) => setPokeLocation(data))
    } catch (err) {
      console.log(err)
    }
  }, [pokemon])

  if (!pokeLocation || !pokemon) return <div>Loading...</div>

  const pokemonColor =
    PokemonTypeColors[
      pokemon.types[0].type.name as keyof typeof PokemonTypeColors
    ]

  return (
    <div>
      {pokeLocation.map((location) => (
        <S.LocationCard
          key={location.location_area.name}
          style={{ marginBottom: '1rem' }}
        >
          <S.LocationTitle>{location.location_area.name}</S.LocationTitle>
          <S.VersionContainer>
            {location.version_details.map((version, versionIndex) => (
              <S.Container
                key={version.version.name}
                hasDivider={versionIndex < location.version_details.length - 1}
              >
                <S.TitleGameVersion
                  color={
                    PokemonGamesColor[
                      version.version.name as keyof typeof PokemonGamesColor
                    ]
                  }
                >
                  Versão: {getRemovedHyphen(version.version.name)}
                </S.TitleGameVersion>

                <S.EnconterContainer>
                  {version.encounter_details.map((encounter, index) => (
                    <S.EnconterCard color={pokemonColor} key={index}>
                      <PokemonLocation location={encounter}></PokemonLocation>
                    </S.EnconterCard>
                  ))}
                </S.EnconterContainer>
              </S.Container>
            ))}
          </S.VersionContainer>
        </S.LocationCard>
      ))}
    </div>
  )
}
