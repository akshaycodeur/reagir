import { useEffect } from 'react';
import { useState } from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';

const Home = () => {   
    const{data, isPending, networkError, sectionOneTitle} = useFetch('http://localhost:3000/blogs');

    return ( 
        <div className='home'>
            { networkError && <div className="">{networkError}</div> }
            { isPending && <div>Loading...</div>}
           { data && <BlogList blogs={data} title={sectionOneTitle} />}
            <hr />
        </div>
     );
}
 
export default Home;


