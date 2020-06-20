// import React from 'react';
// import Child from './Child';

// const Parent = (props) =>{
//     return(
//         <Child first= {props.first}/>  //without using context api if we send data from grand parent to grand child we have to pas it to parent also 
//     )
// }



// export default Parent


//by using context api
import React from 'react';
import Child from './Child';
import Child2 from './Child2';

const Parent = () =>{
    return(
        <div>
       <Child />
       <Child2/>
       </div>
    )
}
export default Parent
