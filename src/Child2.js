import React, { useReducer } from 'react'
import CounterReducer from './CounterReducer'
import counterReducer from './CounterReducer'

const Child2 = () =>{
    let [state,dispatch] = useReducer(counterReducer,0)
    console.log(state)
    return(
        <div> 
            <h3>this is grand child using reducer</h3>
    <h3>counter value is {state}</h3>
            <button onClick={()=>dispatch('INCREMENT')}>increment reducer</button>

        </div>

    )
}
export default Child2