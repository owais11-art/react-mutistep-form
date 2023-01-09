import React from 'react'
import { NavLink } from 'react-router-dom'
import { data } from '../data/site-data'
import { Nav } from '../styled-components/Navbar.styled'

const Navbar = ({ isMobileNav }) => {
  return (
    <Nav className={isMobileNav && "mobile-nav"}>
        {data.navigation.map(nav => (
            <NavLink 
              className={({ isActive }) => isActive ? "nav-item active" : "nav-item"} 
              key={nav.id} 
              to={nav.path}
             >
              <div className="nav-id">{nav.id}</div>
              <div className="nav-text">
                <div className="nav-head">STEP {nav.id}</div>
                <div className="nav-name">{nav.name.toUpperCase()}</div>
              </div>
            </NavLink>
        ))}
    </Nav>
  )
}

export default Navbar