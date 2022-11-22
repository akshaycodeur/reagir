import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>Ash Pokedex</h1>
            <div className="links">
                <Link to="/">Pokemon List</Link>
                <Link to="/create" style={{
                    padding:'.5rem',
                    backgroundColor:"#f1356d",
                    color:'white'
                    }}>Add Pokemon</Link>
            </div>
        </nav>
    );
}
 
export default Navbar ;