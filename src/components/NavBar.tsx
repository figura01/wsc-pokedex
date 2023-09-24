import React from "react";
import { Pokemon } from "../types";
import styles from "./NavBar.module.css";

export const NavBar:React.FC<{
    handleSetIndex: (i: number) => void,
    pokemonList: Pokemon[]
}> = (
    { pokemonList, handleSetIndex }) => {
    return <nav className={styles.navbar}>
        {pokemonList.map((p:Pokemon, i:number) => 
            <button className={styles.button} key={`button-${i}`} onClick={() => handleSetIndex(i)}>{p.name}</button>
        )}
    </nav>
}