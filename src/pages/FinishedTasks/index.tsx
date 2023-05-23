import Header from '../../components/Header';
import { Container } from './styles';

type Props = {
  mobile: boolean;
};

const FinishedTasks = ({ mobile }: Props) => {
  return (
    <Container>
      <Header mobile={mobile} title="Concluídos" />
    </Container>
  );
};

export default FinishedTasks;
