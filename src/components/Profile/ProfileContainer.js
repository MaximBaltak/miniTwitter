import {connect} from "react-redux";
import Profile from "./Profile";
import actions from "../../redux/actions/action";

const mapStateToProps=state=>{
    return{
        user: state.profilePage.user,
        posts:state.profilePage.posts,
        textNewPost:state.profilePage.inputNewPost,
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        showComments: postId=>{
            dispatch(actions.toggleComments(postId))
        },
        changeNewPost: text=>{
            dispatch(actions.inputNewPost(text))
        },
        changeNewComment: (text,postId)=>{
            dispatch(actions.inputComment(text,postId))
        },
        addNewPost: ()=>{
            dispatch(actions.addPost())
        },
        addNewComment: postId=>{
            dispatch(actions.addComment(postId))
        },
        deletePostId:id=>{
            dispatch(actions.deletePost(id))
        }


    }
}

const ProfileContainer=connect(mapStateToProps,mapDispatchToProps)(Profile)
export default ProfileContainer

