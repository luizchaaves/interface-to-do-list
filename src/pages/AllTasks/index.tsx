import Header from '../../components/Header';
import { Container } from './styles';

type Props = {
  mobile: boolean;
};

const AllTasks = ({ mobile }: Props) => {
  return (
    <Container>
      <Header mobile={mobile} title="Todos" />
    </Container>
  );
};

export default AllTasks;
