import React from "react";

const LayoutAuth = ({children}) => {
    return(
        <div className="w-full h-screen flex items-center justify-center bg-gray-50">
            {children}
        </div>
    )
}

export default LayoutAuth;