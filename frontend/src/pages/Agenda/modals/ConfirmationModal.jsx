import React from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '400px',
    borderRadius: '12px',
    padding: '30px',
    border: 'none',
    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.15)',
    zIndex: 10000
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 9999
  }
};

const Title = styled.h2`
  margin-bottom: 20px;
  color: #e74c3c;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

const Message = styled.p`
  text-align: center;
  color: #2c3e50;
  margin-bottom: 25px;
  font-size: 16px;
  line-height: 1.5;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;

  &:hover {
    transform: translateY(-1px);
  }
`;

const CancelButton = styled(Button)`
  background-color: #f8f9fa;
  color: #2c3e50;
  &:hover {
    background-color: #e9ecef;
  }
`;

const ConfirmButton = styled(Button)`
  background-color: #e74c3c;
  color: white;
  &:hover {
    background-color: #c0392b;
  }
`;

const ConfirmationModal = ({ isOpen, onClose, onConfirm, title, message }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Confirmação"
    >
      <Title>{title}</Title>
      <Message>{message}</Message>
      <ButtonGroup>
        <CancelButton onClick={onClose}>Cancelar</CancelButton>
        <ConfirmButton onClick={onConfirm}>Confirmar</ConfirmButton>
      </ButtonGroup>
    </Modal>
  );
};

export default ConfirmationModal;
