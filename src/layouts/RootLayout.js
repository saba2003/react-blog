import { Outlet } from 'react-router-dom';
import NavBar from '../Navbar';

export default function RootLayout() {
  return (
    <div className="root-layout">
        <NavBar />
        <div className="content">
            <Outlet />
        </div>
    </div>
  )
}
