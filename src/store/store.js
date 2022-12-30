import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userSlice} from "../slice/userSlice";

const rootreducer = combineReducers({

})

export const store = configureStore({
    reducer:{
        user:userSlice,
    }
})