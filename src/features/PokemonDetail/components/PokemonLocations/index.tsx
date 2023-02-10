import axios from 'axios'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import React from 'react'
import { PokemonTypeColors } from 'types/enum/PokemonTypeColors'
import { PokemonEncounterType } from 'types/Pokemon/Location'
import PokemonLocation from './components/PokemonLocation'
import * as S from './styles'

export default function PokemonLocations() {
  const { pokemonDetail: pokemon } = usePokemonDetailContext()
  const [pokeLocation, setPokeLocation] = React.useState<
    PokemonEncounterType[]
  >([])

  React.useEffect(() => {
    if (!pokemon) return

    axios.get(pokemon.location_area_encounters).then((response) => {
      setPokeLocation(response.data)
    })
  }, [pokemon])

  if (!pokeLocation || !pokemon) return <div>Loading...</div>

  const pokemonColor =
    PokemonTypeColors[
      pokemon.types[0].type.name as keyof typeof PokemonTypeColors
    ]

  // React.useEffect(() => {
  //   if (!pokemon || pokemon.location) return

  //   const getPokemonLocations = async () => {
  //     const pokemonEncountersResponse = await axios.get(
  //       pokemon.location_area_encounters
  //     )
  //     const pokemonEncounters = pokemonEncountersResponse.data
  //     const locationNames = pokemonEncounters.map(
  //       (encounter: PokemonEncounterType) =>
  //         encounter.location_area.name.replace(/-/g, ' ')
  //     )

  //     setPokemonDetail((prev) => {
  //       if (prev) return { ...prev, location: pokemonEncounters }
  //       else return null
  //     })
  //   }

  //   getPokemonLocations()
  // }, [pokemon, setPokemonDetail])

  // console.log(pokemon)
  console.log(pokeLocation)

  return (
    <div>
      {pokeLocation.map((location) => (
        <S.LocationCard
          key={location.location_area.name}
          style={{ marginBottom: '1rem' }}
        >
          {/* <span>
            Localização:
            {
              getTranslationName(
                location.location_area?.location_detail.names,
                'en'
              ).name
            }
          </span> */}

          <S.LocationTitle>{location.location_area.name}</S.LocationTitle>
          <S.VersionContainer>
            {location.version_details.map((version, versionIndex) => (
              <S.Container
                key={version.version.name}
                hasDivider={versionIndex < location.version_details.length - 1}
              >
                <S.TitleGameVersion>
                  Versão: {version.version.name}
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
