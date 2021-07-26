import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Comments from "./pages/Comments";
import Home from "./pages/Home";
import Nav from "./components/Nav";
function App() {
  return (
    <Router>
      <Nav/>
      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/comments">
          <Comments/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
