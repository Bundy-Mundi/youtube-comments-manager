import React from "react";
import LayoutAuth from "../components/layouts/Layout.Auth";

function Login () {
    let YOUTUBE_AUTH_URL = process.env.NODE_ENV === "development" ? "http://localhost:4000/api/v1/auth/youtube" : "/api/v1/auth/youtube";
    return(
        <LayoutAuth>
            <div className="w-64 h-64 flex items-center justify-center">
                <a className="h-12 px-3 flex text-white items-center justify-center rounded bg-red-600 hover:bg-red-700" href={YOUTUBE_AUTH_URL} >
                    <button className="flex flex-row items-center justify-center">
                        <i className="text-2xl fab fa-youtube mr-3"></i>
                        <p className="h-full text-sm font-bold">Get Started with YouTube</p>
                    </button>
                </a>
            </div>
        </LayoutAuth>
    )
};

export default Login;