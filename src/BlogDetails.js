import {/* useHistory,*/ useParams } from "react-router-dom";
import useFetch from "./useFetch"

const BlogDetails = () => {
    //id is the name of the parameter in route /blogs/:id
    const { id } = useParams()
    const { data: blog, error, isPending } = useFetch('http://localhost:8000/blogs/' + id)
    //const timeAndSpace = useHistory()

    const hanldeClick = () => {
        //initialize the json dummy server and using the data from the created Data/db.json
        //npx json-server --watch Data/db.json --port 8000
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }).then(() => {
           // timeAndSpace.push('/')
        }) 
    }

    return (
        <div className="blog-details">
            {/* this acts as a return, for example: if isPending=true, it shows Loading */}
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