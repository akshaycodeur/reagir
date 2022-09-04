const Home = () => {

    let name = 'John Smith';

    const handleChangeName = () => {
        console.log(name);
        name = "Jane Doe";
        console.log(name);
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <hr />
            <h5>Will clicking on the button change the value of the variable <strong>name</strong> ?</h5>
            <button onClick = {handleChangeName}>Click me</button>
        </div>
     );
}
 
export default Home;