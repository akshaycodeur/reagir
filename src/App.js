import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';

function App() {
  let title = 'This is a new title'
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <h1>Heading : {title}</h1>
      </div>
    </div>
  );
}

export default App;
