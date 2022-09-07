import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState([
        {title:'Day One In Great Britain', body:'lorem ipsum...', author:'John Red', id:1},
        {title:'Day One In Manhattan', body:'lorem ipsum...', author:'John Lennon', id:2},
        {title:'Day One In Oshawa', body:'lorem ipsum...', author:'Red Foreman', id:3}
    ]);

    const [people,setPeople] = useState([
        {name: 'Ash', age: 13, id:1},
        {name: 'Gary', age: 33, id:2},
        {name: 'Red', age: 23, id:3}

    ]);
    
    const theirTitle = 'Pokemon Trainers';

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="Maitre des sortileges" people={people} theirTitle={theirTitle}/>
        </div>
     );
}
 
export default Home;