import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
`;

export const MainContent = styled.main`
  background: linear-gradient(135deg, rgb(0, 87, 109, 0.05) 0%, rgb(38, 110, 110, 0.1) 100%);
  min-height: 90vh;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 1rem;
    min-height: 85vh;
  }
`;

export const Title = styled.h1`
  color: #2c3e50;
  margin-bottom: 20px;
  font-size: 24px;
`;

export const FinancialCard = styled.div`
  background: rgba(255, 255, 255, 0.95);
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 87, 109, 0.1);
  max-width: 1200px;
  width: 90%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(0, 87, 109, 0.1);

  @media (max-width: 768px) {
    padding: 1rem;
    width: 95%;
  }
`;

export const ExpandableCard = styled.div`
  background: white;
  padding: 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
`;

export const CardTitle = styled.h2`
  color: rgb(0, 87, 109);
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const TableContainer = styled.div`
  margin-top: ${props => props.isExpanded ? '1.5rem' : '0'};
  max-height: ${props => props.isExpanded ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;

  th, td {
    padding: 1rem;
    text-align: left;
    border-bottom: 1px solid #eee;
  }

  th {
    background-color: rgb(0, 87, 109, 0.1);
    color: rgb(0, 87, 109);
    font-weight: 600;
  }

  tr:nth-child(even) {
    background-color: rgba(0, 87, 109, 0.06);
  }

  tr:hover {
    background-color: rgba(0, 87, 109, 0.1);
  }

  tr {
    transition: all 0.2s ease;
    
    &:hover {
      background-color: rgba(0, 87, 109, 0.1);
      transform: translateY(-2px);
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }

    &:active {
      transform: translateY(0);
    }
  }
`;

export const AddPaymentButton = styled.button`
  background: linear-gradient(135deg, rgb(0, 87, 109) 0%, rgb(38, 110, 110) 100%);
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 1rem;
  box-shadow: 0 4px 6px rgba(0, 87, 109, 0.2);

  svg {
    font-size: 0.9rem;
    transition: transform 0.3s ease;
  }

  &:hover {
    background: linear-gradient(135deg, rgb(38, 110, 110) 0%, rgb(0, 87, 109) 100%);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 87, 109, 0.3);

    svg {
      transform: rotate(90deg);
    }
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 4px rgba(0, 87, 109, 0.2);
  }
`;

export const FormWrapper = styled.div`
  margin-bottom: 30px;
  
  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    div {
      display: flex;
      flex-direction: column;
      gap: 5px;
    }
    
    label {
      color: #2c3e50;
      font-weight: 500;
    }
    
    input, select {
      padding: 8px;
      border: 1px solid #ddd;
      border-radius: 4px;
      font-size: 14px;
      
      &:focus {
        outline: none;
        border-color: #3498db;
      }
    }
    
    button {
      background-color: #3498db;
      color: white;
      padding: 10px;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      
      &:hover {
        background-color: #2980b9;
      }
    }
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 20px;
    
    th, td {
      padding: 12px;
      text-align: left;
      border-bottom: 1px solid #ddd;
    }
    
    th {
      background-color: #f8f9fa;
      color: #2c3e50;
      font-weight: 500;
    }
    
    tr:hover {
      background-color: #f5f6fa;
    }
  }
`;
