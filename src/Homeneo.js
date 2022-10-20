import { queryByPlaceholderText } from '@testing-library/react';
import { useState } from 'react';
import { useEffect } from 'react';
import BlogList from './BlogList';
import useFetch from "./useFetch";

const Home = () => {

  const { error, isPending, data: blogs } = useFetch('http://localhost:8001/blogs')

    return ( 
        <div className='home'>
          {error && <div>{error}</div>}
            { isPending && <div>Loading</div> }
            {blogs && <BlogList blogs={blogs} title='Welcome to the pokedex' />}
        </div>
     );
}
 
export default Home;

