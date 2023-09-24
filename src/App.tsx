import React, { useState } from 'react';
import { NavBar } from './components/NavBar';
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
  const [pokemonIndex, setPokemonIndex] = useState<number>(0);
  const handleSetIndex = (currentIndex: number) => {
    setPokemonIndex(currentIndex)
  }
  return <div className={styles.app}>
    <h1>
      My futur Pokedex app !
    </h1>
    <div className={styles.container}>
      
      <PokemonCard pokemon={pokemonList[pokemonIndex]} />
      <NavBar pokemonList={pokemonList} handleSetIndex={handleSetIndex}/>
    </div>
  </div>
}

export default App
