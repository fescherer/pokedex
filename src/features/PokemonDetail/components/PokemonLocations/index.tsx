import axios from 'axios'
import { usePokemonDetailContext } from 'context/pokemonDetail.context'
import React from 'react'
import { PokemonEncounterType } from 'types/Pokemon/Location'
import { getTranslationName } from 'util/functions'

export default function PokemonLocations() {
  const { pokemonDetail: pokemon, setPokemonDetail } = usePokemonDetailContext()

  React.useEffect(() => {
    if (!pokemon || pokemon.speciesFullData) return

    axios.get(pokemon.location_area_encounters).then((response) => {
      let locationDataCustom: PokemonEncounterType[] = []
      response.data.map((location: PokemonEncounterType) => {
        if (location?.location_area?.url)
          axios
            .get(location.location_area.url)
            .then((responseLocationDetail) => {
              locationDataCustom = [
                ...locationDataCustom,
                {
                  ...location,
                  version_details: responseLocationDetail.data
                }
              ]
            })
      })

      setPokemonDetail((prev) => {
        if (prev) return { ...prev, location: locationDataCustom }
        else return null
      })
    })
  }, [pokemon, setPokemonDetail])

  console.log(pokemon)

  if (!pokemon || !pokemon.location) return <div>Loading...</div>

  return (
    <div>
      {pokemon?.location.map((location) => (
        <div key={location.location_area.name}>
          <span>
            Localização:
            {
              getTranslationName(
                location.location_area?.location_detail.names,
                'en'
              ).name
            }
          </span>
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
