import React from 'react'
import {Outlet,Link} from "react-router-dom";
const Layout = () => {
  return (
    <div>
        <nav>
            <ul>
                <li>
                    <Link to="/Home">Home</Link>
                </li>
                <li>
                    <Link to="/Signup">Signup</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default Layout