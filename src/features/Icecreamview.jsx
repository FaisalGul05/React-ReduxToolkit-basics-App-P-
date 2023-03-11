import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { icecreamOrder, restockIcecream } from './icecreamSlice'

const Icecreamview = () => {
    const dispatch = useDispatch()
    const state = useSelector(state => state.icecream)
    // console.log(state)
    return (
        <>
            <h1>Icecream view</h1>
            <h2>{state.count}</h2>
            <button onClick={()=>dispatch(icecreamOrder())}>Order</button>
            <button onClick={()=>dispatch(restockIcecream(10))}>Re stock</button>
        </>
    )
}

export default Icecreamview