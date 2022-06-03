import React from 'react'
import '../css/header.css'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='header'>
        <nav>
            <Link to='/'>
            <h3 className='logo'> <span>exam</span>inator</h3>
            </Link>
            
            <ul>
                <Link to='/login'><li className='list-item' >Student</li></Link>
                <Link to='login'><li className='list-item' >Teacher</li></Link>
                <Link to='login'><li className='list-item' >Watcher</li></Link>
            </ul>
        </nav>

    </div>
  )
}

export default Header