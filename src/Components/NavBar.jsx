import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='navbar-div'>
        <nav>
            <ul>
                <li className='navbar-item'><Link to='/'>Home</Link></li>
                <li className='navbar-item'><Link to= '/history'>History</Link></li>
                <li className='navbar-item'><Link to= '/today'>Today</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar