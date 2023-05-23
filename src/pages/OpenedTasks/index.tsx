import Header from '../../components/Header';
import { Container } from './styles';

type Props = {
  mobile: boolean;
};

const OpenedTasks = ({ mobile }: Props) => {
  return (
    <Container>
      <Header mobile={mobile} title="Abertos" />
    </Container>
  );
};

export default OpenedTasks;
