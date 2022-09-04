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
            <button onClick={()=>{
                handleClickVar('Akilou');
            }}>This click uses a variable</button>
        </div>
     );
}
 
export default Home;