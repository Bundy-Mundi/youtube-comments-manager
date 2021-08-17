import React, {useState} from "react";
import { NavLink } from "react-router-dom";

const listClass = "mr-3";
const ResposiveMenuList = ({to, text, onClick}) => {
    return (
    <li onClick={onClick} className="w-full h-24 flex items-center justify-start text-2xl hover:bg-gray-100">
        <NavLink className="w-full h-full flex items-center justify-start pl-4 ml-24 " to={to} >
            {text}
        </NavLink>
    </li>
    )
}

const Nav = ({ auth }) => {
    const [ menuopen, setMenuopen ] = useState(false);
    return (
        <>
        <nav className="w-full sticky top-0 z-50 p-6 flex items-center justify-start shadow-lg bg-white bg-opacity-80">
            <ul className="hidden flex-row items-center md:flex lg:flex xl:flex 2xl:flex">
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
        </nav>
        {
                menuopen ?
                <div className="absolute h-screen w-full">
                    <ul className="
                    flex flex-col items-center 
                    h-full w-full z-50 bg-white
                    border
                    ">
                        <li onClick={()=>setMenuopen(!menuopen)} className="w-full h-24 flex items-center justify-end hover:bg-gray-100">
                            <span className="h-10 w-10 text-3xl cursor-pointer font-bold">X</span>
                        </li>
                        <ResposiveMenuList onClick={()=>setMenuopen(!menuopen)} to="/" text="Home"/>
                        {
                            auth ?
                            <>
                                <ResposiveMenuList onClick={()=>setMenuopen(!menuopen)} to="/comments" text="Comments"/>
                            </>
                                :
                            null
                        }
                    </ul>
                </div>
                :
                null
            }
        </>
    )
};

export default Nav;