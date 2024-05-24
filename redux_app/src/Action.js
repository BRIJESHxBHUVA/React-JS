// import { type } from "@testing-library/user-event/dist/type"

export const Increment = 'Increment'
export const Decrement = 'Decrementx'

export const increment = ()=> ({
    
        type: Increment
})

export const decrement = ()=> ({
   
        type: Decrement
})