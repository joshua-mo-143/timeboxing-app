import React from 'react'

type Props = {}

const Navbar = (props: Props) => {
  return (
    <nav className='navbar'>
        <h1 className='navbar-logo'>Meme.</h1>
        <ul className='navbar-list'>
            <li className='navbar-list-item'>
                Dashboard
            </li>
            <li className='navbar-list-item'>
                Tasks
            </li>
            <li className='navbar-list-item'>
                Calendar
            </li>
        </ul>
    </nav>
  )
}

export default Navbar