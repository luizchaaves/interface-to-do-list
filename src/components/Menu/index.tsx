import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { MdEditNote, MdCheck, MdClose, MdInbox } from 'react-icons/md';
import theme from '../../styles/theme';
import Card from '../Card';
import { Cards, Container, ContainerLogo } from './styles';

type card = {
  id: number;
  title: string;
  icon: IconType;
  quantity: number;
  background: string;
  route: string;
};

const Menu = () => {
  const [activeMenu, setActiveMenu] = useState<string>('');
  let { pathname } = useLocation();

  const cards: card[] = [
    {
      id: 1,
      title: 'Cadastrar',
      icon: MdEditNote,
      quantity: 0,
      background: theme.background.cards.yellow,
      route: '/registerTask',
    },
    {
      id: 2,
      title: 'Todos',
      icon: MdInbox,
      quantity: 0,
      background: theme.background.cards.orange,
      route: '/allTasks',
    },
    {
      id: 3,
      title: 'Abertos',
      icon: MdClose,
      quantity: 0,
      background: theme.background.cards.red,
      route: '/openedTasks',
    },
    {
      id: 4,
      title: 'Concluídos',
      icon: MdCheck,
      quantity: 0,
      background: theme.background.cards.green,
      route: '/finishedTasks',
    },
  ];

  useEffect(() => {
    if (pathname === '/') setActiveMenu('home');
    else setActiveMenu(pathname.replace('/', ''));
  }, [pathname, setActiveMenu]);

  function handleMenuClick(route: string) {
    setActiveMenu(route.replace('/', ''));
  }

  return (
    <Container>
      <ContainerLogo>logo</ContainerLogo>
      <Cards>
        {cards.map((card) => (
          <Card
            key={card.id}
            cardOnClick={(route: string) => handleMenuClick(route)}
            activeMenu={activeMenu}
            {...card}
          />
        ))}
      </Cards>
    </Container>
  );
};

export default Menu;
