import React from "react";
export const NavBar:React.FC<{
    handleIncrement:() => void, 
    handleDecrement:() => void, 
    pokemonIndex:number, 
    pokemonListLength: number
}> = (
    { handleIncrement, handleDecrement, pokemonListLength, pokemonIndex}) => {
    return <nav>
        <button disabled={pokemonIndex < 1} onClick={() => handleDecrement()}>Précédent</button>
        <button disabled={pokemonIndex >= pokemonListLength}onClick={() => handleIncrement()}>Suivant</button>
    </nav>
}
