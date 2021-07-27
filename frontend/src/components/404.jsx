import React from "react";
import { useLocation, Link } from "react-router-dom";

const Error404 = () => {
    let location = new URLSearchParams(useLocation().search);
    return(
        <div>
        <h1>404</h1>
        <h3>Not Found</h3>
        <p>Error: {location.get('error')}</p>
        <Link to="/">Back to home</Link>
        <br/>
        <Link to="/comments">Back to comment search</Link>
        </div>
    )
}

export default Error404;