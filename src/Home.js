import { useEffect } from 'react';
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:8001/blogs')
          .then(res => {
            return res.json();
          })
          .then(data => {
            setBlogs(data);
            console.log(data);
          })
      }, [])

    return ( 
        <div className='home'>
            {blogs && <BlogList blogs={blogs} title='Welcome to the pokedex' />}
        </div>
     );
}
 
export default Home;

