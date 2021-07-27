import React, {useEffect, useState} from "react";
import { useParams, useHistory } from "react-router-dom";
import CommentsList from "./Comments.List";
import CommentsSearch from "./Comments.Search";
import fetchComments from "../../utils/fetchComments";

let myChannelId = "UC11_a61RtVMhbFSlp35zTbQ";

const Comments = () => {
    let { id } = useParams();
    let history = useHistory();
    const [commentData, setCommentData] = useState([]);
    
    const [loading, setLoading] = useState("");
    useEffect(()=>{
        if(id) {
            fetchComments({id, history, setCommentData});
        }
    },[])
    return (<>
        <CommentsSearch 
            setLoading={setLoading}
            setCommentData={setCommentData}
            commentData={commentData}/>
        <CommentsList 
            loading={loading} 
            commentData={commentData}
            myChannelId={myChannelId}/>
    </>)
}

export default Comments;