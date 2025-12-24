import { createSlice, isPlain } from "@reduxjs/toolkit";

const songSlice=createSlice({
    name:"music",
    initialState:{
        currentSong :null ,
        isPlaying:false
    },
    reducers:{
        currentSong :(state,action)=>{
            state.currentSong = action.payload;
            state.isPlaying = true;
        },
        isPlaying:(state,action)=>{
            state.isPlaying=action.payload;
        }
    }

})
export const {isPlaying,currentSong}= songSlice.actions;
export default songSlice.reducer ;