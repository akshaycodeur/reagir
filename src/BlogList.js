const BlogList = (props) => {
    const blogs = props.blogs;

    console.log(props,blogs);

    return ( 
        <div className="blog-list">
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
 
export default BlogList;