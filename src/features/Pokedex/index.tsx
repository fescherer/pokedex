import { PokemonCard } from './components/PokemonCard'
import * as Dialog from '@radix-ui/react-dialog'
import * as S from './styles'
import { PokemonDetail } from 'features/PokemonDetail'

const pokeMocked = [
  {
    name: 'Bulbasaur',
    number: 1,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
    gif: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/6.gif'
  },
  {
    name: 'Bedril',
    number: 15,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png'
  },
  {
    name: 'Pidgeotto',
    number: 17,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png'
  },
  {
    name: 'Palkia Origin',
    number: 10246,
    image:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10246.png'
  }
]

export function Pokedex() {
  return (
    <S.Wrapper>
      <Dialog.Root>
        <S.Container>
          {pokeMocked.map((poke) => (
            <PokemonCard
              key={poke.name}
              image={poke.image}
              name={poke.name}
              no={poke.number}
              gif={poke?.gif}
            />
          ))}
        </S.Container>
        <Dialog.Portal>
          <S.DialogOverlay />
          <S.PokeDialog>
            <Dialog.Title>Oba oba</Dialog.Title>
            <Dialog.Description />
            <PokemonDetail />
            <Dialog.Close />
          </S.PokeDialog>
        </Dialog.Portal>
      </Dialog.Root>
    </S.Wrapper>
  )
}
