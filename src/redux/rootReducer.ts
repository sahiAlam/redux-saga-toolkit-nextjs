import { combineReducers } from "@reduxjs/toolkit";
import usersReducer from "@/redux/slices/users.slice"

const rootReducer = combineReducers({
    users: usersReducer
})

export default rootReducer;