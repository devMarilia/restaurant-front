import React from 'react'
import { Container, NavbarLogo, NavbarContainer, NavbarItem, NavbarLink } from './styles'

function Navbar() {
  return (
    <Container>
         <NavbarLogo>
          <img src="https://www.freepnglogos.com/uploads/logo-png/logo-png-transparent-background-0.png" alt="logo" />
        </NavbarLogo>
      <NavbarContainer>
        <NavbarItem>
          <NavbarLink to="/">Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/about">About</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/contact">Contact</NavbarLink>
        </NavbarItem>
      </NavbarContainer>
    </Container>
  )
}

export default Navbar