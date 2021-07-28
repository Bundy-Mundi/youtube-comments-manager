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

const CommentsSearch = ({setLoading, setCommentData }) => {
    let history = useHistory();
    // let myChannelId = "UC11_a61RtVMhbFSlp35zTbQ"; // Temp
    const [error, setError] = useState("");
    const [searchUrl, setSearchUrl] = useState("");

    const handleOnClick = (url) => {
        const id = parseUrltoId(url);
        const isError = updateError(id, setError);
        if(!isError) {
            fetchComments({id, history, setCommentData });
            setSearchUrl("");
        }
    }
    const handleOnKeyPress = (e, url) => {
        if(e.keyCode === 13){
            const id = parseUrltoId(url);
            const isError = updateError(id, setError);
            if(!isError) {
                fetchComments({id, history, setCommentData});
                setSearchUrl("");
            }
        }
    }
    
    return (
        <>
        <div>
            {
                error ?? null
            }
        </div>
        <div>
            <input onKeyDown ={e => handleOnKeyPress(e, searchUrl)} value={searchUrl} onChange={e => setSearchUrl(e.target.value)} type="text" placeholder="Please type the proper url of the video"/>
            <button onClick={()=>handleOnClick(searchUrl)}>Search</button>
        </div>
        </>
    )
}

export default CommentsSearch;