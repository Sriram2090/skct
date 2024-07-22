import React,{useState} from 'react'

const Counter3 = () => {
    const [data, setdata] = useState(0);
   
    const handleclick = ()=>
    {
        setdata(data+1)
    }
    const decrement =()=>
    {
        setdata(data-1)
    }
  return (
    <div>
        <h1>Counter component: {data}</h1>
        <button onClick={handleclick}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>
  )
}

export default Counter3