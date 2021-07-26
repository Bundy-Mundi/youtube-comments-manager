import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const fetchByVideoId = "http://localhost:3000/comments/of-video";

const LoadReply = ({replies}) => {
    return (
        replies.map((v, k)=>{
            return <p style={{fontSize:"0.6rem", fontWeight:"bold"}} key={k}>{v.snippet.textOriginal}</p>
        })
    )
}

const ReplyButton = ({replies}) => {
    return <button >Replies</button>
}

const CommentBlock = ({
    authorChannelUrl,
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    canRate,
    replies,
    text,
    updatedAt}) => {
    return (<div style={{ marginBottom:"3rem", padding: "1rem" }}>
                <a href={authorChannelUrl} target="_blank"><p>{authorDisplayName}</p></a>
                <img src={authorProfileImageUrl} alt="" />
                <p>LikeCount: {likeCount}</p>
                <p>{text}</p>
                <p>Updated At: {updatedAt}</p>
                {
                replies ?
                    <ReplyButton replies={replies}/>
                        :
                    null
                }
            </div>)
}

function Comments () {
    let { id } = useParams();
    const [commentData, setCommentData] = useState([]);
    
    useEffect(()=>{
        async function fetchComments (url) {
            const res = await axios.get(url).catch(err => console.log(err));
            if(!res) throw new Error("Bad request");
            setCommentData(res.data.items)
        }
        if(id) fetchComments(`${fetchByVideoId}/${id}`);
    },[])
    return(
        <div>
            <h1>Comments</h1>
            {
                commentData.map(({snippet:{ topLevelComment:{ snippet } }, replies}, key)=>(
                    <CommentBlock 
                        key={key} 
                        replies={replies ? replies.comments : null}
                        authorChannelUrl={snippet.authorChannelUrl}
                        authorDisplayName={snippet.authorDisplayName}
                        authorProfileImageUrl={snippet.authorProfileImageUrl}
                        likeCount={snippet.likeCount}
                        canRate={snippet.canRate}
                        text={snippet.textOriginal}
                        updatedAt={snippet.updatedAt}
                    />)
                )
            }
        </div>
    )
};

export default Comments;