import {connect} from "react-redux";
import Profile from "./Profile";
import actions from "../../redux/actions/action";

const mapStateToProps = state => {
    return {
        user: state.profilePage.user,
        posts: state.profilePage.posts,
        errorGetUser: state.profilePage.errorGetUser,
        errorGetComments: state.profilePage.errorGetComments,
        textNewPost: state.profilePage.inputNewPost
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showComments: postId => {
            dispatch(actions.toggleComments(postId))
        },
        changeNewPost: text => {
            dispatch(actions.inputNewPost(text))
        },
        changeNewComment: (text, postId) => {
            dispatch(actions.inputComment(text, postId))
        },
        addNewPost: () => {
            dispatch(actions.addPost())
        },
        addNewComment: (postId, userId) => {
            dispatch(actions.addComment(postId, userId))
        },
        deletePostId: id => {
            dispatch(actions.deletePost(id))
        },
        setPostLike: (id, value) => {
            dispatch(actions.setLikePost(id, value))
        },
        setCommentLike: (postId, commentId, value) => {
            dispatch(actions.setLikeComment(postId, commentId, value))
        }
    }
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)
export default ProfileContainer

