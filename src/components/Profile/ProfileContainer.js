import {connect} from "react-redux";
import Profile from "./Profile";
import actions from "../../redux/actions/action";

const mapStateToProps=state=>{
    return{
        user: state.profilePage.user,
        posts:state.profilePage.posts
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        showComments: postId=>{
            dispatch(actions.toggleComments(postId))
        }
    }
}

const ProfileContainer=connect(mapStateToProps,mapDispatchToProps)(Profile)
export default ProfileContainer

