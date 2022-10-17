import { useEffect } from 'react';
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);


    useEffect(() => {
      setTimeout(() => {
        fetch('http://localhost:8001/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setBlogs(data);
            setIsPending(false);
          })
      }, 1000)
      }, [])

    return ( 
        <div className='home'>
            { isPending && <div>Loading</div> }
            {blogs && <BlogList blogs={blogs} title='Welcome to the pokedex 2' />}
        </div>
     );
}
 
export default Home;

