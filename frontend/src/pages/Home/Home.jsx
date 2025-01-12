import React from 'react';
import { Container, MainContent, Title, Subtitle, WelcomeCard } from './Home.styles';
import Navbar from '../../components/Navbar';

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
        </WelcomeCard>
      </MainContent>
    </Container>
  );
};

export default Home;
