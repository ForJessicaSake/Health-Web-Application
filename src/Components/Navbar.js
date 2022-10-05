import React from 'react'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'
import '../Styles/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [toggle, setToggle]=useState(false);

  const handleToggle=()=>{
    setToggle(!toggle);
    alert('toggle is working')
    console.log("toggled")
  }
  const handleLink = ()=>{
    setToggle(false)
}

  return (

    <nav className={toggle? 'navbar expanded':'navbar'}>
        <h2 className='logo'>Focus</h2>
        <div className='toggle-icon' onClick={handleToggle} >
          {toggle ?<p className="menu-close">X</p>:<FaBars style={{fontSize:"2rem"}} />}
        </div>
        <ul className='links' onClick={handleLink}>
          <li id="active"><Link to ='/'>Home</Link></li>
          <li className="navbar-link"><Link to ='/about'>About</Link></li>
          <li className="navbar-link"><Link to ='/conditions'>Conditions</Link></li>
          <li className="navbar-link"><Link to ='/services'>Services</Link></li>
          <li className="navbar-link"><Link to ='/contact'>Contact</Link></li>

        </ul>
    </nav>

  )
}

export default Navbar