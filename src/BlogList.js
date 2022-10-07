const BlogList = ({blogs,title}) => {
    
    return ( 
        <div className="">
            <h2>{title}</h2>
            <div className="blog-list">
                {blogs.map((blogpost) => (
                    <div className="blog-preview" key={blogpost.id}>
                        <h2 className="pokemonName"><span>{blogpost.id}. </span>{blogpost.pokename.english}</h2>
                        <h4 className="type">
                            <span className={blogpost.type[0]}>{blogpost.type[0]}</span>
                            <span className={blogpost.type[1]}>{blogpost.type[1]}</span>
                            <span className={blogpost.type[2]}>{blogpost.type[2]}</span>
                            <span className={blogpost.type[3]}>{blogpost.type[3]}</span>
                        </h4>
                        <div className="pokemonStats">
                            <p>Attack: {blogpost.base.Attack}</p>
                            <p>Defense: {blogpost.base.Defense}</p>
                            <p>Speed: {blogpost.base.Speed}</p>
                            <p>HP: {blogpost.base.HP}</p>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>
     );
}
 
export default BlogList;



