import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch"

const BlogDetails = () => {
    //id is the name of the parameter in route /blogs/:id
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    const timeAndSpace = useHistory()

    const hanldeClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
            timeAndSpace.push('/')
        }) 
    }

    return (
        <div className="blog-details">
            { isPending && <div>Loading...</div>}
            { error && <div>{error}</div>}
            { blog && (
                <article>
                    <h2>{blog.title}</h2>
                    <p>Written by {blog.author}</p>
                    <div>{blog.body}</div>
                    <button onClick={hanldeClick}>delete</button>
                </article>
            )}
            {/* <h2>Blog details - {id} </h2> */}
        </div>
    );
}
 
export default BlogDetails;