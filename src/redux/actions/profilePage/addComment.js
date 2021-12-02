const addComment = (postId, userId) => {
    return {
        type: 'ADD_COMMENT',
        postId,
        userId
    }
}
export default addComment