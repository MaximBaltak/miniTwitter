import {connect} from "react-redux";
import Users from "./Users";
import actions from "../../redux/actions/action";

const mapStateToProps = state => {
    return {
        users: state.usersPage.filterUsers,
        value: state.usersPage.inputValue,
        modal: state.usersPage.modal,
        showModal: state.usersPage.showModal,
        errorGetUsers: state.usersPage.errorGetUsers,
    }
}
const mapDispatchToProps = dispatch => {
    return {
        inputValue: text => {
            dispatch(actions.inputSearch(text))
        },
        search: () => {
            dispatch(actions.searchUsers())
        },
        toggleModal: (to = '') => {
            dispatch(actions.toggleComplainModal(to))
        },
        submitModal: () => {
            dispatch(actions.submitComplain())
        },
        inputModal: text => {
            dispatch(actions.inputComplain(text))
        },
    }
}
const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)
export default UsersContainer