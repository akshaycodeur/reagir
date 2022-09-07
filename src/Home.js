import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState([
        {title:'Day One In Great Britain', body:'lorem ipsum...', author:'John Red', id:1},
        {title:'Day One In Manhattan', body:'lorem ipsum...', author:'John Lennon', id:2},
        {title:'Day One In Oshawa', body:'lorem ipsum...', author:'Red Foreman', id:3}
    ]);

    const [people,setPeoplexxx] = useState([
        {name: 'Ash', age: 13, id:1},
        {name: 'Gary', age: 33, id:2},
        {name: 'Red', age: 23, id:3}

    ]);

    const listTitle = "The Pokemon List";
    const [pokemon, setPokemons] = useState([
        {pokename: 'Pikachu', move1: 'Tackle', move2:'Lightning', move3:'Growl', move4:'Quick Attack', id:1},
        {pokename: 'Ratata', move1: 'Tackle', move2:'Growl', move3:'Leer', move4:'Quick Attack', id:2},
        {pokename: 'Hinoarashi', move1: 'Scratch', move2:'Punch', move3:'Ember', move4:'Leer', id:3},
        {pokename: 'Charmander', move1: 'Scratch', move2:'Punch', move3:'Ember', move4:'Leer', id:4},
        {pokename: 'Squirtle', move1: 'Tackle', move2:'Growl', move3:'Bubble Blast', move4:'Water Gun', id:5}
    ]);
    
    const theirTitle = 'Pokemon Trainers';

    const eventDelete = () => {
        console.log('You clicked on the delete button');
    };

    return ( 
        <div className='home'>
            <BlogList blogs={blogs} title='Maitre des sortileges' people={people} theirTitle={theirTitle} pokemon = {pokemon} eventDelete={eventDelete} />
            <hr />
            <hr />
            <hr />
            <BlogList pokemon={pokemon.filter((pokemon) => pokemon.move1==='Scratch')} title='Maitre des sortileges2' people={people} theirTitle={theirTitle} blogs = {blogs} eventDelete={eventDelete} />
        </div>
     );
}
 
export default Home;