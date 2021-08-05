import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Error404 from "./components/404";
import Comments from "./pages/Comments/index";
function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        {/*
        <Route path="/comments">
          <Comments/>
        </Route>
        */ }
        <Route>
          <Error404/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
