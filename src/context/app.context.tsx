import { Children } from 'types/Global'
import { PokemonDetailProvider } from './pokemonDetail.context'
import { SearchProvider } from './searchInput.contex'
import { ThemeProvider } from './theme.context'

export default function AppContextProvider({ children }: Children) {
  const components: Array<
    | React.JSXElementConstructor<React.PropsWithChildren<unknown>>
    | (({ children }: Children) => JSX.Element)
  > = [ThemeProvider, SearchProvider, PokemonDetailProvider]

  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>
      }, children)}
    </>
  )
}
