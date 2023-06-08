import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FINISH_TASK, REMOVE_TASK } from '../../services/api';
import theme from '../../styles/theme';

import {
  Button,
  Container,
  ContainerButtons,
  GroupButton,
  Row,
  Text,
} from './styles';

import {
  MdMenu,
  MdMenuOpen,
  MdModeEditOutline,
  MdCheck,
  MdClose,
  MdOutlineDeleteOutline,
} from 'react-icons/md';

const List = ({
  mobile,
  list,
  loadTasks,
}: {
  mobile: Boolean;
  list: Task[];
  loadTasks: Function;
}) => {
  const [groupButtonMobileActive, setGroupButtonMobileActive] =
    useState<number>();

  const navigate = useNavigate();

  useEffect(() => {
    if (!mobile) setGroupButtonMobileActive(undefined);
  }, [mobile]);

  const handleButtonMobile = (id: number) => {
    if (groupButtonMobileActive === id) setGroupButtonMobileActive(undefined);
    else setGroupButtonMobileActive(id);
  };

  const handleButtonConclude = async (id: number) => {
    const { url, options } = FINISH_TASK(id);
    const response = await fetch(url, options);
    if (response.status === 200 && response.ok) loadTasks();
  };
  const handleButtonEdit = (id: number) => {
    navigate(`/registerTask/${id}`);
  };
  const handleButtonDelete = async (id: number) => {
    const { url, options } = REMOVE_TASK(id);
    const response = await fetch(url, options);
    if (response.status === 200 && response.ok) loadTasks();
  };

  return (
    <Container>
      {list.map((task: Task) => (
        <Row
          key={task.id}
          borderColor={
            task.finished
              ? theme.background.cards.green
              : theme.background.cards.orange
          }
        >
          <Text>{task.title}</Text>
          <ContainerButtons>
            <GroupButton
              className={groupButtonMobileActive === task.id ? 'active' : ''}
            >
              {!task.finished ? (
                <Button
                  title="Concluir"
                  name="button conclude"
                  color={theme.background.cards.green}
                  onClick={() => handleButtonConclude(task.id)}
                >
                  <MdCheck />
                </Button>
              ) : (
                <Button
                  title="Não conluída"
                  name="Button not conclude"
                  color={theme.background.cards.orange}
                  onClick={() => handleButtonConclude(task.id)}
                >
                  <MdClose />
                </Button>
              )}
              {!task.finished && (
                <Button
                  title="Editar"
                  name="button edit"
                  color={theme.background.cards.yellow}
                  onClick={() => handleButtonEdit(task.id)}
                >
                  <MdModeEditOutline />
                </Button>
              )}
              <Button
                title="Excluir"
                name="button delete"
                color={theme.background.cards.red}
                onClick={() => handleButtonDelete(task.id)}
              >
                <MdOutlineDeleteOutline />
              </Button>
            </GroupButton>
            {mobile && (
              <Button
                className="mobile"
                onClick={() => handleButtonMobile(task.id)}
              >
                {groupButtonMobileActive !== task.id ? (
                  <MdMenu />
                ) : (
                  <MdMenuOpen />
                )}
              </Button>
            )}
          </ContainerButtons>
        </Row>
      ))}
    </Container>
  );
};

export default List;
