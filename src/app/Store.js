import { configureStore } from "@reduxjs/toolkit";
import CakeReducer from '../features/cakeSlice'
import IcecreamReducer from '../features/icecreamSlice'
import PostReducer from '../features/posts/postSlice'

const store = configureStore({
    reducer: {
        cake: CakeReducer,
        icecream: IcecreamReducer,
        post: PostReducer
    }
})

export default store