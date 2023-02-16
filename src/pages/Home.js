import BlogList from "../BlogList";
import useFetch from "../useFetch";

export const Home = () => {
    //here with data: blogs we rename data and call it blogs
    const {data: blogs, isPending, error} = useFetch('http://localhost:8000/blogs')

    return (
        <div className="home">
            {error && <div style={{color: "red"}}>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs" />}
        </div>
    );
}
 
export default Home;