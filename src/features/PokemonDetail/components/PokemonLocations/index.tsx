import axios from 'axios'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import React from 'react'
import { PokemonEncounterType } from 'types/Pokemon/Location'
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

  if (!pokeLocation) return <div>Loading...</div>

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
            {location.version_details.map((version) => (
              <div key={version.version.name}>
                <>
                  <S.TitleGameVersion>
                    Versão: {version.version.name}
                  </S.TitleGameVersion>

                  <S.EnconterContainer>
                    {version.encounter_details.map((encounter, index) => (
                      <S.EnconterCard key={index}>
                        <span>{`${encounter.method.name}`}</span>
                        <span>{`${encounter.chance}%`}</span>
                        <span>{`LV. (${encounter.min_level}-${encounter.max_level})`}</span>

                        {encounter.condition_values.length !== 0 && (
                          <div>
                            {encounter.condition_values.map((conditional) => (
                              <span key={conditional.name}>
                                {conditional.name}
                              </span>
                            ))}
                          </div>
                        )}
                      </S.EnconterCard>
                    ))}
                  </S.EnconterContainer>
                </>

                <div
                  style={{
                    backgroundColor: 'red',
                    width: '100%',
                    height: '1px'
                  }}
                ></div>
              </div>
            ))}
          </S.VersionContainer>
        </S.LocationCard>
      ))}
    </div>
  )
}
