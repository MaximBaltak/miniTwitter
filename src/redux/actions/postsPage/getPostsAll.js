import axios from "axios";

const getPostsAll = () => {
    return async dispatch => {
        dispatch({type: 'LOADER'})
        let {data: posts} = await axios.get(`https://jsonplaceholder.typicode.com/posts`)
        let {data: comments} = await axios.get(`https://jsonplaceholder.typicode.com/comments`)
        let {data: photos} = await axios.get(`https://jsonplaceholder.typicode.com/photos`)
        let data = [...posts]
        data.forEach(post => {
            post.showComments = false
            post.inputComment = ''
            post.countLikes = 0
            photos.forEach(photo => {
                if (post.id === photo.id) {
                    post.avatar = photo.url
                }
            })
            comments.forEach(comment => {
                if (post.id === comment.postId) {
                    post.comments = []
                    comment.countLikes = 0
                    post.comments.push(comment)
                }
            })

        })
        dispatch({type: 'GET_POSTS_ALL', data})
        dispatch({type: 'LOADER'})
    }
}
export default getPostsAll