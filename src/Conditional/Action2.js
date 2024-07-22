import React,{useState} from 'react'

const Action2 = () => {
    const [user,setUser]=useState("student")
    const handclick=()=>
    {
        setUser("")
    }
    const handle=()=>
    {
        setUser("student")
    }
  return (
    <div>
        {user ? 
       <h1>Welcome {user}</h1>:
       <h1>New User Please Login</h1> 
        }
        <button onClick={handclick}>log out</button>
        <button onClick={handle}>log in</button>
    </div>
  )
}

export default Action2