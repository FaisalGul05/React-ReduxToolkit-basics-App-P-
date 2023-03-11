import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { cakeOrder, restockCake } from './cakeSlice'

const CakeView = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.cake)
    // console.log(state)
    return (
        <>
            <h1>Cake view</h1>
            <h2>{state.count}</h2>
            <button onClick={()=>dispatch(cakeOrder())}>Order</button>
            <button onClick={()=>dispatch(restockCake(10))}>Re stock</button>

        </>
    )
}

export default CakeView