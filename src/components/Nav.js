import React from 'react'
import '../css/nav.css'

 
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div>
        <nav className='navBar'>
        <Link to="/"><h2 className='logo'><span>exam</span>inator</h2></Link>
  
        
         
        
          
        <ul className='nav-list' >


          <Link to="/login"><li className='nav-item' >student</li></Link>
          <Link to="/login"><li className='nav-item' >Teacher</li></Link>
          <Link to="/login"><li className='nav-item' >observer</li></Link>
        </ul>

        
      </nav>

      

    </div>
  )
}

export default Nav