import React, { useState, useEffect } from 'react';
import { FaUser, FaCalendarAlt, FaPhone, FaBirthdayCake } from 'react-icons/fa';
import {
  ModalOverlay,
  ModalContent,
  ModalTitle,
  Form,
  FormGroup,
  BirthDateGroup,
  BirthDateContainer,
  AgeDisplay,
  Label,
  Input,
  ButtonGroup,
  SaveButton,
  CancelButton
} from './PatientsModal.styles';

const isValidDate = (dateString) => {
  if (!/^\d{2}\/\d{2}\/\d{4}$/.test(dateString)) return false;

  const [day, month, year] = dateString.split('/').map(Number);
  const date = new Date(year, month - 1, day);
  const today = new Date();

  if (!(date instanceof Date) || 
      isNaN(date) || 
      date > today || 
      date.getDate() !== day ||
      date.getMonth() !== month - 1 ||
      date.getFullYear() !== year) {
    return false;
  }

  let age = today.getFullYear() - date.getFullYear();
  const m = today.getMonth() - date.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < date.getDate())) {
    age--;
  }

  if (age < 1 || age > 109) {
    return false;
  }

  return true;
};

const formatDateString = (value) => {
  let numbers = value.replace(/\D/g, '');
  
  if (numbers.length >= 2) numbers = numbers.substring(0, 2) + '/' + numbers.substring(2);
  if (numbers.length >= 5) numbers = numbers.substring(0, 5) + '/' + numbers.substring(5);
  if (numbers.length > 10) numbers = numbers.substring(0, 10);
  
  return numbers;
};

const formatPhoneNumber = (value) => {
  const numbers = value.replace(/\D/g, '');
  
  let formattedNumber = '';
  if (numbers.length > 0) {
    formattedNumber = '(' + numbers.substring(0, 2);
    if (numbers.length > 2) {
      formattedNumber += ') ' + numbers.substring(2, 7);
      if (numbers.length > 7) {
        formattedNumber += '-' + numbers.substring(7, 11);
      }
    }
  }
  
  return formattedNumber;
};

const PatientsModal = ({ isOpen, onClose, onSave, patientToEdit = null }) => {
  const [formData, setFormData] = useState({
    name: patientToEdit?.name || '',
    birthDate: patientToEdit?.birthDate || '',
    phone: patientToEdit?.phone || '',
    lastVisit: patientToEdit?.lastVisit || ''
  });
  const [age, setAge] = useState('');

  const calculateAge = (birthDate) => {
    if (!birthDate) return '';
    
    const today = new Date();
    const birth = new Date(birthDate);
    let age = today.getFullYear() - birth.getFullYear();
    const monthDiff = today.getMonth() - birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }
    
    return age >= 0 ? `${age} anos` : '';
  };

  useEffect(() => {
    setAge(calculateAge(formData.birthDate));
  }, [formData.birthDate]);

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
    onSave(formData);
    onClose();
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    
    if (name === 'phone') {
      setFormData(prev => ({
        ...prev,
        phone: formatPhoneNumber(value)
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleDateChange = (e) => {
    const { value } = e.target;
    const formattedValue = formatDateString(value);
    
    setFormData(prev => ({
      ...prev,
      birthDate: formattedValue
    }));

    if (formattedValue.length === 10) {
      if (!isValidDate(formattedValue)) {
        setAge('Idade inválida');
        setFormData(prev => ({
          ...prev,
          birthDate: ''
        }));
        return;
      }

      const [day, month, year] = formattedValue.split('/');
      const isoDate = `${year}-${month}-${day}`;
      setAge(calculateAge(isoDate));
    } else {
      setAge('');
    }
  };

  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={e => e.stopPropagation()}>
        <ModalTitle>{patientToEdit ? 'Editar Paciente' : 'Adicionar Paciente'}</ModalTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label><FaUser /> Nome</Label>
            <Input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Digite o nome completo"
              required
            />
          </FormGroup>
          <BirthDateGroup>
            <Label><FaBirthdayCake /> Data de Nascimento</Label>
            <BirthDateContainer>
              <Input
                type="text"
                name="birthDate"
                value={formData.birthDate}
                onChange={handleDateChange}
                placeholder="DD/MM/AAAA"
                maxLength="10"
                required
              />
              <AgeDisplay>
                {age || 'Idade'}
              </AgeDisplay>
            </BirthDateContainer>
          </BirthDateGroup>
          <FormGroup>
            <Label><FaPhone /> Telefone</Label>
            <Input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="(00) 00000-0000"
              maxLength="15"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label><FaCalendarAlt /> Última Consulta</Label>
            <Input
              type="date"
              name="lastVisit"
              value={formData.lastVisit}
              onChange={handleChange}
              required
            />
          </FormGroup>
          <ButtonGroup>
            <CancelButton type="button" onClick={onClose}>
              Cancelar
            </CancelButton>
            <SaveButton type="submit">
              {patientToEdit ? 'Atualizar' : 'Adicionar'}
            </SaveButton>
          </ButtonGroup>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default PatientsModal;