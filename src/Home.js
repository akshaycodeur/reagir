import { useEffect } from 'react';
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState(null);
    const [isPending,setIsPending] = useState(true);

    console.log(blogs);
    
    const sectionOneTitle = 'Pokemon Lists';


    useEffect(()=>{
        fetch('http://localhost:3000/blogs')
        .then(res =>{
            return res.json();
        }) 
        .then((data)=>{
            setBlogs(data);
            setIsPending(false);
        });
    },[]);

    return ( 
        <div className='home'>
            { isPending && <div>Loading...</div>}
           { blogs && <BlogList blogs={blogs} title={sectionOneTitle} />}
            <hr />
        </div>
     );
}
 
export default Home;


