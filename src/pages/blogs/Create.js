import { Form, redirect, useActionData } from "react-router-dom";

export default function Create() {
    const data = useActionData()

    return (
        <div className="create">
            <h2>Add a new Blog</h2>
            <Form method="post" action="/create"> 
                <label>Blog title:</label>
                <input 
                    name="title"
                    type="text" 
                    required
                />
                <label>Blog body:</label>
                <textarea
                    required 
                    name="body"
                ></textarea>
                <label>Blog author</label>
                <input
                    name="author"
                    type="text"
                />

                <button>Add blog</button>

                {data && data.error && <p>{data.error}</p>}
            </Form> 
        </div>
    );
}


export const createAction = async ({ request }) => {
    const data = await request.formData()
  
    const submission = {
      title: data.get('title'),
      body: data.get('body'),
      author: data.get('author')
    }

    fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(submission)
    }).then(() => {
        return redirect('/blogs')
    })

    return redirect('/blogs')
}