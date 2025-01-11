import styled from 'styled-components';

export const MainContent = styled.main`
  background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
  min-height: 90vh;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
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

  @media (max-width: 768px) {
    font-size: 1.8rem;
    padding: 0 1rem 1rem;
  }
`;

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
`;
