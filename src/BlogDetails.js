import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {

    const { id } = useParams();
    const { error, isPending, data:pokemon } = useFetch('http://localhost:8001/pokemon/' + id);

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
                            {pokemon.name}
                        </div>
                        <div className="pokemonStats"></div>
                    </div>
                    <div className="description"></div>
                </div>
            )}
            </div>
        </div>
     );
}
 
export default BlogDetails;