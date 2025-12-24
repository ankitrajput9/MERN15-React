import {configureStore} from "@reduxjs/toolkit"
import ToggleReducer from '../features/toggleSlice'

export const store = configureStore({
    reducer:{
        toggle:ToggleReducer
    }
})