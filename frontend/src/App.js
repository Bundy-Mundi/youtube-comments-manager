import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import Home from "./pages/Home";
import Nav from "./components/Nav";
import Error404 from "./components/404";
import Comments from "./pages/Comments/index";
import Login from "./pages/Login";
import LayoutDefault from "./components/layouts/Layout.Default";
import LayoutAuth from "./components/layouts/Layout.Auth";
import { useState } from "react";

function App() {
  const [auth, setAuth] = useState(true);
  return (
    <Router>
      <Nav auth={auth} setAuth={setAuth}/>
      <Switch>
        {
          auth ? 
          <>
          <Route exact path="/">
            <LayoutDefault>
              <Home/>
            </LayoutDefault>
          </Route>
          <Route path="/comments">
            <Comments/>
          </Route>
          </>
            :
          <>
          <Route exact path="/">
            <LayoutAuth>
              <Login/>
            </LayoutAuth>
          </Route>
          </>
        }
        <Route>
          <Error404/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
