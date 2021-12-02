const setLikeComment = (postId, commentId, value) => {
    return {
        type: 'SET_LIKE_COMMENT',
        postId,
        commentId,
        value
    }
}
export default setLikeComment