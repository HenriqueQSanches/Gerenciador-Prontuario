import { Link } from 'react-router-dom';
import {
  NavContainer,
  NavList,
  NavItem,
  MainContent,
  Title,
  Container,
  NavGroup
} from './Home.styles';
function Home() { 
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
            {/* <NavItem>
              <Link to="/login">Login</Link>
            </NavItem> */}
          </NavGroup>
        </NavList>
      </NavContainer>
      
      <MainContent>
        <Title>Gerenciador Inteligente de Prontuários</Title>
      </MainContent>
    </Container>
  );
}

export default Home;
