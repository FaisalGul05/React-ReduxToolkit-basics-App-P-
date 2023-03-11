import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { sub } from "date-fns";


const POST_URL = 'https://jsonplaceholder.typicode.com/posts'

const initialState = {
    posts: [],
    status: 'idle', //'idle' | 'loading' | 'succeeded' | 'failed'
    error: null
}

export const fetchPosts = createAsyncThunk('post/fetchPosts', async () => {
    const response = await axios.get(POST_URL)
    return response.data
})

const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.pending, (state, action) => {
            state.status = 'loading'
        })
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            let min = 1
            state.status = 'succeeded'
            const loadedPosts = action.payload.map(post => {
                post.date = sub(new Date(), { minutes: min++ }).toISOString();
                return post
            })
            state.posts = [...loadedPosts]
        })
        builder.addCase(fetchPosts.rejected, (state, action) => {
            state.status = 'failed'
            state.error = action.error.message
        })
    }
})


export default postSlice.reducer
