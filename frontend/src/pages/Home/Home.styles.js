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

    &::after {
      content: '';
      position: absolute;
      width: 0;
      height: 2px;
      bottom: -2px;
      left: 50%;
      background-color: rgba(255, 255, 255, 0.8); 
      transition: all 0.3s ease;
      transform: translateX(-50%);
    }

    &:hover {
      color: #ffffff;
      background-color: rgba(38, 110, 110, 0.2);
      
      &::after {
        width: 80%;  
      }
    }
  }
`;

export const NavGroup = styled.div`
  display: flex;
  gap: 2rem;
`;

export const MainContent = styled.main`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  min-height: 90vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: rgb(0, 87, 109);
  margin-bottom: 2rem;
  font-size: 2.5rem;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, rgb(0, 87, 109), rgb(38, 110, 110));
    border-radius: 2px;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
`;
