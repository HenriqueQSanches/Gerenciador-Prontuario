import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavContainer, NavList, NavItem, NavGroup, MenuButton, MobileHeader, MenuIcon } from './Navbar.styles';
import { AiFillHome } from 'react-icons/ai';
import { FaHeartbeat } from 'react-icons/fa';
import { BsFillCalendarCheckFill } from 'react-icons/bs';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <NavContainer>
      <MobileHeader>
        <MenuButton onClick={toggleMenu}>
          <MenuIcon isOpen={isMenuOpen}>
            <span></span>
            <span></span>
            <span></span>
          </MenuIcon>
        </MenuButton>
      </MobileHeader>
      
      <NavList isOpen={isMenuOpen}>
        <NavGroup>
          <NavItem active={location.pathname === "/"}>
            <Link to="/" onClick={closeMenu}><AiFillHome /> Inicio</Link>
          </NavItem>
          <NavItem active={location.pathname === "/pacientes"}>
            <Link to="/pacientes" onClick={closeMenu}><FaHeartbeat /> Pacientes</Link>
          </NavItem>
          <NavItem active={location.pathname === "/agenda"}>
            <Link to="/agenda" onClick={closeMenu}><BsFillCalendarCheckFill /> Agenda</Link>
          </NavItem>
        </NavGroup>
        <NavGroup>
          {/* <NavItem>
            <Link to="/login">Login</Link>
          </NavItem>
          <NavItem>
            <Link to="/register">Registrar</Link>
          </NavItem> */}
        </NavGroup>
      </NavList>
    </NavContainer>
  );
};

export default Navbar;
