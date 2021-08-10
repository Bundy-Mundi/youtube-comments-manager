import React from "react";

const LayoutDefault = ({children}) => {
    return(
        <div className="z-0 p-6 w-full h-auto flex items-center justify-center bg-gray-50 overflow-hidden">
            {children}
        </div>
    )
}

export default LayoutDefault;