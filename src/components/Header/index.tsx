import BackButton from '../BackButton';
import Logo from '../Logo';
import { Container, ContainerLogo, Title } from './styles';

type Props = {
  mobile?: boolean;
  title?: string;
  goPreviousPage?: boolean;
};

const Header = ({ mobile, title, goPreviousPage }: Props) => {
  return (
    <Container>
      {mobile && (
        <ContainerLogo mobile={mobile}>
          <Logo
            showBackButton={true}
            mobile={mobile}
            goPreviousPage={goPreviousPage}
          />
        </ContainerLogo>
      )}

      <Title>
        {!mobile && <BackButton goPreviousPage={goPreviousPage} />}
        <h3 className={!mobile ? 'title' : ''}>{title}</h3>
      </Title>
    </Container>
  );
};

export default Header;
