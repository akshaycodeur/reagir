import { useState } from 'react';

const states = () => {

    //let name = 'John Smith';
    const [name, setName] = useState('John Smith');
    const [age, setAge] = useState("20");

    const handleChangeName = () => {
        setName('Jane Doe');
        setAge('31');
    }

    const handleChangeNaruto = () => {
        setName('Naruto');
        setAge('16');
    }

    const handleChangeSasuke = () => {
        setName('Sasuke');
        setAge('14');
    }

    const handleChangeKakashi = () => {
        setName('Kakashi');
        setAge('41');
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <hr />
            <h5>Will clicking on the button change the value of the variable <strong>name</strong> ?</h5>
            <h3>{name} is {age} years old</h3>
            <button onClick = {handleChangeName}>Click me</button>

            <div className="buttons">
                <button onClick={handleChangeNaruto}>Naruto</button>
                <button onClick={handleChangeSasuke}>Sasuke</button>
                <button onClick={handleChangeKakashi}>Kakashi</button>
            </div>
        </div>
     );
}
 
export default States;