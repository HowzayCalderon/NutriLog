import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div>
        <nav>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to= '/history'>History</Link></li>
                <li><Link to= '/today'>Today</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar