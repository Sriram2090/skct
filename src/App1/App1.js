import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Signup from '../Singup/Signup'
import Login from '../Login/Login'
import Home from '../Home/Home'

import SignInSide from '../Signin.js/StyleComponent'

const App1=() => {
  return (
    <div> <BrowserRouter>
    <Routes>
        <Route path="/" element={<SignInSide/>}></Route>
      <Route path="/Signup" element={<Signup/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/Home" element={<Home/>}>
      </Route>
    </Routes>
    </BrowserRouter></div>
  )
}

export default App1