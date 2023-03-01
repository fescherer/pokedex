import React from 'react'
import { Children } from 'types/Global'

type SearchContextType = {
  search: string
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

export const SearchContext = React.createContext<SearchContextType>({
  search: '',
  setSearch: () => undefined
})

export const SearchProvider = ({ children }: Children) => {
  const [search, setSearch] = React.useState<string>('')

  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  )
}

export const useSearchContext = () => React.useContext(SearchContext)
