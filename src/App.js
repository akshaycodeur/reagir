import logo from './logo.svg';
import Navbar from './Navbar';
import Homeneo from './Homeneo';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import CreatePokemon from './CreatePokemon';
import BlogDetails from './BlogDetails';


function App() {
  return (
    <Router>
      <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Homeneo />
          </Route>
          <Route exact path="/create">
            <CreatePokemon />
          </Route>
          <Route exact path="/blogs/:id">
            <BlogDetails />
          </Route>
        </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;
