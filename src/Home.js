import { useState } from 'react';

const Home = () => {

    //let name = 'John Smith';
    const [name, setName] = useState('John Smith')

    const handleChangeName = () => {
        setName('Jane Doe')
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <hr />
            <h5>Will clicking on the button change the value of the variable <strong>name</strong> ?</h5>
            <h3>{name}</h3>
            <button onClick = {handleChangeName}>Click me</button>
        </div>
     );
}
 
export default Home;