type OrderType = 'time' | 'relevance';

export const getCommentThreadsUrl = (videoID:string, order: OrderType, apiKey:string, pageToken?:string):string => {
    return `https://www.googleapis.com/youtube/v3/commentThreads?part=id,replies,snippet&videoId=${videoID}&order=${order}&key=${apiKey}${pageToken ? `?pageToken=${pageToken}` : ""}`;
};
export const getMyCommentThreadsUrl = (videoID:string, order: OrderType) => {
    return `https://www.googleapis.com/youtube/v3/commentThreads?part=id,replies,snippet&videoId=${videoID}&order=${order}`;
};
export const getCommentUrl = (id:string, apiKey: string):string => {
    return `https://www.googleapis.com/youtube/v3/comments?part=id,snippet&id=${id}&key=${apiKey}`
};
export const getCommentWithRepliesUrl = (parentID:string, apiKey:string):string => {
    return `https://www.googleapis.com/youtube/v3/comments?part=id,snippet&parentId=${parentID}&key=${apiKey}`;
};
