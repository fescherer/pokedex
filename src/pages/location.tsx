import axios from 'axios'
import React from 'react'

export default function Location() {
  const [pokeLocation, setPokeLocation] = React.useState<any>()

  React.useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon/caterpie/')
      .then((response) => {
        axios.get(response.data.location_area_encounters).then((data) => {
          setPokeLocation(data.data)
        })
      })
  }, [])

  function getLocationNames(name: string) {
    return name.replaceAll('-', ' ')
  }

  console.log(pokeLocation)

  if (!pokeLocation) return <div>Loading...</div>

  return (
    <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
      {pokeLocation.map((location) => (
        <div
          key={location.location_area.name}
          style={{
            textTransform: 'capitalize',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.25rem'
          }}
        >
          <span>{getLocationNames(location.location_area.name)}</span>
          <div>
            {location.version_details.map((version, index) => (
              <div key={index}>
                <span>{`${version.version.name}:`}</span>
                <div>
                  {version.encounter_details.map((detail, index2) => (
                    <div
                      key={index2}
                      style={{ display: 'flex', gap: '0.25rem' }}
                    >
                      <span>{detail.chance}%</span>
                      <span>
                        LV.{detail.min_level}-{detail.max_level}
                      </span>
                      <span>{detail.method.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
