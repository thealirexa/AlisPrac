import {configureStore} from "@reduxjs/toolkit";
import simpleReducer from "./Slices/SimpleSlice.ts"

export const store = configureStore({
    reducer: {
        simple: simpleReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
