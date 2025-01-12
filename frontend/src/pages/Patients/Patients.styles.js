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

export const PatientsCard = styled.div`
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

export const Title = styled.h1`
  color: rgb(0, 87, 109);
  margin-bottom: 2rem;
  font-size: 2rem;
  text-align: center;
  position: relative;
  padding-bottom: 1rem;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, rgb(0, 87, 109), rgb(38, 110, 110));
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 1.5rem;
  }
`;

export const PatientsList = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const AddButton = styled.button`
  background: rgb(0, 87, 109);
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  align-self: flex-end;

  &:hover {
    background: rgb(38, 110, 110);
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

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const CardTitle = styled.h2`
  color: rgb(0, 87, 109);
  margin: 0;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const TableContainer = styled.div`
  margin-top: ${props => props.isExpanded ? '1.5rem' : '0'};
  max-height: ${props => props.isExpanded ? '500px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  
  @media (max-width: 768px) {
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
  }
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

  tr:nth-child(odd) {
    background-color: #ffffff;
  }

  tr:hover {
    background-color: rgba(0, 87, 109, 0.1); 
  }

  @media (max-width: 768px) {
    min-width: 600px;
    
    th, td {
      padding: 0.8rem;
      font-size: 0.9rem;
    }

    th {
      white-space: nowrap;
    }
  }
`;

export const SearchWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 15px 0;
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 12px 20px 12px 45px;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  font-size: 16px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  &:focus {
    outline: none;
    border-color: #4a90e2;
    box-shadow: 0 2px 8px rgba(74, 144, 226, 0.2);
  }

  &::placeholder {
    color: #9e9e9e;
  }
`;

export const SearchIcon = styled.div`
  position: absolute;
  left: 15px;
  top: 50%;
  transform: translateY(-50%);
  color: #9e9e9e;
  pointer-events: none;
`;

export const AddPatientButton = styled.button`
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
