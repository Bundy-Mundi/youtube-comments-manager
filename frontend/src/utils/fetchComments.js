import axios from "axios";
const HOST_BASEURL = "http://127.0.0.1/api/v1";
const fetchByVideoIdURL = `comments/of-video`;
const fetchComments = async ({id, history, setCommentData}) => {
    let url = `${HOST_BASEURL}/${fetchByVideoIdURL}/${id}`;
    console.log(url)
    const res = await axios.get(url).catch(err => console.log(err));
    if(!res) history.replace("/404?error=Invalid%20video%20ID%20is%20given")
    else setCommentData(res.data.items);
}
export default fetchComments;