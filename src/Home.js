import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState([
        {title:'Day One In Great Britain', body:'lorem ipsum...', author:'John Red', id:1},
        {title:'Day One In Manhattan', body:'lorem ipsum...', author:'John Lennon', id:2},
        {title:'Day One In Oshawa', body:'lorem ipsum...', author:'Red Foreman', id:3}
    ]);
    
    return ( 
        <div className="home">
            <BlogList blogs={blogs} />
        </div>
     );
}
 
export default Home;