import moment from 'moment';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import ListEmpty from '../../components/ListEmpty';
import Loading from '../../components/Loading';
import { GET_TASK } from '../../services/api';
import theme from '../../styles/theme';
import { Badge, Container, Content, Dates, Task, Title } from './styles';

interface Props {
  mobile: boolean;
}

const TaskDetail = ({ mobile }: Props) => {
  const [task, setTask] = useState<Task>();
  const [error, setError] = useState<String>();
  const [loading, setLoading] = useState<Boolean>();
  const { id } = useParams();

  const formatDate = (date: string) => {
    return moment(date).format('DD/MM/YYYY');
  };

  const findTask = async (id: string) => {
    setLoading(true);
    const { url, options } = GET_TASK(id);
    const response = await fetch(url, options);
    const json = await response.json();
    if (response.ok && response.status === 200) {
      setError(undefined);
      setTask(json);
    } else {
      setTask(undefined);
      setError(json.message);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (id) findTask(id);
  }, []);

  return (
    <Container>
      <Header mobile={mobile} title="Detalhes" goPreviousPage={true} />
      <Content>
        {task ? (
          <Task>
            {task.finished ? (
              <Badge background={theme.background.cards.green}>
                <div>Finalizada</div>
              </Badge>
            ) : (
              <Badge background={theme.background.cards.yellow}>
                <div>Em aberto</div>
              </Badge>
            )}
            <Title>{task.title}</Title>
            {task.description && <p>{task.description}</p>}

            <Dates>
              <span>Criado em: {formatDate(task.created_at)}</span>
              <span>Atualizado em: {formatDate(task.updated_at)}</span>
            </Dates>
          </Task>
        ) : (
          <ListEmpty>{error}</ListEmpty>
        )}
        {loading && <Loading />}
      </Content>
    </Container>
  );
};

export default TaskDetail;
