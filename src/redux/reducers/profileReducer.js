let initialState={
    showNewPost:true,
    showDeletePost:'',
    inputNewPost:'',
    user:{
        id:'',
        name:'',
        city:'',
        email:'',
        tele:'',
    },
    posts:[]
}
const profileReducer=(state=initialState,action)=>{
    let stateCopy={
        ...state,
        user: {...state.user}
    }
    switch (action.type){
        case 'GET_USER':
            stateCopy.user={...action.user}
            stateCopy.posts=[...action.posts]
            stateCopy.posts.forEach(post=>{
                post.showComments=false
            })
            console.log(stateCopy.posts)
            return stateCopy
        case 'GET_COMMENTS':
            stateCopy.posts.forEach(post=>{
                action.data.forEach(comment=>{
                    if(post.id===comment.postId){
                        if(!post.comments){
                            post.comments=[]
                        }
                        post.comments.push(comment)
                    }
                })
            })
            return stateCopy
        case 'TOGGLE_COMMENTS':
            stateCopy.posts.forEach(post=>{
                if(post.id===action.postId){
                    post.showComments=!post.showComments
                }
            })
            return stateCopy
        default:
            return state
    }
}
export default profileReducer