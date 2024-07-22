import React ,{useState}from 'react'


const Hooks = () => {
    const [count,setCount]=useState(0);
    const [input,setInput]=useState();
    const increm =()=>
    {
        setCount(count+1)
    }
    const dec=()=>{
        setCount(count-1)
    }
    const handlechange=(e)=>
    {
        setInput(e.target.value)
    }
  return (
    <div>
        <h1>UseState</h1>
        <button onClick={increm}>add</button>
        <button onClick={dec}>sub</button>
               
        <h1>{count}</h1>
        <input onChange={handlechange}></input>
       <h1>{input}</h1>
       
    </div>
  )
}

export default Hooks