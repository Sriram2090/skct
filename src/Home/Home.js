import React from 'react'
import Img1 from "../Images/mail.jpg"
import { useNavigate } from 'react-router-dom'
const Home = () => {
  const Navigate=useNavigate()
  const naviLogin =()=>
  {
    Navigate("/Login")
  }
  return (
    <div>
        <h1>Welcome to Skct</h1>
        <img src={Img1} alt='im'></img> <br></br>
        <a href="https://www.skct.edu.in/#/">Click Here</a>
        <br></br>
        <button onClick={naviLogin}>cancel</button>
    </div>
  )
}

export default Home