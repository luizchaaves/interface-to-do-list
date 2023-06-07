import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IconType } from 'react-icons';
import { MdEditNote, MdCheck, MdFolderOpen, MdInbox } from 'react-icons/md';
import theme from '../../styles/theme';
import Card from '../Card';
import { Cards, Container, ContainerLogo, ContainerTheme } from './styles';
import Logo from '../Logo';
import { countTasksGet } from '../../store/coutTasks';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/configureStore';
import { useAppSelector } from '../../hooks/hooks';
import Theme from '../Theme';

type card = {
  id: number;
  title: string;
  icon: IconType;
  quantity?: number;
  background: string;
  route: string;
};

type Mobile = boolean;

const Menu = ({ mobile }: { mobile: Mobile }) => {
  const [activeMenu, setActiveMenu] = useState<string>('');
  let { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useAppSelector(
    (state: RootState) => state.coutTasks
  ) as DefaultState;
  const { AllTasks, FinishedTasks, OpenedTasks } = data as ResponseCountData;
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
      quantity: AllTasks === undefined ? 0 : AllTasks,
      background: theme.background.cards.orange,
      route: '/allTasks',
    },
    {
      id: 3,
      title: 'Abertos',
      icon: MdFolderOpen,
      quantity: OpenedTasks === undefined ? 0 : OpenedTasks,
      background: theme.background.cards.red,
      route: '/openedTasks',
    },
    {
      id: 4,
      title: 'Concluídos',
      icon: MdCheck,
      quantity: FinishedTasks === undefined ? 0 : FinishedTasks,
      background: theme.background.cards.green,
      route: '/finishedTasks',
    },
  ];

  useEffect(() => {
    dispatch<any>(countTasksGet(undefined));
  }, [dispatch]);

  useEffect(() => {
    if (pathname === '/') setActiveMenu('home');
    else {
      const menuActive = pathname.split('/');
      setActiveMenu(menuActive[1].toString());
    }
  }, [pathname, setActiveMenu, dispatch]);

  function handleMenuClick(route: string) {
    setActiveMenu(route.replace('/', ''));
  }

  return (
    <Container>
      <ContainerLogo>
        <Logo showBackButton={false} mobile={mobile} />
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
      <ContainerTheme>{!mobile && <Theme />}</ContainerTheme>
    </Container>
  );
};

export default Menu;
