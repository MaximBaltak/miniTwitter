const initialState = {
    users: [],
    inputSearch: '',
    filterUsers: [],
    showModal: false,
    modal: {
        from: 'Максим Балтак',
        to: '',
        error: false,
        inputComplain: ''
    }
}
const usersReducer = (state = initialState, action) => {
    let stateCopy = {
        ...state,
        modal: {...state.modal}
    }
    switch (action.type) {
        case 'GET_USERS':
            stateCopy.users = [...action.users]
            stateCopy.filterUsers = [...action.users]
            return stateCopy
        case 'INPUT_VALUE':
            stateCopy.inputSearch = action.text
            return stateCopy
        case 'SEARCH':
            let filter = stateCopy.users.filter(user => user.name.includes(stateCopy.inputSearch))
            stateCopy.filterUsers = [...filter]
            return stateCopy
        case 'TOGGLE_MODAL':
            if (stateCopy.showModal) {
                stateCopy.showModal = !stateCopy.showModal
            } else {
                stateCopy.modal.to = action.to
                stateCopy.showModal = !stateCopy.showModal
            }
            return stateCopy
        case 'SUBMIT_COMPLAIN':
            if (!stateCopy.modal.inputComplain) {
                stateCopy.modal.error = true
            } else {
                console.log({
                    from: stateCopy.modal.from,
                    against: stateCopy.modal.to,
                    message: stateCopy.modal.inputComplain
                })
                stateCopy.modal.to = ''
                stateCopy.modal.inputComplain = ''
                stateCopy.modal.error = false
                stateCopy.showModal = !stateCopy.showModal
            }
            return stateCopy
        case 'INPUT_COMPLAIN':
            stateCopy.modal.inputComplain = action.text
            return stateCopy
        default:
            return state
    }
}
export default usersReducer