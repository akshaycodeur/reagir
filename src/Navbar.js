import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
            <h1>KIM's Space</h1>
            <div className="links">
                <Link to="/">Home</Link>
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