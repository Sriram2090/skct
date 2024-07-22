import React from 'react'
import { useNavigate } from 'react-router-dom'
const Signup =() => {
  const navigate=useNavigate()

    const handclick=()=>
    {
      navigate("/Login")
    }
    const handchange=(e)=>
 {
  console.log(e.target.value)
 }
  
  return (
    <div>
        <center>
        <h1>Singup Form</h1>
        <h1>Hello</h1>
        
        
        <form>
            <label>FirstName : </label>
            <input onChange={handchange}></input> <br></br>
            <label>LastName : </label>
            <input></input> <br></br>
          <label>Username : </label>
          <input></input> <br></br>
          <label>Password : </label>
          <input></input> <br></br>
          <lable>Input : </lable>
        </form>
          <button onClick={handclick}>Submit</button> 
          </center>
          
    </div>
  )
}

export default Signup