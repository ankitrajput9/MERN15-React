import { createSlice } from "@reduxjs/toolkit";

// const userFromStorage = 


const authSlice = createSlice({
    name: "auth",
    initialState: {
        user: JSON.parse(localStorage.getItem("log user")) || null
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        logOut: (state) => {
            state.user = null;
        }
    }
})
export const { setUser, logOut } = authSlice.actions;
export default authSlice.reducer;