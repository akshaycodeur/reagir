const Home = () => {

    const handleClick = () =>{
        console.log('You just clicked on the button');
    }

    const handleClickVar = (name) => {
        console.log("Hello " + name)
    }

    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <button onClick = {handleClick}>Click me</button>
            <h4>Now the anonymous function</h4>
            <button onClick={()=>{handleClickVar('Akilou');}}>This click uses a variable</button>
            <h4>Another way to write the above function is as follows</h4>
            <button onClick={()=>handleClickVar('Dorothee')}>This is another way to execute the same function as the previous one</button>
        </div>
     );
}
 
export default Home;