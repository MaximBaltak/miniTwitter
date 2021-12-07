const initialState= {
    loader: false,
    auth: !!localStorage.getItem('token'),
    lastUserPath: localStorage.getItem('path'),
}
const titleReducer=(state=initialState,action)=>{
    let stateCopy={...state}
    switch (action.type){
        case 'SET_AUTH':
            stateCopy.auth = !stateCopy.auth
            return stateCopy
        case 'LOADER':
            stateCopy.loader = !stateCopy.loader
            return stateCopy
        default:
            return state
    }
}
export default titleReducer