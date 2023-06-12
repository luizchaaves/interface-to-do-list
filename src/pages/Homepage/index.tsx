import Github from '../../components/Github';
import Portfolio from '../../components/Portfolio';
import { Container, Content } from './styles';

const Homepage = () => {
  return (
    <Container>
      <Content>
        <Portfolio showDescription={true} />
        <Github showDescription={true} />
      </Content>
    </Container>
  );
};

export default Homepage;
