import { Children } from 'types/Global'
import { ThemeProvider } from './theme.context'

export default function AppContextProvider({ children }: Children) {
  const components: Array<
    | React.JSXElementConstructor<React.PropsWithChildren<unknown>>
    | (({ children }: Children) => JSX.Element)
  > = [ThemeProvider]

  return (
    <>
      {components.reduceRight((acc, Comp) => {
        return <Comp>{acc}</Comp>
      }, children)}
    </>
  )
}
