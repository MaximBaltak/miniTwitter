import avatar from './../../img/avatar.png'

let initialState = {
    showNewPost: true,
    showDeletePost: '',
    inputNewPost: '',
    user: {
        id: '',
        name: '',
        city: '',
        email: '',
        tele: '',
    },
    posts: [],
    errorGetUser: false,
    errorGetComments: false
}
const profileReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        user: {...state.user},
        posts: [...state.posts]
    }
    switch (action.type) {
        case 'GET_USER':
            stateCopy.user = {...action.user}
            stateCopy.posts = [...action.posts]
            stateCopy.posts.forEach(post => {
                post.showComments = false
                post.inputComment = ''
                post.countLikes = 0
            })
            return stateCopy
        case 'GET_USER_ERROR':
            stateCopy.errorGetUser = action.error
            return stateCopy
        case 'GET_COMMENTS':
            stateCopy.posts.forEach(post => {
                action.data.forEach(comment => {
                    if (post.id === comment.postId) {
                        if (!post.comments) {
                            post.comments = []
                        }
                        comment.countLikes = 0
                        post.comments.push(comment)
                    }
                })
            })
            return stateCopy
        case 'GET_COMMENTS_ERROR':
            stateCopy.errorGetComments = action.error
            return stateCopy
        case 'TOGGLE_COMMENTS':
            stateCopy.posts.forEach(post => {
                if (post.id === action.postId) {
                    post.showComments = !post.showComments
                }
            })
            return stateCopy
        case 'INPUT_NEW_POST':
            stateCopy.inputNewPost = action.text
            return stateCopy
        case 'INPUT_COMMENT':
            stateCopy.posts.forEach(post => {
                if (post.id === action.postId) {
                    post.inputComment = action.text
                }
            })
            return stateCopy
        case 'ADD_POST':
            if (stateCopy.inputNewPost) {
                let post = {
                    userId: 1,
                    id: Math.floor(Math.random() * 1000),
                    body: stateCopy.inputNewPost,
                    showComments: false,
                    inputComment: '',
                    countLikes: 0
                }
                stateCopy.posts.unshift(post)
                stateCopy.inputNewPost = ''
            }
            return stateCopy
        case 'DELETE_POST':
            stateCopy.posts.forEach((post, i) => {
                if (post.id === action.id) {
                    stateCopy.posts.splice(i, 1)
                }
            })
            return stateCopy
        case 'ADD_COMMENT':
            stateCopy.posts.forEach(post => {
                if (post.id === action.postId) {
                    if (post.inputComment) {
                        let comment = {
                            postId: post.id,
                            id: Math.floor(Math.random() * 1000),
                            body: post.inputComment,
                            countLikes: 0,
                            fromUserId: action.userId,
                            avatar: avatar,
                        }
                        if (!post.comments) {
                            post.comments = []
                        }
                        post.comments.push(comment)
                        post.inputComment = ''
                    }

                }
            })
            return stateCopy
        case 'SET_LIKE_POST':
            stateCopy.posts.forEach(post => {
                if (post.id === action.id) {
                    post.countLikes = post.countLikes + action.value
                }
            })
            return stateCopy
        case 'SET_LIKE_COMMENT':
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
        default:
            return state
    }
}
export default profileReducer