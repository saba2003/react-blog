import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from 'react-router-dom';

//Layouts
import RootLayout from './layouts/RootLayout';
import HelpLayout from './layouts/HelpLayout';

//pages
import Home from './pages/Home';
import Blogs from './pages/blogs/Blogs';
import Create, { createAction } from './pages/blogs/Create';
import Faq from './pages/help/Faq';
import Contact, { contactAction } from './pages/help/Contact';
import NotFound from './pages/NotFound';

//other
import BlogDetails, { blogDetailsLoader } from './pages/blogs/BlogDetails';
import { blogsLoader } from './pages/blogs/BlogList';
import BlogError from './pages/blogs/BlogError';


const router = createBrowserRouter(
  createRoutesFromElements(
    
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}></Route>

      <Route 
        path="blogs" 
        element={<Blogs />} 
        loader={blogsLoader} 
        errorElement={<BlogError />}
      />

      <Route 
        path="blogs/:id" 
        element={<BlogDetails />} 
        loader={blogDetailsLoader}
        errorElement={<BlogError />}
      />

      <Route path="create" element={<Create />} action={createAction}/>
      

      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" element={<Contact />} action={contactAction}/>
      </Route>

      <Route path="*" element = {<NotFound />} />

    </Route>
  )
)

export default function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}
