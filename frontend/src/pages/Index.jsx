import { Link } from 'react-router-dom';
import {
  NavContainer,
  NavList,
  NavItem,
  MainContent,
  Title,
  Container,
  NavGroup
} from '../styles/components/Index.styles';

function Index() {
  return (
    <Container>
      <NavContainer>
        <NavList>
          <NavGroup>
            <NavItem>
              <Link to="/">Página Inicial</Link>
            </NavItem>
            <NavItem>
              <Link to="/pacientes">Pacientes</Link>
            </NavItem>
            <NavItem>
              <Link to="/agenda">Agenda</Link>
            </NavItem>
          </NavGroup>
          <NavGroup>
            <NavItem>
              <Link to="/login">Login</Link>
            </NavItem>
          </NavGroup>
        </NavList>
      </NavContainer>
      
      <MainContent>
        <Title>LumenPsi - Iluminando os Caminhos da sua Mente</Title>
        <h2>Gerenciador Inteligente de Prontuários</h2>
      </MainContent>
    </Container>
  );
}

export default Index;
