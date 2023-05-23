import { IconType } from 'react-icons';
import { useNavigate } from 'react-router-dom';
import { Container, Header, Icon } from './styles';

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
        <span>{quantity}</span>
      </Header>
      <p>{title}</p>
    </Container>
  );
};

export default Card;
