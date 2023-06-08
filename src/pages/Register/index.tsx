import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import Button from '../../components/Button';
import Header from '../../components/Header';
import Input from '../../components/Input';
import useForm from '../../hooks/useForm';
import { CREATE_TASK, GET_TAKS, UPDATE_TASK } from '../../services/api';
import { AppDispatch } from '../../store/configureStore';
import { countTasksGet } from '../../store/coutTasks';
import { Container, ContainerButton, Content } from './styles';

type Props = {
  mobile: boolean;
};

const Register = ({ mobile }: Props) => {
  const title = useForm({ useValidate: true });
  const description = useForm({ useValidate: false });
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const findTask = useCallback(
    async (id: string) => {
      const { url, options } = GET_TAKS(id);
      const response = await fetch(url, options);
      const json = await response.json();
      title.setValue(json.title);
      description.setValue(json.description);
    },
    [title, description]
  );

  async function onSubmit(event: React.ChangeEvent<HTMLFormElement>) {
    event.preventDefault();
    if (id) {
      const { url, options } = UPDATE_TASK(id, {
        title: title.value,
        description: description.value,
      });
      const response = await fetch(url, options);
      if (response.status === 200 && response.ok) navigate('/allTasks');
    } else {
      const { url, options } = CREATE_TASK({
        title: title.value,
        description: description.value,
      });
      const response = await fetch(url, options);
      dispatch<any>(countTasksGet(undefined));
      if (response.status === 200 && response.ok) navigate('/allTasks');
    }
  }

  useEffect(() => {
    if (id) findTask(id);
    else {
      title.setValue('');
      description.setValue('');
    }
  }, [id]);

  return (
    <Container>
      <Header mobile={mobile} title="Cadastrar" />
      <Content>
        <form onSubmit={(e: React.ChangeEvent<HTMLFormElement>) => onSubmit(e)}>
          <Input
            label="Titulo"
            type="text"
            name="title"
            required={true}
            {...title}
          />
          <Input
            label="Descrição"
            type="textarea"
            name="description"
            required={true}
            {...description}
          />
          <ContainerButton>
            {title.error || title.value.length === 0 ? (
              <Button disabled>{id ? 'Salvar alterações' : 'Cadastrar'}</Button>
            ) : (
              <Button>{id ? 'Salvar alterações' : 'Cadastrar'}</Button>
            )}
          </ContainerButton>
        </form>
      </Content>
    </Container>
  );
};

export default Register;
