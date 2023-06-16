import { useNavigate } from 'react-router-dom';
import BackButton from '../BackButton';
import Theme from '../Theme';
import LogoSvg from './logo';
import { Container, ContainerTheme, Image } from './styles';

type Props = {
  showBackButton: boolean;
  mobile: boolean;
  goPreviousPage?: boolean;
};

const Logo = ({ showBackButton, mobile, goPreviousPage }: Props) => {
  const navigate = useNavigate();

  return (
    <Container>
      {showBackButton && <BackButton goPreviousPage={goPreviousPage} />}
      <Image onClick={() => navigate('/')}>
        <LogoSvg />
        ToDo List
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
