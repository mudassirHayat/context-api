// import React from 'react';

// const Child = (props)=>{
//     return(
//      <div>
//          <h3>my first name is {props.first} </h3>
         
//      </div>
//     )
// }
// export default Child

//by using contex api

import React, { useContext } from 'react';
import ConterContext from './CounterContext';

const Child = ()=>{

    let counterValue = useContext(ConterContext)
    console.log(counterValue)
    return(
     <div>
         <h3>this is grand Child by using context api </h3>
    <h3>counter value is:{counterValue[0]}</h3>
    <button onClick ={()=> counterValue[1](++counterValue[0])}>increametn context</button>
         
     </div>
    )
}
export default Child



