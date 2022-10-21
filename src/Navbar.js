import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Ash Pokedex</h1>
            <div className="links">
                <Link to="/">PokeIndex</Link>
                <Link to="/create" style={{
                    padding:'.5rem',
                    backgroundColor:"#f1356d",
                    color:'white'
                    }}>New Post</Link>
            </div>
        </nav>
    );
}
 
export default Navbar ;