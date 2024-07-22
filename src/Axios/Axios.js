import React,{useState} from 'react'
import axios from 'axios'
const Axios = () => {
  const [apidata,setApidata]=useState()
  const [date,setDate]=useState()
  const [ready,setReady]=useState()
  const [poor,setPoor]=useState()
  const [safety,setSafety]=useState()
  const [that,setThat]=useState()
  const [safe,setSafe]=useState()
    axios.get('https://jsonplaceholder.typicode.com/todos')
    .then(response=>{
      setApidata(response.data[0].title)
      setDate(response.data[1].title)
      setReady(response.data[2].title)
      setSafe(response.data[3].title)
      
      console.log("axios----->>>>>>>>>>.",response)
    }
    
     )
  
     
  return (
    <div>
        <h1>hello</h1>
        <h1>{apidata}</h1>
        <h1>{date}</h1>
        <h1>{ready}</h1>
        <h1>{safe}</h1>
    </div>
  )
}

export default Axios