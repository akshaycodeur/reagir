import { useState } from 'react';

const Home = () => {

    const [blogs,setBlogs] = useState([
        {title:'Day One In Great Britain', body:'lorem ipsum...', author:'John Red', id:1},
        {title:'Day One In Manhattan', body:'lorem ipsum...', author:'John Lennon', id:2},
        {title:'Day One In Oshawa', body:'lorem ipsum...', author:'Red Foreman', id:3}
    ]);
    
    return ( 
        <div className="home">
            {blogs.map((blogpost) => (
                <div className="blog-preview" key={blogpost.id}>
                    <h2>{blogpost.title}</h2>
                    <p>Written by {blogpost.author}</p>
                    <hr />
                </div>
            ))}
        </div>
     );
}
 
export default Home;