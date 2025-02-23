import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
  background-color: #f5f6fa;
`;

export const MainContent = styled.main`
  flex: 1;
  padding: 20px;
  margin-left: 250px;
`;

export const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 24px;
`;

export const AgendaCard = styled.div`
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CalendarWrapper = styled.div`
  padding: 20px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1;

  .fc {
    height: 700px;
  }

  .fc-toolbar-title {
    font-size: 1.2em !important;
  }

  .fc-button {
    background-color: #3498db !important;
    border-color: #3498db !important;
  }

  .fc-button:hover {
    background-color: #2980b9 !important;
    border-color: #2980b9 !important;
  }
`;