import React, { useState } from 'react'

const withCounter =(WrappedComponent)=>
{
    return(props)=>
    {
        const[count,setCount]=useState(0);
        
        const incrementCount=()=>
        {
            setCount((prevCount)=>prevCount+1);
        };
        return(
            <WrappedComponent 
            count={count}
            incrementCount={incrementCount}
            {...props}/>
        );
    };
};
const DisplayCounter =({count,incrementCount})=>
(
    <div>
        <p>HOC</p>
        <p>Count:{count}</p>
        <button onClick={incrementCount}>Increment</button>
    </div>
);
const HigherOrderComponent=withCounter(DisplayCounter);
export default HigherOrderComponent;