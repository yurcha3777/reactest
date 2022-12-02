import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    count2: 0
};

const count2Slice = createSlice({
    name: 'count2Slice',
    initialState,
    reducers: {
        inc: (state, action) => {
            ++state.count2
        },
        dec: (state, action) => {
            --state.count2
        },
        reset: (state, action) => {
            state.count2 = 0
        }
    }
})

const {reducer:count2Reducer, actions:{inc,dec,reset}} = count2Slice;

const count2Actions = {
    inc,
    dec,
    reset
}

export {
    count2Actions,
    count2Reducer
};