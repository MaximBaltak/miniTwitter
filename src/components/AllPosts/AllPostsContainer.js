import {connect} from "react-redux";
import actions from "../../redux/actions/action";
import AllPosts from "./AllPosts";

const mapStateToProps = state => {
    return {
        posts: state.postsPage.posts,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        showComments: postId => {
            dispatch(actions.showCommentsAll(postId))
        },
        changeNewComment: (text, postId) => {
            dispatch(actions.inputCommentAll(text, postId))
        },
        addNewComment: postId => {
            dispatch(actions.addCommentAll(postId))
        },
        setPostLike: (id, value) => {
            dispatch(actions.setLikePostsAll(id, value))
        },
        setCommentLike: (postId, commentId, value) => {
            dispatch(actions.setLikeCommentsAll(postId, commentId, value))
        }
    }
}

const AllPostsContainer = connect(mapStateToProps, mapDispatchToProps)(AllPosts)
export default AllPostsContainer

