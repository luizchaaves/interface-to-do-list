import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Cards, Container, ContainerLogo } from './styles';

type card = {
  id: number;
  title: string;
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
      quantity: 0,
      background: 'Theme.background.cards.yellow',
      route: '/registerTask',
    },
    {
      id: 2,
      title: 'Todos',
      quantity: 0,
      background: 'Theme.background.cards.orange',
      route: '/allTasks',
    },
    {
      id: 3,
      title: 'Abertos',
      quantity: 0,
      background: 'Theme.background.cards.red',
      route: '/openedTasks',
    },
    {
      id: 4,
      title: 'Concluídos',
      quantity: 0,
      background: 'Theme.background.cards.green',
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
      <Cards></Cards>
    </Container>
  );
};

export default Menu;
