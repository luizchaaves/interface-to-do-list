import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/configureStore';
import { useAppSelector } from '../../hooks/hooks';
import { tasksGet } from '../../store/tasks';
import Header from '../../components/Header';
import { Container, Content } from './styles';
import List from '../../components/List';
import { countTasksGet } from '../../store/coutTasks';
import ListEmpty from '../../components/ListEmpty';
import Loading from '../../components/Loading';

type Mobile = boolean;

const AllTasks = ({ mobile }: { mobile: Mobile }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data, loading } = useAppSelector(
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
    <>
      <Container>
        <Header mobile={mobile} title="Todos" />
        <Content>
          {tasks && tasks.length > 0 ? (
            <List mobile={mobile} list={tasks} loadTasks={loadTasks} />
          ) : (
            <ListEmpty>
              Oops... Nenhuma tarefa cadastrada até o momento
            </ListEmpty>
          )}
        </Content>
        {loading && <Loading />}
      </Container>
    </>
  );
};

export default AllTasks;
