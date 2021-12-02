const setLikePost = (id, value) => {
    return {
        type: 'SET_LIKE_POST',
        id, value
    }
}
export default setLikePost