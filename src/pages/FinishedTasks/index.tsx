import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/configureStore';
import { useAppSelector } from '../../hooks/hooks';
import { finishedTasksGet } from '../../store/finishedTasks';
import Header from '../../components/Header';
import { Container, Content } from './styles';
import List from '../../components/List';
import { countTasksGet } from '../../store/coutTasks';
import ListEmpty from '../../components/ListEmpty';
import Loading from '../../components/Loading';

type Props = {
  mobile: boolean;
};

const FinishedTasks = ({ mobile }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useAppSelector(
    (state: RootState) => state.finishedTasks
  ) as DefaultState;
  const { tasks } = data as ResponseData;

  useEffect(() => {
    dispatch<any>(finishedTasksGet(undefined));
  }, [dispatch]);

  function loadFinishedTasks() {
    dispatch<any>(finishedTasksGet(undefined));
    dispatch<any>(countTasksGet(undefined));
  }

  return (
    <Container>
      <Header mobile={mobile} title="Concluídos" />
      <Content>
        {tasks && tasks.length > 0 ? (
          <List mobile={mobile} list={tasks} loadTasks={loadFinishedTasks} />
        ) : (
          <ListEmpty>Oops... Nenhuma tarefa concluída até o momento</ListEmpty>
        )}
      </Content>
      {loading && <Loading />}
    </Container>
  );
};

export default FinishedTasks;
