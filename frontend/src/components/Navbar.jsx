import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { NavContainer, NavList, NavItem, NavGroup } from './Navbar.styles';
import { AiFillHome } from 'react-icons/ai';
import { FaHeartbeat } from 'react-icons/fa';
import { BsFillCalendarCheckFill } from 'react-icons/bs';

const Navbar = () => {
  const location = useLocation();

  return (
    <NavContainer>
      <NavList>
        <NavGroup>
          <NavItem active={location.pathname === "/"}>
            <Link to="/"><AiFillHome /> Inicio</Link>
          </NavItem>
          <NavItem active={location.pathname === "/pacientes"}>
            <Link to="/pacientes"><FaHeartbeat /> Pacientes</Link>
          </NavItem>
          <NavItem active={location.pathname === "/agenda"}>
            <Link to="/agenda"><BsFillCalendarCheckFill /> Agenda</Link>
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
