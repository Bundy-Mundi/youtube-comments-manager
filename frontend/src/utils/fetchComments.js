import axios from "axios";
const fetchComments = async ({id, history, setCommentData, pages, setPages}) => {
    let url = `/api/v1/comments/of-video/${id}`;
    url = process.env.NODE_ENV === 'development' ? "http://localhost:4000" + url : url;
    url = pages ? url + `?pages=${pages}` : url;
    const res = await axios.get(url).catch(err => console.log(err));
    if(!res) history.replace("/errors/404?error=Invalid%20video%20ID%20is%20given")
    else {
        setCommentData(res.data.items);
        setPages(res.data.pageInfo.totalResults);
    }
}
export default fetchComments;