import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const listClass = "mr-3";

const Nav = ({ auth, setAuth }) => {
    const [ menuopen, setMenuopen ] = useState(false);
    return (
        <nav className="w-full bg-opacity-10 sticky top-0 z-50 p-6 flex items-center justify-start shadow-lg">
            <ul className="hidden flex-row items-center md:flex lg:flex xl:flex 2xl:flex">
                <li className="cursor-pointer font-bold text-sm mr-3" onClick={()=>setAuth(!auth)}>Authenticate</li>
                <li className={listClass}><NavLink to="/">Home</NavLink></li>
                {
                    auth ?
                    <>
                        <li className={listClass}><NavLink to="/comments" >Comments</NavLink></li>
                    </>
                        :
                    null
                }
            </ul>
            <div id="hamburger" className="md:hidden lg:hidden xl:hidden 2xl:hidden">
                <i onClick={()=>setMenuopen(!menuopen)} className="text-3xl fas fa-hamburger cursor-pointer"></i>
            </div>
            {
                menuopen ?
                <ul className="absolute top-5 flex items-center">
                    <li className={listClass}><NavLink to="/">Home</NavLink></li>
                    {
                        auth ?
                        <>
                            <li className={listClass}><NavLink to="/comments" >Comments</NavLink></li>
                        </>
                            :
                        null
                    }
                </ul>
                    :
                null
            }
        </nav>
    )
};

export default Nav;