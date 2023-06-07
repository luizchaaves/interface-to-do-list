import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/configureStore';
import { useAppSelector } from '../../hooks/hooks';
import { tasksGet } from '../../store/tasks';
import Header from '../../components/Header';
import { Container, Content } from './styles';
import List from '../../components/List';
import { countTasksGet } from '../../store/coutTasks';

type Mobile = boolean;

const AllTasks = ({ mobile }: { mobile: Mobile }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useAppSelector(
    (state: RootState) => state.tasks
  ) as DefaultState;
  const { tasks } = data as ResponseData;

  useEffect(() => {
    dispatch<any>(tasksGet(undefined));
  }, [dispatch]);

  function loadTasks() {
    dispatch<any>(tasksGet(undefined));
    dispatch<any>(countTasksGet(undefined));
  }

  return (
    <Container>
      <Header mobile={mobile} title="Todos" />
      <Content>
        {tasks && <List mobile={mobile} list={tasks} loadTasks={loadTasks} />}
      </Content>
    </Container>
  );
};

export default AllTasks;
