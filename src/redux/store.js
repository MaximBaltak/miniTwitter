import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./reducers/usersReducer";
import thunk from "redux-thunk";
import profileReducer from "./reducers/profileReducer";

const reducers=combineReducers({
    usersPage:usersReducer,
    profilePage: profileReducer
})
const store=createStore(reducers,applyMiddleware(thunk))
export default store