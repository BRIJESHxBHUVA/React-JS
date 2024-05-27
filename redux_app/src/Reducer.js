import { Increment, Decrement } from "./Action";

const DefaultState = {

    count: 0

}

const Counter = (state = DefaultState, action)=> {

    switch(action.type) {

        case Increment:
            return{
                
                ...state,
                count: state.count + 1

            }

        case Decrement: 
            return{

                ...state,
                count: state.count > 0 ? state.count - 1 : state.count,
                

        }


        default: return state

    }

}

export default Counter;