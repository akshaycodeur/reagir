import { useParams } from "react-router-dom";
import { useHistory } from "react-router-dom";
import useFetch from "./useFetch";

const PokeDetails = () => {

    const { id } = useParams();
    const { error, isPending, data:pokemon } = useFetch('http://localhost:8001/pokemon/' + id);
    const history = useHistory();

    const handleDelete = () => {
        fetch('http://localhost:8001/pokemon/' + id, {
            method: 'DELETE'
        }).then(() =>{
            history.push('/');
        })
    }


    return ( 
        <div className="pokemon-details">
            <h4>Pokemon # { id }</h4>
            <div className="">
            { isPending && <div>Loading ...</div>}
            { error && <div>{ error }</div>}
            {pokemon && (
                <div className="pokemonGrid">
                    <div className="topdetails">
                        <div className="pokemonImage">
                           <img src={pokemon.art_url} alt="" />
                        </div>
                        <div className="pokemonDetails">
                            <div className="pokeName"><h4>{pokemon.name}</h4></div>
                            <div className="type">
                                <div className={pokemon.types[0]}>{pokemon.types[0]}</div>
                                <div className={pokemon.types[1]}>{pokemon.types[1]}</div>
                            </div>
                            <div className="pokeDescription">
                                <p>{pokemon.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="description"></div>
                    <button onClick={handleDelete}>Delete Record</button>
                </div>
            )}
            </div>
            
        </div>
     );
}
 
export default PokeDetails;