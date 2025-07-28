const Bloglist = ({blogs,title}) => {
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            { blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h1>{blog.title}</h1>
                <p>
                    is Written by: {blog.author}
                </p>
            </div>
    ))}
        </div>
     );
}
 
export default Bloglist;