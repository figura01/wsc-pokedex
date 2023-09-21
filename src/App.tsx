import './App.css'
import React from 'react';
import { PokemonCard } from './components/PokemonCard';

const App:React.FC = () => {
  return <>
    <h1>
      My futur Pokedex app !
    </h1>
    <div>
      <PokemonCard />
    </div>
  </>
}

export default App
