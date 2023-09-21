import styles from './PokemonCard.module.css';
export const PokemonCard = () => {
    return <figure className={styles["pokemon-card"]}>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png" alt="bulbasaur" />
        <figcaption>bulbasaur</figcaption>
    </figure>
}