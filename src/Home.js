import { useEffect } from 'react';
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);
    const [networkError, setNetworkError] = useState(null);
    
    const sectionOneTitle = 'Pokemon Lists';


    useEffect(()=>{
        fetch('http://localhost:3000/blogs')
        .then(res =>{
            if(!res.ok){
                throw Error('Could not fetch the date for that resources')
            }
            return res.json();
        }) 
        .then((data)=>{
            setBlogs(data);
            setIsPending(false);
            setNetworkError(null);
        })
        .catch( e => {
            setNetworkError(e.message)
            setIsPending(false);
        })
    },[]);

    return ( 
        <div className='home'>
            { networkError && <div className="">{networkError}</div> }
            { isPending && <div>Loading...</div>}
           { blogs && <BlogList blogs={blogs} title={sectionOneTitle} />}
            <hr />
        </div>
     );
}
 
export default Home;


