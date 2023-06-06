import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { MdEditNote, MdCheck, MdFolderOpen, MdInbox } from 'react-icons/md';
import theme from '../../styles/theme';
import Card from '../Card';
import { Cards, Container, ContainerLogo } from './styles';
import Logo from '../Logo';

type card = {
  id: number;
  title: string;
  icon: IconType;
  quantity?: number;
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
      background: theme.background.cards.yellow,
      route: '/registerTask',
    },
    {
      id: 2,
      title: 'Todos',
      icon: MdInbox,
      quantity: 1,
      background: theme.background.cards.orange,
      route: '/allTasks',
    },
    {
      id: 3,
      title: 'Abertos',
      icon: MdFolderOpen,
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
    else {
      const menuActive = pathname.split('/');
      setActiveMenu(menuActive[1].toString());
    }
  }, [pathname, setActiveMenu]);

  function handleMenuClick(route: string) {
    setActiveMenu(route.replace('/', ''));
  }

  return (
    <Container>
      <ContainerLogo>
        <Logo showBackButton={false} />
      </ContainerLogo>
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
