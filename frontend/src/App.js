import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route 
} from "react-router-dom";
import axios from "axios";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Comments from "./pages/Comments/index";
import Login from "./pages/Login";
import Error404 from "./components/404";
import Error403 from "./components/403";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  useEffect(()=>{
    const fetchAuth = async(token) => {
      let url = (process.env.NODE_ENV==='development') ? "http://localhost:4000/api/v1/auth/jwt" : "/api/v1/auth/jwt"
      return await axios.get(url, {headers:{"Authorization": `Bearer ${token}`}}).catch(err => console.log(err));
    };
    const token = localStorage.getItem('token');
    if(token) {
      const res = fetchAuth(token);
      if(res){
        if(res.data) setIsAuthenticated(true);
        else setIsAuthenticated(false);
      }
    }
  }, []);

  return (
    <Router>
      <Nav auth={isAuthenticated} setAuth={setIsAuthenticated}/>
      <Switch>
        {
          isAuthenticated ?
          <Route exact path="/" component={Home}/>
            :
          <Route exact path="/" component={Login}/>
        }
        <>
        <Route 
          exact
          path="/comments"
          render={()=><Comments isAuthenticated={isAuthenticated}/>}
        />
        <Route exact path='/errors/403' component={Error403}/>
        <Route exact path='/errors/404' component={Error404}/>
        {/* 
          Default Redirection to 404 page }
          <Redirect
            exact
            from='*' 
            to='/errors/404'
          /> 
        */}
        </>
      </Switch>
    </Router>
  );
}

export default App;
