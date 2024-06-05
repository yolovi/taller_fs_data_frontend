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
          <Link to="/ChartGender">Chart Gender</Link>
        </span>
        {/* <span>
          <Link to="/ChartProductCategory">Chart Product Category</Link>
        </span>
        <span>
            <Link to="/ChartPaidMethod">Chart Paid Method</Link>
        </span> */}
      </div>
    </nav>

  )
}

export default Header