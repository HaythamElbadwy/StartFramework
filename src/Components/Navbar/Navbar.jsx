import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className='flex justify-between items-center p-9 fixed navbar-expand-lg w-full'>
    <div className='title'>
      
        <Link to={''} className='text-white'>START FRAMEWORK</Link>
      
    </div>
    <div>
      <ul className='flex'>
        <li className='mx-3'>
          <NavLink to={'/about'} className='text-white'>ABOUT</NavLink>
        </li>
        <li className='mx-3'>
          <NavLink to={'/portfolio'} className='text-white'>PORTFOLIO</NavLink>
        </li>
        <li className='mx-3'>
          <NavLink to={'/contact'} className='text-white'>CONTACT</NavLink>
        </li>
      </ul>
    </div>
  </nav>
  )
}
