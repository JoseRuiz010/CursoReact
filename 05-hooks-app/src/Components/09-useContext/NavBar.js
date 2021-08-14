import React from 'react'
import {
    Link,NavLink
} from "react-router-dom";
export const NavBar = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              
              <NavLink exact activeClassName='active'className='nav-item nav-link'  to='./'>Home</NavLink>
              
              
              <NavLink exact activeClassName='active' className='nav-item nav-link' to='./About'>About</NavLink>
             
             
              <NavLink exact activeClassName='active' className='nav-item nav-link' to='./Login'> Login </NavLink>
               
               
            </ul>
          </div>
        </div>
      </nav>

    )
}
  /*
            <nav>
                <ul>
                    <li><Link to='./'>Home</Link></li>
                    <li><Link to='./About'>About</Link></li>
                    <li><Link to='./Login'>Login</Link></li>
                    <li></li>
                </ul>
            </nav>
*/