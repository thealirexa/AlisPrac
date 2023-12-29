import {createSlice, PayloadAction} from "@reduxjs/toolkit";

interface SimpleState {
    value: string
}


const initialState: SimpleState = {
    value: ""
}

const simpleSlice = createSlice({
    name: "simple",
    initialState,
    reducers: {
        write: (state, {payload}: PayloadAction<string>) => {
            state.value = payload
        }
    }
})

export const {write} = simpleSlice.actions

export default simpleSlice.reducer;