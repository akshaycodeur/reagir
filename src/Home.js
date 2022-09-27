import { useEffect } from 'react';
import { useState } from 'react';
import BlogList from './BlogList';

const Home = () => {

    const [blogs,setBlogs] = useState([
        {
            "num": 1,
            "name": "Bulbasaur",
            "variations": [
                {
                    "name": "Bulbasaur",
                    "description": "Bulbasaur is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Seed Pokémon.",
                    "image": "images/bulbasaur.jpg",
                    "types": [
                        "Grass",
                        "Poison"
                    ],
                    "specie": "Seed Pokémon",
                    "height": 0.7,
                    "weight": 6.9,
                    "abilities": [
                        "Overgrow",
                        "Chlorophyll"
                    ],
                    "stats": {
                        "total": 318,
                        "hp": 45,
                        "attack": 49,
                        "defense": 49,
                        "speedAttack": 65,
                        "speedDefense": 65,
                        "speed": 45
                    },
                    "evolutions": [
                        "bulbasaur",
                        "ivysaur",
                        "venusaur"
                    ]
                }
            ],
            "link": "https://pokemondb.net/pokedex/bulbasaur"
        },
        {
            "num": 2,
            "name": "Ivysaur",
            "variations": [
                {
                    "name": "Ivysaur",
                    "description": "Ivysaur is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Seed Pokémon.",
                    "image": "images/ivysaur.jpg",
                    "types": [
                        "Grass",
                        "Poison"
                    ],
                    "specie": "Seed Pokémon",
                    "height": 1,
                    "weight": 13,
                    "abilities": [
                        "Overgrow",
                        "Chlorophyll"
                    ],
                    "stats": {
                        "total": 405,
                        "hp": 60,
                        "attack": 62,
                        "defense": 63,
                        "speedAttack": 80,
                        "speedDefense": 80,
                        "speed": 60
                    },
                    "evolutions": [
                        "bulbasaur",
                        "ivysaur",
                        "venusaur"
                    ]
                }
            ],
            "link": "https://pokemondb.net/pokedex/ivysaur"
        },
        {
            "num": 3,
            "name": "Venusaur",
            "variations": [
                {
                    "name": "Venusaur",
                    "description": "Venusaur is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Seed Pokémon.\nVenusaur has a Mega Evolution, available from X & Y onwards.",
                    "image": "images/venusaur.jpg",
                    "types": [
                        "Grass",
                        "Poison"
                    ],
                    "specie": "Seed Pokémon",
                    "height": 2,
                    "weight": 100,
                    "abilities": [
                        "Overgrow",
                        "Chlorophyll"
                    ],
                    "stats": {
                        "total": 525,
                        "hp": 80,
                        "attack": 82,
                        "defense": 83,
                        "speedAttack": 100,
                        "speedDefense": 100,
                        "speed": 80
                    },
                    "evolutions": [
                        "bulbasaur",
                        "ivysaur",
                        "venusaur"
                    ]
                },
                {
                    "name": "Mega Venusaur",
                    "description": "Venusaur is a Grass/Poison type Pokémon introduced in Generation 1. It is known as the Seed Pokémon.\nVenusaur has a Mega Evolution, available from X & Y onwards.",
                    "image": "images/venusaur-mega.jpg",
                    "types": [
                        "Grass",
                        "Poison"
                    ],
                    "specie": "Seed Pokémon",
                    "height": 2.4,
                    "weight": 155.5,
                    "abilities": [
                        "Thick Fat"
                    ],
                    "stats": {
                        "total": 625,
                        "hp": 80,
                        "attack": 100,
                        "defense": 123,
                        "speedAttack": 122,
                        "speedDefense": 120,
                        "speed": 80
                    },
                    "evolutions": [
                        "bulbasaur",
                        "ivysaur",
                        "venusaur"
                    ]
                }
            ],
            "link": "https://pokemondb.net/pokedex/venusaur"
        }
    ]);

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
            console.log(data);
            setBlogs(data);
        });
    },[]);

    return ( 
        <div className='home'>
            <BlogList blogs={blogs} title={sectionOneTitle}  eventDelete={handleDelete} />
            <hr />
        </div>
     );
}
 
export default Home;

