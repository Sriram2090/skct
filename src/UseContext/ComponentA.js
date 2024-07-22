
import React, { useContext, useState } from 'react'
import MyContext from './MyContext'

const ComponentA = () => {
    const {myValue,setMyValue}=useContext(MyContext)
    const [color,setColor]=useState("red")
    const change=()=>
    {
        setMyValue('new value')  
       
    }
    const changecolor=()=>
    {
        setColor("blue")
    }

  return (
    <div>
        <p style={{color:color}}>enter value: {myValue}</p>
        <button onClick={change}> change</button>
        <button onClick={changecolor}> changecolor</button>
    </div>
  )
}

export default ComponentA