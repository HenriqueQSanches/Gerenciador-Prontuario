import React, { useState } from 'react';
import { 
  Container, 
  MainContent, 
  Title, 
  PatientsCard,
  ExpandableCard,
  CardTitle,
  TableContainer,
  StyledTable,
  SearchInput,
  SearchWrapper,
  SearchIcon,
  AddPatientButton
} from './Patients.styles';
import Navbar from '../../components/Navbar';
import { FaChevronDown, FaChevronUp, FaSearch, FaPlus } from 'react-icons/fa';

const mockPatients = [
  { id: 1, name: 'Maria Silva', age: 35, phone: '(11) 98765-4321', lastVisit: '2023-10-15' },
  { id: 2, name: 'João Santos', age: 42, phone: '(11) 91234-5678', lastVisit: '2023-10-12' },
  { id: 3, name: 'Ana Oliveira', age: 28, phone: '(11) 98877-6655', lastVisit: '2023-10-10' },
  { id: 4, name: 'Pedro Costa', age: 55, phone: '(11) 92233-4455', lastVisit: '2023-10-08' },
];

const Patients = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const filteredPatients = mockPatients
    .filter(patient =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name)); // Adiciona ordenação alfabética

  return (
    <Container>
      <Navbar />
      <MainContent>
        <PatientsCard>
          <Title>Gerenciamento de Pacientes</Title>
          <ExpandableCard onClick={toggleExpand}>
            <CardTitle>
              Pacientes
              {isExpanded ? <FaChevronUp /> : <FaChevronDown />}
            </CardTitle>
            <TableContainer isExpanded={isExpanded}>
              {isExpanded && (
                <>
                  <AddPatientButton onClick={(e) => e.stopPropagation()}>
                    <FaPlus /> Adicionar Paciente
                  </AddPatientButton>
                  <SearchWrapper onClick={(e) => e.stopPropagation()}>
                    <SearchIcon>
                      <FaSearch />
                    </SearchIcon>
                    <SearchInput
                      type="text"
                      placeholder="Pesquisar paciente..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                  </SearchWrapper>
                </>
              )}
              <StyledTable>
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Telefone</th>
                    <th>Última Consulta</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredPatients.map(patient => (
                    <tr key={patient.id}>
                      <td>{patient.name}</td>
                      <td>{patient.age}</td>
                      <td>{patient.phone}</td>
                      <td>{patient.lastVisit}</td>
                    </tr>
                  ))}
                </tbody>
              </StyledTable>
            </TableContainer>
          </ExpandableCard>
        </PatientsCard>
      </MainContent>
    </Container>
  );
};

export default Patients;
