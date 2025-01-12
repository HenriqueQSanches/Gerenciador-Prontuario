import styled from 'styled-components';

export const MainContent = styled.main`
  background: linear-gradient(135deg, rgb(0, 87, 109, 0.05) 0%, rgb(38, 110, 110, 0.1) 100%);
  min-height: 90vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 85vh;
  }
`;

export const Title = styled.h1`
  color: rgb(0, 87, 109);
  margin-bottom: 2rem;
  font-size: 2.2rem;
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

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding-bottom: 0.8rem;
    
    &::after {
      width: 80px;
    }
  }
`;

export const Subtitle = styled.h2`
  color: rgb(0, 87, 109, 0.8);
  font-size: 1.5rem;
  text-align: justify;
  font-weight: 400;
  max-width: 800px;
  line-height: 1.8;
  margin-top: 1rem;
  padding: 0 1rem;
  letter-spacing: 0.3px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
    padding: 0;
    text-align: left;
    line-height: 1.6;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
`;

export const WelcomeCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 3rem 4rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 87, 109, 0.1);
  max-width: 900px;
  width: 90%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 87, 109, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    width: 95%;
  }
`;
