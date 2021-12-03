import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./reducers/usersReducer";
import thunk from "redux-thunk";
import profileReducer from "./reducers/profileReducer";
import postsReducer from "./reducers/postsReducer";


const reducers = combineReducers({
    usersPage: usersReducer,
    profilePage: profileReducer,
    postsPage: postsReducer
})

const store = createStore(reducers, applyMiddleware(thunk))
export default store