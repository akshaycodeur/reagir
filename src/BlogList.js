const BlogList = (props) => {
    const blogs = props.blogs;
    const people = props.people;
    const title = props.title;
    const theirTitle = props.theirTitle;
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
            {people.map((people) => (
                <div className="blogp-preview" key={people.id}>
                    <h2>{people.name}</h2>
                </div>
            ))}
            
        </div>
     );
}
 
export default BlogList;