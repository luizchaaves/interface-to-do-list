import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton';
import LogoSvg from './logo';
import { Container, Image } from './styles';

type Props = {
  showBackButton: boolean;
};

const Logo = ({ showBackButton }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      {showBackButton && <BackButton />}
      <Image onClick={() => navigate('/')}>
        <LogoSvg />
        ToDo app
      </Image>
    </Container>
  );
};

export default Logo;
