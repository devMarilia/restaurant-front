import React, { useState} from 'react'
import { useAppContext } from '../../AppContext/Context';
import { NavbarConteiner } from './styles'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { restaurants } = useAppContext();

  const att = restaurants.map(restaurant => {
      return restaurant.attributes ? restaurant.attributes : [];

    }
  );

  return (
    <NavbarConteiner>
      {att.map(item => {
        return <p  className="logo" key={item.name}>{item.name}</p>
      }
      )}

      <span>
        <i className="fas fa-bars" onClick={() => setIsOpen(!isOpen)} />
      </span>
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