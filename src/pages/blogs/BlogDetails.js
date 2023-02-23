import { useNavigate, useLoaderData } from "react-router-dom";

export default function BlogDetails() {
  const blog = useLoaderData()
  const navigate = useNavigate()

  const hanldeClick = () => {
      //initialize the json dummy server and using the data from the created Data/db.json
      //npx json-server --watch Data/db.json --port 8000
      fetch('http://localhost:8000/blogs/' + blog.id, {
          method: 'DELETE'
      }).then((response) => {
        if(response.ok){
            navigate("/blogs")
        } 
      })
  }

  return (
      <div className="blog-details">
        {blog && (
            <article>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <div>{blog.body}</div>
                <button onClick={hanldeClick}>delete</button>
            </article>
        )}
      </div>
  );
}

//Loader function
export const blogDetailsLoader = async ({ params }) => {
    const { id } = params
    const res = await fetch('http://localhost:8000/blogs/' + id) 
    
    if(!res.ok) 
        {throw Error('Blog does not exist')}

    return res.json()
}