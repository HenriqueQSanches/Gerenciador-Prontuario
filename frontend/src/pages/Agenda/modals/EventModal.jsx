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
    zIndex: 9999
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    zIndex: 9998
  }
};

const Title = styled.h2`
  margin-bottom: 25px;
  color: #2c3e50;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 12px 24px;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  flex: 1;

  &:hover {
    transform: translateY(-1px);
  }
`;

const EditButton = styled(Button)`
  background-color: #3498db;
  color: white;
  &:hover {
    background-color: #2980b9;
  }
`;

const CompleteButton = styled(Button)`
  background-color: ${props => props.completed ? '#27ae60' : '#2ecc71'};
  color: white;
  &:hover {
    background-color: #27ae60;
  }
`;

const DeleteButton = styled(Button)`
  background-color: #e74c3c;
  color: white;
  &:hover {
    background-color: #c0392b;
  }
`;

const EventInfo = styled.div`
  margin: 20px 0;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
`;

const InfoItem = styled.p`
  margin: 8px 0;
  color: #2c3e50;
  font-size: 14px;
`;

Modal.setAppElement('#root');

const EventModal = ({ isOpen, onClose, event, onEdit, onComplete, onDelete }) => {
  const isCompleted = event?.extendedProps?.status === 'completed';

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Detalhes do Agendamento"
    >
      <Title>Detalhes do Agendamento</Title>
      
      <EventInfo>
        <InfoItem><strong>Paciente:</strong> {event?.title?.replace('Consulta - ', '')}</InfoItem>
        <InfoItem><strong>Data:</strong> {event?.start?.toLocaleDateString()}</InfoItem>
        <InfoItem><strong>Horário:</strong> {event?.start?.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</InfoItem>
        <InfoItem><strong>Status:</strong> {isCompleted ? 'Atendido' : 'Pendente'}</InfoItem>
      </EventInfo>

      <ButtonGroup>
        <EditButton onClick={() => onEdit(event)}>Editar</EditButton>
        <CompleteButton 
          completed={isCompleted}
          onClick={() => onComplete(event)}
        >
          {isCompleted ? 'Atendido' : 'Marcar como Atendido'}
        </CompleteButton>
        <DeleteButton onClick={() => onDelete(event)}>Excluir</DeleteButton>
      </ButtonGroup>
    </Modal>
  );
};

export default EventModal;
