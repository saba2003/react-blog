import { Link, useRouteError } from "react-router-dom"

export default function BlogError() {
    const error = useRouteError()
  
    return (
    <div className="blog-error">
        <h2>Error</h2>
        <p>{error.message}</p>
        <Link to="/">Back to the homepage</Link>
    </div>
  )
}
