import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    firstName: '',
    lastName: ''
}


 const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        setFirstName:(state, action) => {
            state.firstName = action.payload
        },

    }
});
  {setFirstName} = userSlice.actions
export

