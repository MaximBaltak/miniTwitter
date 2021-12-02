import axios from "axios";

const getComments=postId=>{
    return dispatch=>{

       axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
           .then(({data})=>dispatch({type:"GET_COMMENTS",data,postId}))

    }
}
export default getComments