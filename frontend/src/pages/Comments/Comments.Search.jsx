import React, {useState} from "react";
import { useHistory } from "react-router-dom";
import queryString from "query-string";
import fetchComments from "../../utils/fetchComments";


const updateError = (id, setError) => {
    if(id === false) {
        setError("Please try url starts with https://www.youtube.com");
        return true;
    } else {
        setError("");
    }
    return false;
}
export const checkUrlIsValid = (url) => {
    return url.includes("https://www.youtube.com/");
}
export const parseUrltoId = (url) => {
    if(!checkUrlIsValid(url)) return false;
    const {query:{v}} = queryString.parseUrl(url)
    return v;
}

const CommentsSearch = ({ setCommentData, pages, setPages }) => {
    let history = useHistory();
    const [error, setError] = useState("");
    const [searchUrl, setSearchUrl] = useState("");

    const handleOnClick = (url) => {
        const id = parseUrltoId(url);
        const isError = updateError(id, setError);
        if(!isError) {
            fetchComments({id, history, setCommentData, pages, setPages });
            setSearchUrl("");
        }
    }
    const handleOnKeyPress = (e, url) => {
        if(e.keyCode === 13){
            const id = parseUrltoId(url);
            const isError = updateError(id, setError);
            if(!isError) {
                fetchComments({id, history, setCommentData, setPages});
                setSearchUrl("");
            }
        }
    }
    
    return (
        <div className="w-full h-24 flex flex-col justify-center items-center rounded-lg overflow-hidden border bg-white">
            <div className="text-red-500 text-sm font-bold">
                {
                    error ?? null
                }
            </div>
            <div className="h-full w-full flex justify-center items-center">
                <input 
                    className="w-3/4 lg:w-1/2 xl:w-1/2 2xl:w-1/2 h-12 border-2 border-red-500 rounded-l-lg p-2 focus:outline-none focus:border-opacity-60"
                    onKeyDown ={e => handleOnKeyPress(e, searchUrl)} 
                    value={searchUrl} 
                    onChange={e => setSearchUrl(e.target.value)} 
                    type="text" 
                    placeholder="Please type the proper url of the video"/>
                <button
                 className="h-12 w-24 uppercase text-sm font-bold rounded-r-lg border-2 border-black hover:bg-black hover:text-white"
                 onClick={()=>handleOnClick(searchUrl)}>Search</button>
            </div>
        </div>
    )
}

export default CommentsSearch;