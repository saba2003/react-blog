import { Outlet } from 'react-router-dom';
import Breadcrumbs from '../components/Breadcrumbs';
import NavBar from '../Navbar';

export default function RootLayout() {
  return (
    <div className="root-layout">
        <NavBar />
        <Breadcrumbs />
        <div className="content">
          <Outlet />
        </div>
    </div>
  )
}
