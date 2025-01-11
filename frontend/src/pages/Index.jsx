import Navbar from '../components/Navbar';
import {
  MainContent,
  Title,
  Container,
} from '../styles/components/Index.styles';

function Index() {
  return (
    <Container>
      <Navbar />
      <MainContent>
        <Title>Gerenciador Inteligente de Prontuários</Title>
      </MainContent>
    </Container>
  );
}

export default Index;
