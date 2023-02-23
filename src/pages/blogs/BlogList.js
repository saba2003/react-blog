import { Link, useLoaderData } from "react-router-dom";

export default function BlogList() {
    const blogs = useLoaderData()

    return (
        <div className="blog-list">
            <h2>All blogs</h2>
            {blogs.map(blog => (
                <Link to={`/blogs/${blog.id}`} key={blog.id}>
                    <div className="blog-preview">
                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

//Loader function
export const blogsLoader = async () => {
    const res = await fetch('http://localhost:8000/blogs/') 
    
    if(!res.ok) 
        {throw Error('Could not fetch blogs')}

    return res.json()
}