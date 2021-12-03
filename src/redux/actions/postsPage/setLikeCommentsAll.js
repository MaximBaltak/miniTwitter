const setLikeCommentsAll = (postId, commentId, value) => {
    return {
        type: 'SET_LIKE_COMMENT_POSTS_PAGE',
        postId,
        commentId,
        value
    }
}
export default setLikeCommentsAll