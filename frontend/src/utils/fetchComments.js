import axios from "axios";
const fetchComments = async ({id, history, setCommentData}) => {
    let url = `/api/v1/comments/of-video/${id}`;
    const res = await axios.get(url).catch(err => console.log(err));
    if(!res) history.replace("/404?error=Invalid%20video%20ID%20is%20given")
    else setCommentData(res.data.items);
}
export default fetchComments;