import avatar from "../../img/avatar.png";

const initialState = {
    posts: [],
    errorGetPosts: false
}
const postsReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        posts: [...state.posts]
    }
    switch (action.type) {
        case 'GET_POSTS_ALL':
            stateCopy.posts = [...action.data]
            return stateCopy
        case 'GET_POSTS_ALL_ERROR':
            stateCopy.errorGetPosts = action.error
            return stateCopy
        case 'ADD_COMMENT_POSTS_PAGE':
            stateCopy.posts.forEach(post => {
                if (post.id === action.postId) {
                    if (post.inputComment) {
                        let comment = {
                            postId: post.id,
                            id: Math.floor(Math.random() * 1000),
                            body: post.inputComment,
                            countLikes: 0,
                            avatar: avatar
                        }

                        post.comments.push(comment)
                        post.inputComment = ''
                    }
                }
            })
            return stateCopy
        case 'SET_LIKE_POST_POSTS_PAGE':
            stateCopy.posts.forEach(post => {
                if (post.id === action.id) {
                    post.countLikes = post.countLikes + action.value
                }
            })
            return stateCopy
        case 'SET_LIKE_COMMENT_POSTS_PAGE':
            stateCopy.posts.forEach((post, i) => {
                if (post.id === action.postId) {
                    post.comments.forEach(comment => {
                        if (comment.id === action.commentId) {
                            comment.countLikes = comment.countLikes + action.value
                        }
                    })
                }
            })
            return stateCopy
        case 'INPUT_COMMENT_POSTS_PAGE':
            stateCopy.posts.forEach(post => {
                if (post.id === action.postId) {
                    post.inputComment = action.text
                }
            })
            return stateCopy
        case 'TOGGLE_COMMENTS_POSTS_PAGE':
            stateCopy.posts.forEach(post => {
                if (post.id === action.postId) {
                    post.showComments = !post.showComments
                }
            })
            return stateCopy
        default:
            return state
    }
}
export default postsReducer