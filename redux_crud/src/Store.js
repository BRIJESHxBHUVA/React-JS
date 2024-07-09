import {createStore, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk'
const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

export const Increment = ()=> ({type : 'INCREMENT'})
export const Decrement = ()=> ({type : 'DECREMENT'})

const InitialState =  {
    count : 0
}

const reducer = (state = InitialState, action) =>{

    switch(action.type){
        case 'INCREMENT': return{count : state.count + 1} 

        case 'DECREMENT': return{count : state.count - 1}

        default: return{count : state.count}
    }


}


export const store = createStore(reducer, applyMiddleware(thunk) )