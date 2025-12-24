import { createSlice } from "@reduxjs/toolkit";

const songSlice=createSlice({
    name:"music",
    initialState:{
        currentSong :null ,
        isPlaying:false
    },
    reducers:{
        setSong :(state)=>{
            if(currentSong){
                state.isPlaying = true
             return
            }
            state.isPlaying = false
        }
    }

})
export const {setSong}= songSlice.actions;
export default songSlice.reducer ;