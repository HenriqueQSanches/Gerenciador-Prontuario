import styled from 'styled-components';

export const NavContainer = styled.nav`
  background-color: rgb(0, 87, 109);
  padding: 1.2rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
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
      color: #ffffff;
      background-color: ${props => props.active ? 'rgba(38, 110, 110, 0.4)' : 'rgba(38, 110, 110, 0.2)'};
      
      &::after {
        width: 80%;  
      }
    }
  }

  ${props => props.active && `
    a {
      background-color: rgba(38, 110, 110, 0.3);
      font-weight: 500;
    }
  `}
`;

export const NavGroup = styled.div`
  display: flex;
  gap: 2rem;
`;
