const findMyComments = async ({commentData, myChannelId, setMyCommentData}) => {
    let result = [];
    commentData.map(({snippet:{ topLevelComment:{ snippet } }, replies}, key)=>{
        if(snippet.authorChannelId.value === myChannelId)
            result.push(snippet.authorChannelId.value)
    })
    setMyCommentData(result);
}

export default findMyComments;