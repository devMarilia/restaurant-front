import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { NavbarConteiner } from './styles'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <NavbarConteiner>
        <span className="logo">Restaurant CMS</span>
        <div className={`nav-items ${isOpen && "open"}`}>
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </div>
        <div className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}>
          <div className='bar'>

          </div>
        </div>
    </NavbarConteiner>
  )
}
export default Navbar