import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/configureStore';
import { useAppSelector } from '../../hooks/hooks';
import { openedTasksGet } from '../../store/openedTasks';
import Header from '../../components/Header';
import { Container, Content } from './styles';
import List from '../../components/List';

type Props = {
  mobile: boolean;
};

const OpenedTasks = ({ mobile }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useAppSelector(
    (state: RootState) => state.openedTasks
  ) as DefaultState;
  const { tasks } = data;

  useEffect(() => {
    dispatch<any>(openedTasksGet(undefined));
  }, [dispatch]);

  function loadOpenedTasks() {
    dispatch<any>(openedTasksGet(undefined));
  }

  return (
    <Container>
      <Header mobile={mobile} title="Abertos" />
      <Content>
        {tasks && (
          <List mobile={mobile} list={tasks} loadTasks={loadOpenedTasks} />
        )}
      </Content>
    </Container>
  );
};

export default OpenedTasks;
