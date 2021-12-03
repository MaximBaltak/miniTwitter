const showCommentsAll = postId => {
    return {
        type: 'TOGGLE_COMMENTS_POSTS_PAGE',
        postId
    }
}
export default showCommentsAll