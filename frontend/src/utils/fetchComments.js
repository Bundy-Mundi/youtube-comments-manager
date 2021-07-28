import axios from "axios";
const fetchByVideoIdURL = "/api/comments/of-video";

const fetchComments = async ({id, history, setCommentData}) => {
    let url = `${fetchByVideoIdURL}/${id}`;
    const res = await axios.get(url).catch(err => console.log(err));
    if(!res) history.replace("/404?error=Invalid%20video%20ID%20is%20given")
    else setCommentData(res.data.items);
}
export default fetchComments;