import React from 'react';
import { Container, MainContent, Title, Subtitle, WelcomeCard } from './Home.styles';
import Navbar from '../../components/Navbar';
import TestConnection from '../../components/TestConnection';

const Home = () => {
  return (
    <Container>
      <Navbar />
      <MainContent>
        <WelcomeCard>
          <Title>Gerenciador de Prontuários</Title>
          <Subtitle>
            Sistema completo para gestão de prontuários e acompanhamento clínico ou terapêutico, 
            permitindo o gerenciamento eficiente de pacientes, sessões e documentação clínica
          </Subtitle>
          <div style={{ 
            marginTop: '20px', 
            padding: '15px',
            border: '1px solid #ddd',
            borderRadius: '8px',
            backgroundColor: '#f5f5f5'
          }}>
            <h3 style={{ marginBottom: '10px' }}>Status da Conexão</h3>
            <TestConnection />
          </div>
        </WelcomeCard>
      </MainContent>
    </Container>
  );
};

export default Home;
