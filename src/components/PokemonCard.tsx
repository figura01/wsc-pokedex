import React from "react"
import styles from './PokemonCard.module.css';
export const PokemonCard: React.FC = () => {
    return <figure className={styles["pokemon-card"]}>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur" />
        <figcaption>bulbasaur</figcaption>
    </figure>
}