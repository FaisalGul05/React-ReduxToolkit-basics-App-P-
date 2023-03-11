import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Post from './Post'
import { fetchPosts } from './postSlice'

const PostList = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.post)
    console.log(state)
    
    useEffect(()=>{
        dispatch(fetchPosts())
    },[])

    let content
    if(state.status=='succeeded'){
        content=state.posts.map(post=>(
            <Post/>
        ))
    }

    return (
        <>
        <div>PostList</div>
        {state.status === 'loading' && <h1>... Loading</h1>}

        </>
    )
}

export default PostList