import { useState } from "react";

const CreatePokemon = () => {

    const [pokemonname,setPokemonname] = useState('Enter Pokemon Name');
    const [pokeType,setPokeType] = useState('Enter Pokemon Type #1');

    const handleSubmit = (e) => {

    }

    return (  
        <div className="createPokemon">
            <h1>Add new pokemon entry</h1>
            <form onSubmit={handleSubmit}>
                <label>Pokemon Name</label>
                <input 
                type="text"
                required 
                value={pokemonname}
                onChange={(e) => setPokemonname(e.target.value)}
                />
                 <label>Pokemon type</label>
                <input 
                type="text"
                required 
                value={pokeType}
                onChange={(e)=>setPokeType(e.target.value)}
                />
                <button>Add Pokemon</button>
            </form>
        </div>
    );
}
 
export default CreatePokemon;