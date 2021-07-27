import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import CommentsSearch from "./pages/Comments.Search";
import CommentsList from "./pages/Comments.List";
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
        <Route exact path="/comments">
          <CommentsSearch/>
        </Route>
        <Route path="/comments/:id">
          <CommentsList/>
        </Route>
        <Route>
          <Error404/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
