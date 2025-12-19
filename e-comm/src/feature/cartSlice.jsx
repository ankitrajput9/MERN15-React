import {createSlice } from "@reduxjs/toolkit"


let cartSlice = createSlice({
    name:"cart",
    initialState:{
        cart:[],
    },
    reducers:{
        addtocart:(state,action)=>{
            state.cart.push(action.payload)

        },
        removefromcart:()=>{
        state.cart = []
        }
    }
})

export let {addtocart,removefromcart}=cartSlice.actions
export default cartSlice.reducer