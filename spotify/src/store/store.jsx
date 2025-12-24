import {configureStore} from "@reduxjs/toolkit"
import ToggleReducer from '../features/toggleSlice'
import dataReducer from "../features/dataSlice"
export const store = configureStore({
    reducer:{
        toggle:ToggleReducer,
        data:dataReducer
    }
})