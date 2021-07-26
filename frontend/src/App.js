import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Comments from "./pages/Comments";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Error404 from "./components/404";
function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/comments/:id">
          <Comments/>
        </Route>
        <Route>
          <Error404/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
