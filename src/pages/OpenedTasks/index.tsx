import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/configureStore';
import { useAppSelector } from '../../hooks/hooks';
import { openedTasksGet } from '../../store/openedTasks';
import Header from '../../components/Header';
import { Container, Content } from './styles';
import List from '../../components/List';
import { countTasksGet } from '../../store/coutTasks';
import ListEmpty from '../../components/ListEmpty';
import Loading from '../../components/Loading';

type Props = {
  mobile: boolean;
};

const OpenedTasks = ({ mobile }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useAppSelector(
    (state: RootState) => state.openedTasks
  ) as DefaultState;
  const { tasks } = data as ResponseData;

  useEffect(() => {
    dispatch<any>(openedTasksGet(undefined));
  }, [dispatch]);

  function loadOpenedTasks() {
    dispatch<any>(openedTasksGet(undefined));
    dispatch<any>(countTasksGet(undefined));
  }

  return (
    <Container>
      <Header mobile={mobile} title="Abertos" />
      <Content>
        {tasks && tasks.length > 0 ? (
          <List mobile={mobile} list={tasks} loadTasks={loadOpenedTasks} />
        ) : (
          <ListEmpty>Oops... Nenhuma tarefa em aberto até o momento</ListEmpty>
        )}
      </Content>
      {loading && <Loading />}
    </Container>
  );
};

export default OpenedTasks;
