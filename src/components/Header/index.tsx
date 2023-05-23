import BackButton from '../BackButton';
import Logo from '../Logo';
import { Container, ContainerLogo, Title } from './styles';

type Props = {
  mobile?: boolean;
  title?: string;
};

const Header = ({ mobile, title }: Props) => {
  return (
    <Container>
      {mobile && (
        <ContainerLogo>
          <Logo showBackButton={true} />
        </ContainerLogo>
      )}

      <Title>
        {!mobile && <BackButton />}
        <h3 className={!mobile ? 'title' : ''}>{title}</h3>
      </Title>
    </Container>
  );
};

export default Header;