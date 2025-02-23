import React, { useState } from 'react';
import { 
  Container, 
  MainContent, 
  Title, 
  FinancialCard,
  ExpandableCard,
  CardTitle,
  TableContainer,
  StyledTable,
  AddPaymentButton
} from './Financial.styles';
import Navbar from '../../components/Navbar';
import { FaChevronDown, FaChevronUp, FaPlus } from 'react-icons/fa';
import FinancialModal from './modals/FinancialModal';

const Financial = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [payments, setPayments] = useState([
    { id: 1, patientName: 'Maria Silva', value: 150, status: 'paid', scheduledDate: '' },
    { id: 2, patientName: 'João Santos', value: 200, status: 'pending', scheduledDate: '' },
    { id: 3, patientName: 'Ana Oliveira', value: 180, status: 'scheduled', scheduledDate: '2023-12-20' }
  ]);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddPayment = (newPayment) => {
    if (selectedPayment) {
      setPayments(prev => prev.map(payment => 
        payment.id === selectedPayment.id ? { ...newPayment, id: payment.id } : payment
      ));
    } else {
      setPayments(prev => [...prev, { ...newPayment, id: Date.now() }]);
    }
    setIsModalOpen(false);
    setSelectedPayment(null);
  };

  const handleRowClick = (payment) => {
    setSelectedPayment(payment);
    setIsModalOpen(true);
  };

  const getStatusDisplay = (status) => {
    const statusMap = {
      paid: 'Pago',
      pending: 'Pendente',
      scheduled: 'Agendado'
    };
    return statusMap[status] || status;
  };

  return (
    <Container>
      <Navbar />
      <MainContent>
        <FinancialCard>
          <Title>Gerenciamento Financeiro</Title>
          <ExpandableCard onClick={toggleExpand}>
            <CardTitle>
              Registros Financeiros
              {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </CardTitle>
            <TableContainer isExpanded={isExpanded}>
              {isExpanded && (
                <AddPaymentButton 
                  onClick={(e) => {
                    e.stopPropagation();
                    setSelectedPayment(null);
                    setIsModalOpen(true);
                  }}
                >
                  <FaPlus /> Novo Registro Financeiro
                </AddPaymentButton>
              )}
              <StyledTable>
                <thead>
                  <tr>
                    <th>Paciente</th>
                    <th>Valor</th>
                    <th>Status</th>
                    <th>Data Agendada</th>
                  </tr>
                </thead>
                <tbody>
                  {payments.map(payment => (
                    <tr 
                      key={payment.id}
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRowClick(payment);
                      }}
                      style={{ cursor: 'pointer' }}
                    >
                      <td>{payment.patientName}</td>
                      <td>R$ {payment.value}</td>
                      <td>{getStatusDisplay(payment.status)}</td>
                      <td>{payment.scheduledDate || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </StyledTable>
            </TableContainer>
          </ExpandableCard>
        </FinancialCard>
      </MainContent>
      <FinancialModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedPayment(null);
        }}
        onSave={handleAddPayment}
        paymentToEdit={selectedPayment}
      />
    </Container>
  );
};

export default Financial;
