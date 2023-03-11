import { createSlice } from "@reduxjs/toolkit";
import { cakeOrder } from "./cakeSlice";

const initialState = {
    count: 10
}

const icecreamSlice = createSlice({
    name: 'icecreams',
    initialState,
    reducers: {
        icecreamOrder: (state, action) => {
            state.count -= 1
        },
        restockIcecream: (state, action) => {
            state.count += action.payload
        }
    },
    extraReducers:(builder)=>{
        builder.addCase(cakeOrder,(state,action)=>{
            state.count--
        })
    }
})

export default icecreamSlice.reducer
export const { icecreamOrder, restockIcecream } = icecreamSlice.actions