import React, { useEffect } from 'react'
import CakeView from '../features/CakeView'
import Icecreamview from '../features/Icecreamview'
import PostList from '../features/posts/PostList'

const Home = () => {

    return (
        <>
            <div>Home</div>
            <CakeView />
            <Icecreamview />
            {/* <PostList /> */}
        </>
    )
}

export default Home