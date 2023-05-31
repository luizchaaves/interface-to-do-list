import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store/configureStore';
import { useAppSelector } from '../../hooks/hooks';
import { tasksGet } from '../../store/tasks';
import Header from '../../components/Header';
import { Container, Content } from './styles';

type Mobile = boolean;
interface State {
  loading: boolean;
  data: Data;
  error: string;
}

interface Data {
  length: number;
  tasks: Task[];
}

interface Task {
  created_at: string;
  description: string;
  finished: boolean;
  id: number;
  title: string;
  updated_at: string;
}

const AllTasks = ({ mobile }: { mobile: Mobile }) => {
  const dispatch = useDispatch<AppDispatch>();
  const { data } = useAppSelector((state: RootState) => state.tasks) as State;
  const { tasks } = data;

  useEffect(() => {
    dispatch<any>(tasksGet(undefined));
  }, [dispatch]);

  return (
    <Container>
      <Header mobile={mobile} title="Todos" />
      <Content>
        {tasks &&
          tasks.map((task) => (
            <div key={task.id}>
              {task.title} | {task.description}
            </div>
          ))}
      </Content>
    </Container>
  );
};

export default AllTasks;
