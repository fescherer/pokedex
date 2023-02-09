import axios from 'axios'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import React from 'react'
import { PokemonEncounterType } from 'types/Pokemon/Location'

export default function PokemonLocations() {
  const { pokemonDetail: pokemon, setPokemonDetail } = usePokemonDetailContext()
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
        <div key={location.location_area.name} style={{ marginBottom: '1rem' }}>
          {/* <span>
            Localização:
            {
              getTranslationName(
                location.location_area?.location_detail.names,
                'en'
              ).name
            }
          </span> */}

          <span>{location.location_area.name}</span>
          <span>
            {location.version_details.map((version) => (
              <div key={version.version.name}>
                <span>Versão: {version.version.name}</span>
                <div>
                  <span>Modos de encontro: </span>
                  {version.encounter_details.map((encounter, index) => (
                    <div key={index}>
                      {encounter.condition_values.length !== 0 && (
                        <div>
                          {encounter.condition_values.map((conditional) => (
                            <span key={conditional.name}>
                              {conditional.name}
                            </span>
                          ))}
                        </div>
                      )}

                      <span>{`Chance: ${encounter.chance}%`}</span>

                      <span>{`Min: ${encounter.min_level} x Máx: ${encounter.max_level}`}</span>

                      <span>{`Método: ${encounter.method.name}`}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </span>
        </div>
      ))}
    </div>
  )
}
