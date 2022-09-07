const BlogList = (props) => {
    const blogs = props.blogs;

    const title = props.title;

    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blogpost) => (
                <div className="blog-preview" key={blogpost.id}>
                    <h2>{blogpost.title}</h2>
                    <p>Written by {blogpost.author}</p>
                    <hr />
                </div>
            )
            
            )}
            
        </div>
     );
}
 
export default BlogList;