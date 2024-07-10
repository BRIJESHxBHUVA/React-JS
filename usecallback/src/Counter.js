import React, { useCallback, useState } from 'react'
import Counter2 from './Counter2'

const Counter = () => {

    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(0)

    const handleClick = ()=> {
        setCount(count + 1)
    }

    const HandleCounter = useCallback(()=>{
        setCount2(count2 + 1)
    },[count2])

  return (
    <>
    <h3>Counter with useCallback</h3>
    <div className='main'>
        <div className="box">
            <h3>Counter: {count}</h3>
            <button onClick={handleClick}>+</button>
        </div>
        <div className="box">
            <Counter2 count2={count2} HandleCounter={HandleCounter}/>
        </div>
    </div>
    </>
  )
}

export default Counter
