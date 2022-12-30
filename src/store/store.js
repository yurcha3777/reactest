import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slice/userSlice";

const rootReducer = combineReducers({
 user:userSlice
})

 const setupStore= () => configureStore({
    reducer: rootReducer
})

export default setupStore();