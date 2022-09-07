const BlogList = ({blogs,people,title,theirTitle, pokemon}) => {
    
    return ( 
        <div className="blog-list">

            <h2>{title}</h2>

            {blogs.map((blogpost) => (
                <div className="blog-preview" key={blogpost.id}>
                    <h2>{blogpost.title}</h2>
                    <p>Written by {blogpost.author}</p>
                    <hr />
                </div>
            ))}
            <hr />
            <hr />
            <h1>{theirTitle}</h1>
            {people.map((peoplesss) => (
                <div className="blog-preview" key={peoplesss.id}>
                    <h2>{peoplesss.name}</h2>
                </div>
            ))}
            <hr />
            <hr />
            <hr />
            <hr />
            {pokemon.map((poketmon) => (
                <div className="blog-preview" key={poketmon.id}>
                    <h3>{poketmon.pokename}</h3>
                    <ul>
                        <li>{poketmon.move1}</li>
                        <li>{poketmon.move2}</li>
                        <li>{poketmon.move3}</li>
                        <li>{poketmon.move4}</li>
                    </ul>
                    <hr />
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;