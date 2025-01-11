import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineHome } from 'react-icons/ai';
import { FaUserInjured } from 'react-icons/fa';
import { BsCalendar3 } from 'react-icons/bs';
import {
  NavContainer,
  NavList,
  NavItem,
  NavGroup,
  HamburgerButton,
  MobileHeader,
  LinkText
} from './styles';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <NavContainer>
      <MobileHeader>
        <HamburgerButton isOpen={isMenuOpen} onClick={toggleMenu}>
          ☰
        </HamburgerButton>
      </MobileHeader>
      <NavList isOpen={isMenuOpen}>
        <NavGroup>
          <NavItem>
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              <AiOutlineHome className="icon" />
              <LinkText>Página Inicial</LinkText>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/pacientes" onClick={() => setIsMenuOpen(false)}>
              <FaUserInjured className="icon" />
              <LinkText>Pacientes</LinkText>
            </Link>
          </NavItem>
          <NavItem>
            <Link to="/agenda" onClick={() => setIsMenuOpen(false)}>
              <BsCalendar3 className="icon" />
              <LinkText>Agenda</LinkText>
            </Link>
          </NavItem>
        </NavGroup>
        <NavGroup>
          {/* <NavItem>
            <Link to="/login">Login</Link>
          </NavItem> */}
        </NavGroup>
      </NavList>
    </NavContainer>
  );
}

export default Navbar;
