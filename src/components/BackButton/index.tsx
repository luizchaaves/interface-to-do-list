import { MdArrowBack } from 'react-icons/md';
import { NavigateFunction, useNavigate } from 'react-router-dom';
import { Container } from './styles';

interface Props {
  goPreviousPage?: boolean;
}

const handleClick = (goPreviousPage: boolean, navigate: NavigateFunction) => {
  goPreviousPage ? navigate(-1) : navigate('/');
};

const BackButton = ({ goPreviousPage = false }: Props) => {
  const navigate: NavigateFunction = useNavigate();
  return (
    <Container onClick={() => handleClick(goPreviousPage, navigate)}>
      <MdArrowBack />
    </Container>
  );
};

export default BackButton;
