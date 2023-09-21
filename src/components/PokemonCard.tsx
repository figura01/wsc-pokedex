import React from "react"
import styles from './PokemonCard.module.css';
import { Pokemon } from "../types";

export const PokemonCard: React.FC<{pokemon: Pokemon}> = ({pokemon}) => {
    
    // const pokemon2 = pokemonList[1]
    return <figure className={styles["pokemon-card"]}>
        {pokemon?.imgSrc ? <img src={pokemon?.imgSrc} alt={pokemon?.name ? pokemon?.name : "???"} /> : "???"}
        {pokemon?.name ? <figcaption>{pokemon?.name}</figcaption> : <p>???</p>}
    </figure>
}
       