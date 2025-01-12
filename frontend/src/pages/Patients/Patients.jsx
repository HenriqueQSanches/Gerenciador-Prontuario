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
import PatientsModal from './modals/PatientsModal.jsx';  

const mockPatients = [
  { id: 1, name: 'Maria Silva', birthDate: '1988-05-15', phone: '(11) 98765-4321', lastVisit: '2023-10-15' },
  { id: 2, name: 'João Santos', birthDate: '1981-03-22', phone: '(11) 91234-5678', lastVisit: '2023-10-12' },
  { id: 3, name: 'Ana Oliveira', birthDate: '1995-08-10', phone: '(11) 98877-6655', lastVisit: '2023-10-10' },
  { id: 4, name: 'Pedro Costa', birthDate: '1968-11-30', phone: '(11) 92233-4455', lastVisit: '2023-10-08' },
];

const calculateAge = birthDate => {
  const today = new Date();
  const birth = new Date(birthDate);
  let age = today.getFullYear() - birth.getFullYear();
  const monthDiff = today.getMonth() - birth.getMonth();
  
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
    age--;
  }
  
  return age;
};

const Patients = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleAddPatient = (newPatient) => {
    console.log('New patient:', newPatient);
  };

  const filteredPatients = mockPatients
    .filter(patient =>
      patient.name.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => a.name.localeCompare(b.name));

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
                  <AddPatientButton 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsModalOpen(true);
                    }}
                  >
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
                      <td>{calculateAge(patient.birthDate)} anos</td>
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
      <PatientsModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSave={handleAddPatient}
      />
    </Container>
  );
};

export default Patients;
