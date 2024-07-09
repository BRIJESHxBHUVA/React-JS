import React from 'react'
import { store } from './Store'
import { useSelector, useDispatch } from 'react-redux'
import { Increment, Decrement } from './Store'

const Tutorial = () => {

    const dispatch = useDispatch()
    const count = useSelector((state)=> state.count)

  return (
    <div className='main'>
        <div className="box">
            <h3>Counter</h3>

            <h4>Count: {count}</h4>

            <div className="btns">
                <button onClick={()=> dispatch(Increment())}>+</button>
                <button onClick={()=> dispatch(Decrement())}>-</button>
            </div>
        </div>
    </div>
  )
}


export default Tutorial
