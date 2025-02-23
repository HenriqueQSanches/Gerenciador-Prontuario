import React, { useState } from 'react';
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
    width: '500px',
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

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #2c3e50;
`;

const Input = styled.input`
  padding: 12px;
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  font-size: 14px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 2px solid #e8e8e8;
  border-radius: 8px;
  font-size: 14px;
  background-color: white;
  cursor: pointer;
  transition: all 0.3s ease;

  &:focus {
    border-color: #3498db;
    outline: none;
    box-shadow: 0 0 0 3px rgba(52, 152, 219, 0.1);
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 12px;
  margin-top: 10px;
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

const SaveButton = styled(Button)`
  background-color: #3498db;
  color: white;

  &:hover {
    background-color: #2980b9;
    box-shadow: 0 4px 12px rgba(52, 152, 219, 0.2);
  }
`;

const CancelButton = styled(Button)`
  background-color: #f8f9fa;
  color: #2c3e50;

  &:hover {
    background-color: #e9ecef;
  }
`;

const Title = styled.h2`
  margin-bottom: 25px;
  color: #2c3e50;
  font-size: 24px;
  font-weight: 600;
  text-align: center;
`;

Modal.setAppElement('#root');

const AgendamentoModal = ({ isOpen, onClose, onSave, selectedDate }) => {
  const [formData, setFormData] = useState({
    title: '',
    paciente: '',
    horario: '09:00',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const startDate = selectedDate?.start || new Date();
    const [hours, minutes] = formData.horario.split(':');
    
    const eventStart = new Date(startDate);
    eventStart.setHours(parseInt(hours), parseInt(minutes));
    
    const eventEnd = new Date(eventStart);
    eventEnd.setHours(eventStart.getHours() + 1);

    onSave({
      title: `Consulta - ${formData.paciente}`,
      start: eventStart.toISOString(),
      end: eventEnd.toISOString(),
    });
    
    onClose();
    setFormData({ title: '', paciente: '', horario: '09:00' });
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Agendar Consulta"
    >
      <Title>Agendar Consulta</Title>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label>Nome do Paciente</Label>
          <Input
            type="text"
            placeholder="Digite o nome do paciente"
            value={formData.paciente}
            onChange={(e) => setFormData({ ...formData, paciente: e.target.value })}
            required
          />
        </FormGroup>
        
        <FormGroup>
          <Label>Horário da Consulta</Label>
          <Select
            value={formData.horario}
            onChange={(e) => setFormData({ ...formData, horario: e.target.value })}
            required
          >
            {Array.from({ length: 11 }, (_, i) => {
              const hour = 8 + i;
              return (
                <option key={hour} value={`${hour.toString().padStart(2, '0')}:00`}>
                  {`${hour.toString().padStart(2, '0')}:00`}
                </option>
              );
            })}
          </Select>
        </FormGroup>

        <ButtonGroup>
          <CancelButton type="button" onClick={onClose}>Cancelar</CancelButton>
          <SaveButton type="submit">Agendar</SaveButton>
        </ButtonGroup>
      </Form>
    </Modal>
  );
};

export default AgendamentoModal;
