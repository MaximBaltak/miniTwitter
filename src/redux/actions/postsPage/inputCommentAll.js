const inputCommentAll = (text, postId) => {
    return {
        type: 'INPUT_COMMENT_POSTS_PAGE',
        text,
        postId
    }
}
export default inputCommentAll