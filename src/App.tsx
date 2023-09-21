import './App.css'
import React from 'react';
import { PokemonCard } from './components/PokemonCard';
import { Pokemon } from './types/index';
const pokemonList = [
  {
    name: "bulbasaur",
    imgSrc:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
  },
  {
    name: "mew",
  },
];

const App:React.FC = () => {
  return <>
    <h1>
      My futur Pokedex app !
    </h1>
    <div>
      { pokemonList.map(
        (p: Pokemon, i: number) => <PokemonCard key={`pokemon_${i}`} pokemon={p} />
      )}
    </div>
  </>
}

export default App
