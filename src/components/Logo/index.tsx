import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton';
import Theme from '../Theme';
import LogoSvg from './logo';
import { Container, ContainerTheme, Image } from './styles';

type Props = {
  showBackButton: boolean;
  mobile: boolean;
};

const Logo = ({ showBackButton, mobile }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      {showBackButton && <BackButton />}
      <Image onClick={() => navigate('/')}>
        <LogoSvg />
        ToDo app
      </Image>
      {mobile && (
        <ContainerTheme>
          <Theme />
        </ContainerTheme>
      )}
    </Container>
  );
};

export default Logo;
