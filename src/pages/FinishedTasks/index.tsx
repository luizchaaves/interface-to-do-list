import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/configureStore';
import { useAppSelector } from '../../hooks/hooks';
import { finishedTasksGet } from '../../store/finishedTasks';
import Header from '../../components/Header';
import { Container, Content } from './styles';
import List from '../../components/List';

type Props = {
  mobile: boolean;
};

const FinishedTasks = ({ mobile }: Props) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useAppSelector(
    (state: RootState) => state.finishedTasks
  ) as DefaultState;
  const { tasks } = data;

  useEffect(() => {
    dispatch<any>(finishedTasksGet(undefined));
  }, [dispatch]);

  function loadFinishedTasks() {
    dispatch<any>(finishedTasksGet(undefined));
  }

  return (
    <Container>
      <Header mobile={mobile} title="Concluídos" />
      <Content>
        {tasks && (
          <List mobile={mobile} list={tasks} loadTasks={loadFinishedTasks} />
        )}
      </Content>
    </Container>
  );
};

export default FinishedTasks;
