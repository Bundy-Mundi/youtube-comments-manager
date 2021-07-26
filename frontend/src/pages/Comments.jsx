import React, {useState, useEffect} from "react";
import axios from "axios";

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
    const [commentData, setCommentData] = useState([]);
    useEffect(()=>{
        async function fetchComments (url) {
            const {data} = await axios.get(url).catch(err => console.log(err));
            if(data.items){
                console.log(data.items[0], data.items[1], data.items[2])
                setCommentData(data.items)
            }
        }
        fetchComments("http://localhost:3000/comments/of-video/ib0Ekm5Mutg");
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