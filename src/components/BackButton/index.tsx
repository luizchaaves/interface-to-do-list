import { MdArrowBack } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { Container } from './styles';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate('/')}>
      <MdArrowBack />
    </Container>
  );
};

export default BackButton;
