import React, {useEffect, useState} from "react";

const commentStyle = "text-4xl mb-3";

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
    return (
            <div className="p-4 mb-3 rounded-lg border bg-white overflow-hidden">
                <a className="mb-2" href={authorChannelUrl} target="_blank" rel="noreferrer">
                    <div className="flex items-center justify-between">
                        <p className="mb-2 text-3xl">{authorDisplayName}</p>
                        <p className="mb-2 text-sm">Updated At: {updatedAt}</p>
                    </div>
                    
                    <img className="rounded-full" src={authorProfileImageUrl} alt="" />
                </a>
                
                <p className="mt-10 mb-10 font-semibold text-lg">{text}</p>
                <p className="mb-2"><i className="far fa-thumbs-up"></i> {likeCount}</p>
                
                {
                replies ?
                    <ReplyButton replies={replies}/>
                        :
                    null
                }
            </div>
        )
}

function CommentsList ({ commentData }) {
    let myCommentData = [];
    // const [myCommentData, setMyCommentData] = useState([]);
    useEffect(()=>{
        /* Update myCommentData everytime commentData updates 
        
        // CODE HERE ...

        */
    },[commentData]);
    return(
        <div className="flex flex-col items-start justify-center w-full border rounded-lg bg-white p-6">
            <div>
                <h1 className={commentStyle}>My Comments</h1>
                <pre>
                {
                    myCommentData ?
                    myCommentData
                     :
                    "None"
                }
                </pre>
            </div>
            <div>
                <h1 className={commentStyle}>Comments</h1>
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
        </div>
    )
};

export default CommentsList;