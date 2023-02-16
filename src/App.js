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
import Create from './pages/Create';
import Faq from './pages/help/Faq';
import Contact from './pages/help/Contact';
import NotFound from './NotFound';

//other
import BlogDetails from './BlogDetails';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />} >

      <Route index element={<Home />} />
      <Route path="create" element={<Create />} />
      <Route path="help" element={<HelpLayout />}>
        <Route path="faq" element={<Faq />}/>
        <Route path="contact" element={<Contact />} />
      </Route>

      {/* id is a parameter, we define a param with : */}
      <Route path="blogs/:id" element={<BlogDetails />} />
      <Route path="*" element = {<NotFound />} />

    </Route>
  )
)

function App() {
  return (
    <div className="App">
        <RouterProvider router={router} />
    </div>
  );
}

export default App;
