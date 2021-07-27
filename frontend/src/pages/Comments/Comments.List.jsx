import React, {useEffect, useState} from "react";
import findMyComments from "../../utils/findMyComments";

const LoadReply = ({replies}) => {
    return (
        replies.map((v, k)=>{
            return <p style={{fontSize:"0.6rem", fontWeight:"bold"}} key={k}>{v.snippet.textOriginal}</p>
        })
    )
}
const ReplyButton = ({replies}) => {
    const [flag, setflag] = useState(false);
    return (<>
        <button onClick={()=>setflag(!flag)}>Replies</button>
        <div>{
            flag ?
                LoadReply({replies})
                    :
                null
            }
        </div>
    </>)
}
const CommentBlock = ({
    authorChannelUrl,
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    canRate,
    replies,
    channelId,
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

function CommentsList ({loading, commentData, myChannelId}) {
    const [myCommentData, setMyCommentData] = useState([]);
    useEffect(()=>{
        findMyComments({commentData, myChannelId, setMyCommentData});
    },[commentData]);
    return(
        <>
        <div>
            <h1>My Comments</h1>
            <pre>
            {
                myCommentData ?? null
            }
            </pre>
        </div>
        <div>
            <h1>Comments</h1>
            {
                commentData.map(({snippet:{ topLevelComment:{ snippet } }, replies}, key)=>(
                    <CommentBlock 
                        key={key} 
                        channelId={snippet.channelId}
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
        </>
    )
};

export default CommentsList;