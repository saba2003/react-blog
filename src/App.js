import NavBar from './Navbar';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          {/* switch allows us to see only one route on screen */}
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/create">
              <Create />
            </Route>
            {/* id is a parameter, we define a param with : */}
            <Route path="/blogs/:id">
              <BlogDetails />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
