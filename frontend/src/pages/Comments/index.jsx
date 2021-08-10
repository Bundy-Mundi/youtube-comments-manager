import React, {useEffect, useState} from "react";
import { useParams, useHistory } from "react-router-dom";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import CommentsList from "./Comments.List";
import CommentsSearch from "./Comments.Search";
import fetchComments from "../../utils/fetchComments";
import LayoutDefault from "../../components/layouts/Layout.Default";


const Comments = ({isAuthenticated}) => {
    let { id } = useParams();
    let history = useHistory();
    const [commentData, setCommentData] = useState([]);
    const [pages, setPages] = useState(0);
    const [loading, setLoading] = useState("");
    useEffect(()=>{
        if(id) {
            fetchComments({id, history, setCommentData});
        }
    },[])
    if(!isAuthenticated) return <Redirect exact to="/errors/403"/>
    else
    return (
        <LayoutDefault>
            <div className="min-h-screen w-full flex flex-col items-center justify-start">
            <CommentsSearch 
                setLoading={setLoading}
                setCommentData={setCommentData}
                setPages={setPages}
                pages={pages}
                commentData={commentData}/>
            <br/>
            <CommentsList 
                loading={loading} 
                commentData={commentData}
                pages={pages}/>
            </div>
        </LayoutDefault>
    )
}

export default Comments;