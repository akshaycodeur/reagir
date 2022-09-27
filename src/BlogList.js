const BlogList = ({blogs,people,title,handleDelete}) => {
    
    return ( 
        <div className="blog-list">

            <h2 className="title">{title}</h2>

            {blogs.map((blogpost) => (
                <div className="blog-preview" key={blogpost.name}>
                    <h2><span>{blogpost.num}.</span>{blogpost.name}</h2>
                    <p><a href={blogpost.link}>View Details >></a></p>
                    <p>Written by {blogpost.author}</p>
                    <button className="deletebutton" onClick={ () => handleDelete(blogs.id)} >Delete Record</button>
                </div>
            ))}
            <hr />
            <hr />

           
        </div>
     );
}
 
export default BlogList;



