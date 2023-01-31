import React from 'react'
import { Children } from 'types/Global'
import { PokemonType } from 'types/Pokemon/Pokemon'

type PokemonDetailContextType = {
  pokemonDetail: PokemonType | null
  setPokemonDetail: React.Dispatch<React.SetStateAction<PokemonType | null>>
}

export const PokemonDetailContext =
  React.createContext<PokemonDetailContextType>({
    pokemonDetail: null,
    setPokemonDetail: () => undefined
  })

export const PokemonDetailProvider = ({ children }: Children) => {
  const [pokemonDetail, setPokemonDetail] = React.useState<PokemonType | null>(
    null
  )

  return (
    <PokemonDetailContext.Provider value={{ pokemonDetail, setPokemonDetail }}>
      {children}
    </PokemonDetailContext.Provider>
  )
}

export const usePokemonDetailContext = () =>
  React.useContext(PokemonDetailContext)
