import { useEffect } from 'react';
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [error,setError] = useState(null);


    useEffect(() => {
      setTimeout(() => {
        fetch('http://localhost:8001/blogs')
          .then(res => {
            console.log(res);
            if(!res.ok){
              throw Error('Could not fetch the data');
            }
            return res.json();
          })
          .then(data => {
            setBlogs(data);
            setIsPending(false);
            setError(null);
          })
          .catch( err => {
            console.log(err.message);
            setError(err.message);
            setIsPending(false);
          })
      }, 1000)
      }, [])

    return ( 
        <div className='home'>
          {error && <div>{error}</div>}
            { isPending && <div>Loading</div> }
            {blogs && <BlogList blogs={blogs} title='Welcome to the pokedex 2' />}
        </div>
     );
}
 
export default Home;

