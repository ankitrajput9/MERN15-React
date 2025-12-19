import {configureStore } from "@reduxjs/toolkit"
import authSlice from "../feature/authSlice"
import cartSlice from "../feature/cartSlice"
import toggleSlice from "../feature/toggleslice"


 export let store = configureStore(
    {
        reducer:{
            auth:authSlice,
            cart:cartSlice,
            toggle:toggleSlice,
        }
    }
)