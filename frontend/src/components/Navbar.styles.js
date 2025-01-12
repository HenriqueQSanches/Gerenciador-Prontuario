import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: rgb(0, 87, 109);
  padding: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: relative;
`;

export const NavList = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
  max-width: 1200px;
  margin: 0 auto;
  justify-content: space-between;

  @media (max-width: 768px) {
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: ${props => props.isOpen ? '0' : '-100%'};
    width: 100%;
    background-color: rgb(0, 87, 109);
    padding: 1rem 0;
    transition: left 0.3s ease;
    z-index: 1000;
  }
`;

export const NavItem = styled.li`
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 1.1rem;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    transition: all 0.3s ease;
    position: relative;
    display: flex;
    align-items: center;
    gap: 0.5rem;

    svg {
      font-size: 1.2rem;
    }

    &::after {
      @media (max-width: 768px) {
        display: none;
      }
      
      content: '';
      position: absolute;
      width: ${props => props.active ? '80%' : '0'};
      height: 2px;
      bottom: -2px;
      left: 50%;
      background-color: #ffffff;
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    &:hover {
      @media (max-width: 768px) {
        background-color: rgba(38, 110, 110, 0.2);
      }
      
      color: #ffffff;
      background-color: ${props => props.active ? 'rgba(38, 110, 110, 0.4)' : 'rgba(38, 110, 110, 0.2)'};
      
      &::after {
        width: 80%;  
      }
    }
  }

  ${props => props.active && `
    a {
      @media (max-width: 768px) {
        background-color: transparent;
        font-weight: normal;
      }
      
      background-color: rgba(38, 110, 110, 0.3);
      font-weight: 500;
    }
  `}
`;

export const NavGroup = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`;

export const MenuIcon = styled.div`
  width: 24px;
  height: 20px;
  position: relative;
  cursor: pointer;

  span {
    display: block;
    position: absolute;
    height: 2px;
    width: 100%;
    background: white;
    border-radius: 2px;
    opacity: 1;
    left: 0;
    transform: rotate(0deg);
    transition: .25s ease-in-out;

    &:nth-child(1) {
      top: ${props => props.isOpen ? '9px' : '0px'};
      transform: ${props => props.isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      top: 9px;
      opacity: ${props => props.isOpen ? '0' : '1'};
      transform: ${props => props.isOpen ? 'translateX(20px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      top: ${props => props.isOpen ? '9px' : '18px'};
      transform: ${props => props.isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const MenuButton = styled.button`
  display: none;
  background: none;
  border: none;
  padding: 0.5rem;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const MobileHeader = styled.div`
  display: none;
  
  @media (max-width: 768px) {
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
`;
