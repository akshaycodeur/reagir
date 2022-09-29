import { useEffect } from 'react';
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState(null);

    console.log(blogs);
    
    const sectionOneTitle = 'Pokemon List';

    const handleDelete = (id) => {
        console.log('You clicked on the delete button');
    };

    useEffect(()=>{
        fetch('http://localhost:3000/blogs')
        .then(res =>{
            return res.json();
        }) 
        .then((data)=>{
            setBlogs(data);
        });
    },[]);

    return ( 
        <div className='home'>
           { blogs && <BlogList blogs={blogs} title={sectionOneTitle}  eventDelete={handleDelete} />}
            <hr />
        </div>
     );
}
 
export default Home;


