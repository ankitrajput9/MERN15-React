import { configureStore } from '@reduxjs/toolkit'
import counterSlice from "../feature/counterslice"

export const store = configureStore({
    reducer:{
        counter:counterSlice,
    }
})