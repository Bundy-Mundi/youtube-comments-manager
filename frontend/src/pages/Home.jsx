import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import LayoutDefault from "../components/layouts/Layout.Default";
import { useLocation } from "react-router-dom/cjs/react-router-dom.min";

function Home () {
    let token = new URLSearchParams(useLocation().search).get("token");
    useEffect(()=>{
        if(token) localStorage.setItem("token", token);
    },[token]);
    return(
        <LayoutDefault>
            <section className="h-screen w-full border rounded-lg bg-white p-6">
                <div className="mb-3">
                    <h1 className="text-3xl lg:ml-6 xl:ml-6 2xl:ml-6 ">Home</h1>
                </div>
                <div className="flex flex-col items-center justify-center mt-10 mb-3">
                    <h3 className="text-2xl mb-10">What you want to do?</h3>
                    <ul>
                        <li className="w-full h-full hover:bg-gray-900 hover:text-white border-2 border-b-0 p-6 rounded-t-lg text-sm font-bold hover:white"><Link className="w-full h-full" to="/comments">Find YouTube Comments by video url</Link></li>
                        <li className="w-full h-full hover:bg-gray-900 hover:text-white border-2 border-b-0 p-6 text-sm font-bold"><Link className="w-full h-full" to="/">Coming Soon</Link></li>
                        <li className="w-full h-full hover:bg-gray-900 hover:text-white border-2 border-b-0 p-6 text-sm font-bold"><Link className="w-full h-full" to="/">Coming Soon</Link></li>
                        <li className="w-full h-full hover:bg-gray-900 hover:text-white border-2 border-b-0 p-6 text-sm font-bold"><Link className="w-full h-full" to="/">Coming Soon</Link></li>
                        <li className="w-full h-full hover:bg-gray-900 hover:text-white border-2 p-6 rounded-b-lg text-sm font-bold hover:white"><Link className="w-full h-full" to="/">Coming Soon</Link></li>
                    </ul>
                </div>
            </section>
        </LayoutDefault>
    )
};

export default Home;