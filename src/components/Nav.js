import React from 'react'
import '../css/nav.css'

 
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div>
        <nav className='navBar'>
        <Link to="/"><h2 className='logo'><span>exam</span>inator</h2></Link>
  
        
         
        
          
        <ul className='nav-list' >


          <Link to="/login-student"><li className='nav-item' >student</li></Link>
          <Link to="/login-teacher"><li className='nav-item' >Teacher</li></Link>
          <Link to="/login-observer"><li className='nav-item' >proctor</li></Link>
          <Link to="/login-admin"><li className='nav-item admin-btn' >admin</li></Link>
         
        </ul>

        
      </nav>

      

    </div>
  )
}

export default Nav