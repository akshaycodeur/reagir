import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreatePokemon = () => {

    const [name,setName] = useState('Enter Pokemon Name');
    const [types,setTypes] = useState('Enter Pokemon Type #1');
    const [description,SetDescription] = useState('Enter Pokemon Description');

    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const pokemon = {name,types,description};
        console.log(pokemon);

        fetch('http://localhost:8001/pokemon', {
            method: 'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify(pokemon)
        }).then(() => {
            console.log('New Pokemon Added');
            history.push('/');
        })
    }

    return (  
        <div className="createPokemon">
            <h1>Add new pokemon entry</h1>
            <form onSubmit={handleSubmit}>
                <label>Pokemon Name</label>
                <input 
                type="text"
                required 
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
                 <label>Pokemon type</label>
                <input 
                type="text"
                required 
                value={types}
                onChange={(e)=>setTypes(e.target.value)}
                />
                 <label>Pokemon Description</label>
                <textarea 
                type="text"
                required 
                value={description}
                onChange={(e)=>SetDescription(e.target.value)}
                />
                <button>Add Pokemon</button>
            </form>
        </div>
    );
}
 
export default CreatePokemon;