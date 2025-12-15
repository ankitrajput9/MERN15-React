import { configureStore } from '@reduxjs/toolkit'

export const store = configureStore({
    reduser:{
        count:counterReducer
    }
})