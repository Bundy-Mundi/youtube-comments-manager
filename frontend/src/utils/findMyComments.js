const findMyComments = async ({commentData, myChannelId, setMyCommentData}) => {
    let result = [];
    commentData.map(({snippet:{ topLevelComment:{ snippet } }, replies}, key)=>{
        if(snippet.authorChannelId.value === myChannelId)
            result.push(snippet.authorChannelId.value)
    })
    setMyCommentData(result);
}

export const findMyCommentsV2 = async ({commentData, myChannelId, setMyCommentData}) => {
    let result = [];
    result = commentData.find(({snippet:{ topLevelComment:{ snippet } }, replies}, key)=>snippet.authorChannelId.value === myChannelId)
    setMyCommentData(result);
}

export default findMyComments;