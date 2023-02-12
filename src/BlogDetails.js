import { useParams } from "react-router-dom";

const BlogDetails = () => {
    //id is the name of the parameter in route /blogs/:id
    const { id } = useParams()

    return (
        <div className="blog-details">
            <h2>Blog details - {id} </h2>
        </div>
    );
}
 
export default BlogDetails;