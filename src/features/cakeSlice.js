import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    count: 5
}

const cakeSlice = createSlice({
    name: 'cakes',
    initialState,
    reducers: {
        cakeOrder: (state, action) => {
            state.count -= 1
        },
        restockCake: (state, action) => {
            state.count += action.payload
        }
    }

})

export default cakeSlice.reducer
export const { cakeOrder, restockCake } = cakeSlice.actions