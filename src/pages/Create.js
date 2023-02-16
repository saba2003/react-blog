import { useState } from "react";
import { /* useHistory */ } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')
    const [author, setAuthor] = useState('mario')
    const [isPending, setIsPending] = useState(false)
    //const timeAndSpace = useHistory()

    const handleSubmit = (e) => {
        //prevents the page from refreshing after pushing button
        e.preventDefault();
        //creating an object
        const blog = {title, body, author}

        setIsPending(true)
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            setIsPending(false)
            //redirecting to other pages
            //timeAndSpace.go(-1)
            //timeAndSpace.push('/')
        })
    }

    return (
        <div className="create">
            <h2>Add a new Blog</h2>

            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(event) => setTitle(event.target.value)}
                />
                <label>Blog body:</label>
                <textarea
                    required 
                    value={body}
                    onChange={(event) => setBody(event.target.value)}
                ></textarea>
                <label>Blog author</label>
                <select
                    value={author}
                    onChange={(event) => setAuthor(event.target.value)}
                >
                    <option value="mario">mario</option>
                    <option value="yoshi">yoshi</option>
                </select>
                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Adding blog...</button>}
            </form>
        </div>
    );
}
 
export default Create;