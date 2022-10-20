import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const {id} = useParams();
    const { error, isPending, data: pokemon } = useFetch('http://localhost:8001/blogs/' + id)

    return ( 
        <div className="pokemon-details">
            <h4>Pokemon # { id }</h4>
            <div className="">
            { isPending && <div>Loading ...</div>}
            { error && <div>Error</div>}
            {pokemon && (
                <div className="pokemonName">
                    <h4>{pokemon.pokename.english}</h4>
                <h4>{pokemon.pokename.japanese}</h4>
                <h4>{pokemon.pokename.chinese}</h4>
                <h4>{pokemon.pokename.french}</h4>
                </div>
            )}
            </div>
        </div>
     );
}
 
export default BlogDetails;