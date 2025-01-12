import styled, { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

export const slideIn = keyframes`
  from { transform: translateY(-20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease;
  backdrop-filter: blur(5px);
`;

export const ModalContent = styled.div`
  background: white;
  padding: 2.5rem;
  border-radius: 20px;
  width: 90%;
  max-width: 550px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  animation: ${slideIn} 0.3s ease;
  position: relative;
  
  @media (max-width: 600px) {
    padding: 1.5rem;
    width: 95%;
  }
`;

export const ModalTitle = styled.h2`
  color: rgb(0, 87, 109);
  margin-bottom: 2rem;
  font-size: 1.8rem;
  position: relative;
  padding-bottom: 0.5rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 3px;
    background: linear-gradient(90deg, rgb(0, 87, 109), rgb(38, 110, 110));
    border-radius: 2px;
  }
`;

export const Form = styled.form`
  display: grid;
  gap: 1.5rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  position: relative;
`;

export const BirthDateGroup = styled(FormGroup)`
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const BirthDateContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  input[type="date"], input[type="text"] {
    flex: 2;
  }
`;

export const AgeDisplay = styled.div`
  flex: 1;
  padding: 0.9rem 1rem;
  background: #f8f9fa;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  color: rgb(0, 87, 109);
  font-weight: 500;
  min-width: 100px;
  text-align: center;
`;

export const Label = styled.label`
  font-weight: 500;
  color: rgb(0, 87, 109);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;

  svg {
    color: rgb(0, 87, 109);
    font-size: 1rem;
  }
`;

export const Input = styled.input`
  padding: 0.9rem 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.2s ease;
  background: #f8f9fa;

  &:hover {
    border-color: #bdbdbd;
  }

  &:focus {
    outline: none;
    border-color: rgb(0, 87, 109);
    background: white;
    box-shadow: 0 0 0 4px rgba(0, 87, 109, 0.1);
  }

  &::-webkit-calendar-picker-indicator {
    cursor: pointer;
    opacity: 0.6;
    transition: 0.2s;

    &:hover {
      opacity: 1;
    }
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: 600px) {
    flex-direction: column-reverse;
  }
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 10px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;

  @media (max-width: 600px) {
    width: 100%;
  }

  &:active {
    transform: scale(0.98);
  }
`;

export const SaveButton = styled(Button)`
  background: linear-gradient(135deg, rgb(0, 87, 109) 0%, rgb(38, 110, 110) 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(0, 87, 109, 0.2);

  &:hover {
    box-shadow: 0 6px 20px rgba(0, 87, 109, 0.3);
    transform: translateY(-1px);
  }
`;

export const CancelButton = styled(Button)`
  background: #f0f0f0;
  color: #666;

  &:hover {
    background: #e0e0e0;
    color: #333;
  }
`;
