import React, { useState } from 'react';
import styled from 'styled-components';

const ListContainer = styled.div`
  margin-top: 20px;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h2`
  color: #2c3e50;
  font-size: 18px;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const FilterButton = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 6px;
  background-color: ${props => props.active ? '#3498db' : '#f8f9fa'};
  color: ${props => props.active ? 'white' : '#2c3e50'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.active ? '#2980b9' : '#e9ecef'};
  }
`;

const AgendamentosList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const AgendamentoItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 8px;
  border-left: 4px solid ${props => props.status === 'completed' ? '#27ae60' : '#3498db'};
`;

const AgendamentoInfo = styled.div`
  display: flex;
  gap: 20px;
`;

const InfoGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.span`
  font-size: 12px;
  color: #7f8c8d;
`;

const Value = styled.span`
  font-size: 14px;
  color: #2c3e50;
  font-weight: 500;
`;

const Status = styled.span`
  padding: 6px 12px;
  border-radius: 20px;
  font-size: 12px;
  font-weight: 500;
  background-color: ${props => props.status === 'completed' ? '#27ae60' : '#3498db'};
  color: white;
`;

const AgendamentosLista = ({ events }) => {
  const [filter, setFilter] = useState('day'); // 'day', 'week', 'month'

  const filterEvents = () => {
    const today = new Date();
    const eventsList = events.map(event => ({
      ...event,
      startDate: new Date(event.start)
    }));

    switch(filter) {
      case 'day':
        return eventsList.filter(event => 
          event.startDate.toDateString() === today.toDateString()
        );
      case 'week':
        const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
        const weekEnd = new Date(today.setDate(today.getDate() - today.getDay() + 6));
        return eventsList.filter(event => 
          event.startDate >= weekStart && event.startDate <= weekEnd
        );
      case 'month':
        return eventsList.filter(event => 
          event.startDate.getMonth() === today.getMonth() &&
          event.startDate.getFullYear() === today.getFullYear()
        );
      default:
        return eventsList;
    }
  };

  const filteredEvents = filterEvents();

  return (
    <ListContainer>
      <Header>
        <Title>Lista de Agendamentos</Title>
        <FilterButtons>
          <FilterButton 
            active={filter === 'day'} 
            onClick={() => setFilter('day')}
          >
            Hoje
          </FilterButton>
          <FilterButton 
            active={filter === 'week'} 
            onClick={() => setFilter('week')}
          >
            Semana
          </FilterButton>
          <FilterButton 
            active={filter === 'month'} 
            onClick={() => setFilter('month')}
          >
            Mês
          </FilterButton>
        </FilterButtons>
      </Header>

      <AgendamentosList>
        {filteredEvents.map(event => (
          <AgendamentoItem 
            key={event.id}
            status={event.extendedProps?.status}
          >
            <AgendamentoInfo>
              <InfoGroup>
                <Label>Paciente</Label>
                <Value>{event.title.replace('Consulta - ', '')}</Value>
              </InfoGroup>
              <InfoGroup>
                <Label>Data</Label>
                <Value>{new Date(event.start).toLocaleDateString()}</Value>
              </InfoGroup>
              <InfoGroup>
                <Label>Horário</Label>
                <Value>
                  {new Date(event.start).toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </Value>
              </InfoGroup>
            </AgendamentoInfo>
            <Status status={event.extendedProps?.status}>
              {event.extendedProps?.status === 'completed' ? 'Atendido' : 'Pendente'}
            </Status>
          </AgendamentoItem>
        ))}
        {filteredEvents.length === 0 && (
          <AgendamentoItem>
            <Value>Nenhum agendamento encontrado para este período.</Value>
          </AgendamentoItem>
        )}
      </AgendamentosList>
    </ListContainer>
  );
};

export default AgendamentosLista;
