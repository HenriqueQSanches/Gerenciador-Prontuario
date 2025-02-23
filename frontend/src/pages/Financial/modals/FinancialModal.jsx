import React, { useState, useEffect } from 'react';
import { FaUser, FaMoneyBillWave, FaClipboardCheck, FaCalendarAlt } from 'react-icons/fa';
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  Form,
  FormGroup,
  Label,
  Input,
  ButtonGroup,
  SaveButton,
  CancelButton
} from './FinancialModal.styles';

const formatCurrency = (value) => {
  const numbers = value.replace(/\D/g, '');
  
  const decimal = (parseInt(numbers) / 100).toLocaleString('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });

  return decimal;
};

const unformatCurrency = (value) => {
  return value.replace(/\D/g, '') / 100;
};

const FinancialModal = ({ isOpen, onClose, onSave, paymentToEdit = null }) => {
  const [formData, setFormData] = useState({
    patientName: paymentToEdit?.patientName || '',
    value: paymentToEdit?.value ? formatCurrency(String(paymentToEdit.value * 100)) : '',
    status: paymentToEdit?.status || 'pending',
    scheduledDate: paymentToEdit?.scheduledDate || ''
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    const submittedData = {
      ...formData,
      value: unformatCurrency(formData.value)
    };
    onSave(submittedData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'value') {
      const numbers = value.replace(/\D/g, '');
      if (numbers === '') {
        setFormData(prev => ({ ...prev, value: '' }));
        return;
      }
      setFormData(prev => ({
        ...prev,
        value: formatCurrency(numbers)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalTitle>{paymentToEdit ? 'Editar Registro Financeiro' : 'Novo Registro Financeiro'}</ModalTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label><FaUser /> Nome do Paciente</Label>
            <Input
              type="text"
              name="patientName"
              value={formData.patientName}
              onChange={handleChange}
              placeholder="Digite o nome do paciente"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label><FaMoneyBillWave /> Valor</Label>
            <Input
              type="text"
              name="value"
              value={formData.value}
              onChange={handleChange}
              placeholder="R$ 0,00"
              required
            />
          </FormGroup>

          <FormGroup>
            <Label><FaClipboardCheck /> Status</Label>
            <Input
              as="select"
              name="status"
              value={formData.status}
              onChange={handleChange}
              required
            >
              <option value="pending">Pendente</option>
              <option value="paid">Pago</option>
              <option value="scheduled">Agendado</option>
            </Input>
          </FormGroup>

          {formData.status === 'scheduled' && (
            <FormGroup>
              <Label><FaCalendarAlt /> Data Agendada</Label>
              <Input
                type="date"
                name="scheduledDate"
                value={formData.scheduledDate}
                onChange={handleChange}
                required
              />
            </FormGroup>
          )}

          <ButtonGroup>
            <CancelButton type="button" onClick={onClose}>
              Cancelar
            </CancelButton>
            <SaveButton type="submit">
              {paymentToEdit ? 'Atualizar' : 'Adicionar'}
            </SaveButton>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default FinancialModal;
