import {applyMiddleware, combineReducers, createStore} from "redux";
import usersReducer from "./reducers/usersReducer";
import thunk from "redux-thunk";

const reducers=combineReducers({
    usersPage:usersReducer
})
const store=createStore(reducers,applyMiddleware(thunk))
export default store