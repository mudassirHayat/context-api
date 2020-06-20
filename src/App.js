// import React from 'react';
// import Parent from './Parent';

// function App(){
//   return(
//      <Parent first= 'mudassar hayat' />
//   );
// }
// export default App

//now by using context api

import React, { useState } from 'react';
import Parent from './Parent';
import CounterContext from './CounterContext';

function App(){
  // let [count,setCount] = useState(40);  //we can change state of grand parent by using grand child
  let countState = useState(0);  //give an array
   return(
      <CounterContext.Provider value = {countState}>
        <Parent/>
        </CounterContext.Provider> 
   );

}
export default App

