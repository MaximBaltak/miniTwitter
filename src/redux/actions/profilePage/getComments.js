import axios from "axios";

const getComments = postId => {
    return dispatch => {
        dispatch({type: 'LOADER'})
        if (postId === '9872') {
            let data = {
                postId: 9872,
                id: 91828,
                body: "Зима будет холодной)"
            }
            dispatch({type: "GET_COMMENTS", data, postId})
        } else {
            axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(({data}) => dispatch({type: "GET_COMMENTS", data, postId}))
        }
        dispatch({type: 'LOADER'})
    }
}
export default getComments