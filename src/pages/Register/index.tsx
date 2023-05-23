import Header from '../../components/Header';
import { Container } from './styles';

type Props = {
  mobile: boolean;
};

const Register = ({ mobile }: Props) => {
  return (
    <Container>
      <Header mobile={mobile} title="Cadastrar" />
      <p>teste</p>
    </Container>
  );
};

export default Register;
