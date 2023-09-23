import React, { useState } from 'react';
import { PokemonCard } from './components/PokemonCard';
import styles from './App.module.css';

const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];


const App:React.FC = () => {
  const [pokemonIndex, setPokemonIndex] = useState(0);
  return <div className={styles.app}>
    <h1>
      My futur Pokedex app !
    </h1>
    <div className={styles.container}>
      <button disabled={pokemonIndex < 1} onClick={() => setPokemonIndex(pokemonIndex-1)}>Précédent</button>
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <button disabled={pokemonIndex >= pokemonList.length-1}onClick={() => setPokemonIndex(pokemonIndex+1)}>Suivant</button>
    </div>
  </div>
}

export default App
