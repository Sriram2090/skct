import React from 'react'
import Img1 from "../Images/sk1.jpg"
import './Login.css'
import { Navigate,useNavigate } from 'react-router-dom'
const Login = () => {
  
    const Navigate=useNavigate()
    const alt =()=>{
     alert("Login Successfull")
    }
    const navi =()=>
    {
        Navigate("/Home")
    }
 const naviHome =()=>
 {
  Navigate("/")
 }
 const handchange=(e)=>  
 {
  console.log(e.target.value)
 }
  return (
    
    
  <div className='form'>
  
  <img src={Img1} alt='images'></img>
  <form>
    <p></p>
    <label>Username : </label>
    <input onChange={handchange} type="text"></input> <br></br>
    <label>Password : </label>
    <input type="password"></input><br></br><p></p>
    <div className='button'>
   <button onClick={alt}>Login</button>
   <button onClick={naviHome}>Previous</button>
   </div>
  </form>
  
  </div>
    
  )
}

export default Login