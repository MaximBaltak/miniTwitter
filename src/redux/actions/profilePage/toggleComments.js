const toggleComments = postId => {
    return {
        type: 'TOGGLE_COMMENTS',
        postId
    }
}
export default toggleComments