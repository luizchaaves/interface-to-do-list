import { IconType } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import { Container, Header, Icon, Span } from './styles';

type Props = {
  id: number;
  title: string;
  icon: IconType;
  quantity: number;
  background: string;
  route: string;
  cardOnClick?: Function;
  activeMenu: string;
};

const Card = ({
  title,
  icon,
  quantity,
  background,
  route,
  cardOnClick,
  activeMenu,
}: Props) => {
  const navigate = useNavigate();
  const IconComponent = icon;

  function handleCardClick() {
    navigate(route);
    if (cardOnClick) cardOnClick(route);
  }
  return (
    <Container
      background={background}
      onClick={handleCardClick}
      className={
        activeMenu.toLowerCase() === route.replace('/', '').toLowerCase()
          ? 'active'
          : ''
      }
    >
      <Header>
        <Icon background={background}>
          <IconComponent />
        </Icon>
        <Span fontWeight="700">{quantity}</Span>
      </Header>
      <Span className="teste" fontWeight="600">
        {title}
      </Span>
    </Container>
  );
};

export default Card;
