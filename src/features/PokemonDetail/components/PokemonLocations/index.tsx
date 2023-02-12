import axios from 'axios'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import React from 'react'
import { PokemonGamesColor } from 'types/enum/PokemonGamesColor'
import { PokemonEncounterType } from 'types/Pokemon/Location'
import { getRemovedHyphen, getTranslationName } from 'util/functions'
import PokemonLocation from './components/PokemonLocation'
import * as S from './styles'

export default function PokemonLocations() {
  const { pokemonDetail: pokemon } = usePokemonDetailContext()
  const [pokeLocation, setPokeLocation] =
    React.useState<PokemonEncounterType[]>()

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
        .then((data) => {
          console.log(data)
          setPokeLocation(data)
        })
    } catch (err) {
      console.log(err)
    }
  }, [pokemon])

  if (!pokeLocation || !pokemon) return <div>Loading...</div>

  if (pokeLocation.length === 0) return <span>No location found</span>

  return (
    <>
      {pokeLocation.map((location) => (
        <S.LocationCard
          key={location.location_area.name}
          style={{ marginBottom: '1rem' }}
        >
          <S.LocationTitle>{location.location_name}</S.LocationTitle>
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
                  Version: {getRemovedHyphen(version.version.name)}
                </S.TitleGameVersion>

                <S.EnconterContainer>
                  {version.encounter_details.map((encounter, index) => (
                    <S.EnconterCard
                      color={
                        PokemonGamesColor[
                          version.version.name as keyof typeof PokemonGamesColor
                        ]
                      }
                      key={index}
                    >
                      <PokemonLocation location={encounter}></PokemonLocation>
                    </S.EnconterCard>
                  ))}
                </S.EnconterContainer>
              </S.Container>
            ))}
          </S.VersionContainer>
        </S.LocationCard>
      ))}
    </>
  )
}
