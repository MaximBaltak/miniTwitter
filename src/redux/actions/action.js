import getUsers from "./usersPage/getUsers";
import inputSearch from "./usersPage/inputSearch";
import searchUsers from "./usersPage/searchUsers";
import toggleComplainModal from "./usersPage/toggleComplainModal";
import submitComplain from "./usersPage/submitModal";
import inputComplain from "./usersPage/inputComplain";
import getUser from "./profilePage/getUser";
import getComments from "./profilePage/getComments";
import toggleComments from "./profilePage/toggleComments";
import addComment from "./profilePage/addComment";
import addPost from "./profilePage/addPost";
import deletePost from "./profilePage/deletePost";
import inputComment from "./profilePage/inputComment";
import inputNewPost from "./profilePage/inputNewPost";
import setLikePost from "./profilePage/setLikePost";
import setLikeComment from "./profilePage/setLikeComment";
import setAuth from "./profilePage/setAuth";

const actions = {
    getUsers,
    inputSearch,
    searchUsers,
    toggleComplainModal,
    submitComplain,
    inputComplain,
    getUser,
    getComments,
    toggleComments,
    addComment,
    addPost,
    deletePost,
    inputComment,
    inputNewPost,
    setLikePost,
    setLikeComment,
    setAuth,
}
export default actions