import React from "react"
import styles from './PokemonCard.module.css';
type Pokemon = {
    name?: string,
    imgSrc?: string;
}

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

export const PokemonCard: React.FC = () => {
    const pokemon:Pokemon = pokemonList[1]
    // const pokemon2 = pokemonList[1]
    return <figure className={styles["pokemon-card"]}>
        {pokemon?.imgSrc ? <img src={pokemon.imgSrc} alt={pokemon?.name ? pokemon.name : "???"} /> : "???"}
        {pokemon?.name ? <figcaption>{pokemon.name}</figcaption> : <p>???</p>}
    </figure>
}
       