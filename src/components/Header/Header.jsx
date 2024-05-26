import React from 'react'
import { Link } from 'react-router-dom'


const Header = () => {
  return (
    <nav className="header">
      <span>Header</span>
      <div>
        <span>
          <Link to="/">Home</Link>
        </span>
        <span>
          <Link to="/chart">Chart</Link>
        </span>
        <span>
            <Link to="/chartdetail">Chart Detail By Id</Link>
        </span>
      </div>
    </nav>

  )
}

export default Header