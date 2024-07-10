import React, { memo } from 'react'

const Counter2 = ({count2, HandleCounter}) => {

    console.log("counter increment")

  return (
    <>
       <h3>Counter: {count2}</h3>
       <button onClick={HandleCounter}>+</button>
    </>
  )
}

export default memo(Counter2)
