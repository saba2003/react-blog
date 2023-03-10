import { NavLink } from 'react-router-dom'

export default function Navbar() {
    return (
        <nav className="navbar">
            <NavLink to="/"><h1>The React Blog</h1></NavLink>
            
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/blogs">Blogs</NavLink>
                <NavLink to="create">New Blog</NavLink>
                <NavLink to="help">Help</NavLink>
            </div>
        </nav>
    );
}
