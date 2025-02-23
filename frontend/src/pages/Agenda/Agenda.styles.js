import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  background-color: #f5f7fa;
`;

export const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 24px;
`;

export const AgendaCard = styled.div`
  background: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CalendarWrapper = styled.div`
  .fc {
    background: white;
    padding: 10px;
    border-radius: 8px;
    height: 80vh;
  }

  .fc-toolbar-title {
    font-size: 1.5em !important;
    color: #2c3e50;
  }

  .fc-button {
    background-color: #3498db !important;
    border-color: #3498db !important;
    &:hover {
      background-color: #2980b9 !important;
    }
  }

  .fc-event {
    cursor: pointer;
    padding: 2px 5px;
  }

  .fc-day-today {
    background-color: #f8f9fa !important;
  }
`;
