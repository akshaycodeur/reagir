import { Link } from "react-router-dom";

const BlogList = ({pokemons,title}) => {
    
    return ( 
        <div className="">
            <h2>{title}</h2>
            <div className="blog-list">
                {pokemons.map((pokemonlist) => (
                    <Link to={`/pokemon/${pokemonlist.national_id}`}>
                        <div className="blog-preview" key={pokemonlist.national_id}>
                            <h4 className="pokemonName"><span>Pokedex ID : {pokemonlist.pkdx_id}</span></h4>
                            <h4 className="pokemonName">{pokemonlist.name}</h4>
                            {/* <h4 className="type">
                                <span className={pokemonlist.type[0]}>{pokemonlist.type[0]}</span>
                                <span className={pokemonlist.type[1]}>{pokemonlist.type[1]}</span>
                                <span className={pokemonlist.type[2]}>{pokemonlist.type[2]}</span>
                                <span className={pokemonlist.type[3]}>{pokemonlist.type[3]}</span>
                            </h4>
                            <div className="pokemonStats">
                                <p>Attack: {pokemonlist.base.Attack}</p>
                                <p>Defense: {pokemonlist.base.Defense}</p>
                                <p>Speed: {pokemonlist.base.Speed}</p>
                                <p>HP: {pokemonlist.base.HP}</p>
                                
                            </div> */}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
     );
}
 
export default BlogList;



