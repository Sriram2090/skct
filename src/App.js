import React from 'react'
import {BrowserRouter,Routes,Route} from 'react-router-dom'

import Home from './Home/Home'
import SignInSide from './SignInSide/SignInSide'
import SignUp from './SignUp/SignUp'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInSide/>}>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Home" element={<Home/>}/>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App