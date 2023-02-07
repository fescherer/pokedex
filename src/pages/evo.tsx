import axios from 'axios'
import { Pokedex } from 'features/Pokedex'
import Image from 'next/image'
import React from 'react'
import { PokemonSpritesType } from 'types/Pokemon/Pokemon'

type PokeEvo = {
  name: string
  sprites: PokemonSpritesType
}

export default function Evo() {
  // return <Pokedex />

  // [[{phase1}], [{phase2}], [{phase3}, {phase3}]]
  // {name: string, sprites: sprites[], method, level}

  const [pokeEvo, setPokeEvo] = React.useState<any>()

  // function getPokemonData(url: string) {
  //   axios.get(url).then((response) => response.data)
  // }

  React.useEffect(() => {
    axios
      .get('https://pokeapi.co/api/v2/pokemon-species/eevee/')
      .then((response) => {
        axios.get(response.data.evolution_chain.url).then((chain) => {
          setPokeEvo(chain.data.chain)
        })
      })
  }, [])

  console.log(pokeEvo)

  function getID(url: string) {
    const urlSplitted = url.split('/')
    return urlSplitted[urlSplitted.length - 2]
  }

  if (!pokeEvo) return <div>Loading...</div>

  return (
    <div>
      <span>dsadasd</span>
      <Image
        src="https://user-images.githubusercontent.com/62115215/216988708-f30e2c75-66d2-43a1-b3ce-d0a2a86bba7f.jpg"
        alt={''}
        title={''}
        width={173}
        height={27}
        priority
      />

      <div style={{ display: 'flex', gap: '1rem' }}>
        <div>
          {' 1 '}
          {pokeEvo.species?.name}
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getID(
              pokeEvo.species?.url
            )}.png`}
            width={96}
            height={96}
            alt=""
          />
        </div>
        {pokeEvo.evolves_to?.map((phase2) => {
          return (
            <div key={phase2.species.name}>
              {' 2 --> '}
              {phase2.evolution_details.map((evoDetail, index) => (
                <div
                  key={index}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem'
                  }}
                >
                  {evoDetail.gender && <span>{evoDetail.gender}</span>}
                  {evoDetail.held_item && (
                    <span> {evoDetail.held_item.name}</span>
                  )}
                  {evoDetail.item && <span>{evoDetail.item.name}</span>}
                  {evoDetail.known_move_type && (
                    <span>{evoDetail.known_move_type.name}</span>
                  )}
                  {evoDetail.known_move && (
                    <span> {evoDetail.known_move.name}</span>
                  )}
                  {evoDetail.location && (
                    <span> {evoDetail.location.name}</span>
                  )}

                  {evoDetail.min_affection && (
                    <span>{evoDetail.min_affection}</span>
                  )}

                  {evoDetail.min_beauty && <span>{evoDetail.min_beauty}</span>}

                  {evoDetail.min_happiness && (
                    <span>{evoDetail.min_happiness}</span>
                  )}

                  {evoDetail.min_level && <span>{evoDetail.min_level}</span>}

                  {evoDetail.needs_overworld_rain && (
                    <span>{evoDetail.needs_overworld_rain}</span>
                  )}

                  {evoDetail.party_species && (
                    <span>{evoDetail.party_species}</span>
                  )}

                  {evoDetail.party_type && <span> {evoDetail.party_type}</span>}

                  {evoDetail.relative_physical_stats && (
                    <span> {evoDetail.relative_physical_stats} </span>
                  )}

                  {evoDetail.time_of_day && (
                    <span>{evoDetail.time_of_day}</span>
                  )}

                  {evoDetail.trade_species && (
                    <span>{evoDetail.trade_species} </span>
                  )}

                  {evoDetail.trigger && <span>{evoDetail.trigger.name}</span>}

                  {evoDetail.turn_upside_down && (
                    <span> {evoDetail.turn_upside_down} </span>
                  )}
                </div>
              ))}
              {phase2.species.name}
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getID(
                  phase2.species?.url
                )}.png`}
                width={96}
                height={96}
                alt=""
              />
            </div>
          )
        })}
        {pokeEvo.evolves_to?.map((phase2) => {
          return phase2.evolves_to?.map((phase3) => {
            return (
              <div key={phase3.species.name}>
                {' 3 --> '}

                {phase3.evolution_details.map((evoDetail, index) => (
                  <div
                    key={index}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '1rem'
                    }}
                  >
                    {evoDetail.gender && <span>{evoDetail.gender}</span>}
                    {evoDetail.held_item && (
                      <span> {evoDetail.held_item.name}</span>
                    )}
                    {evoDetail.item && <span>{evoDetail.item.name}</span>}
                    {evoDetail.known_move && (
                      <span> {evoDetail.known_move.name}</span>
                    )}
                    {evoDetail.known_move_type && (
                      <span>{evoDetail.known_move_type.name}</span>
                    )}
                    {evoDetail.location && (
                      <span> {evoDetail.location.name}</span>
                    )}

                    {evoDetail.min_affection && (
                      <span>{evoDetail.min_affection}</span>
                    )}

                    {evoDetail.min_beauty && (
                      <span>{evoDetail.min_beauty}</span>
                    )}

                    {evoDetail.min_happiness && (
                      <span>{evoDetail.min_happiness}</span>
                    )}

                    {evoDetail.min_level && <span>{evoDetail.min_level}</span>}

                    {evoDetail.needs_overworld_rain && (
                      <span>{evoDetail.needs_overworld_rain}</span>
                    )}

                    {evoDetail.party_species && (
                      <span>{evoDetail.party_species}</span>
                    )}

                    {evoDetail.party_type && (
                      <span> {evoDetail.party_type}</span>
                    )}

                    {evoDetail.relative_physical_stats && (
                      <span> {evoDetail.relative_physical_stats} </span>
                    )}

                    {evoDetail.time_of_day && (
                      <span>{evoDetail.time_of_day}</span>
                    )}

                    {evoDetail.trade_species && (
                      <span>{evoDetail.trade_species} </span>
                    )}

                    {evoDetail.trigger && <span>{evoDetail.trigger.name}</span>}

                    {evoDetail.turn_upside_down && (
                      <span> {evoDetail.turn_upside_down} </span>
                    )}
                  </div>
                ))}

                {phase3.species.name}
                <Image
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${getID(
                    phase3.species?.url
                  )}.png`}
                  width={96}
                  height={96}
                  alt=""
                />
              </div>
            )
          })
        })}
      </div>
    </div>
  )
}
