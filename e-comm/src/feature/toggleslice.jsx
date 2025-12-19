
import { createSlice } from "@reduxjs/toolkit"

let toggleSlice = createSlice({
    name:'toggle',
initialState:{
    toggle:true
},
reducers:{
    setToggle:(state,action)=>{
        state.toggle = action.payload
    }
}
})

export let {setToggle}= toggleSlice.actions;
export default toggleSlice.reducer