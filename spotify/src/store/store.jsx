import {configureStore} from "@reduxjs/toolkit"
import ToggleReducer from '../features/toggleSlice'
import dataReducer from "../features/dataSlice"
import musicReducer from "../features/songSlice"
export const store = configureStore({
    reducer:{
        toggle:ToggleReducer,
        data:dataReducer,
        music:musicReducer,
    }
})