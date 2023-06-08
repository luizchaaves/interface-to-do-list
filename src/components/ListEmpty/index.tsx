import { ReactNode } from 'react';
import { ImFilesEmpty } from 'react-icons/im';
import { Container, Content } from './styles';

type Props = {
  children: ReactNode;
};

const ListEmpty = ({ children }: Props) => {
  return (
    <Container>
      <Content>
        <ImFilesEmpty />
        {children}
      </Content>
    </Container>
  );
};

export default ListEmpty;
