import React from 'react';
import { Container, Content, Dot } from './styles';

const Loading = () => {
  return (
    <Container>
      <Content>
        <Dot />
        <Dot />
        <Dot />
      </Content>
    </Container>
  );
};

export default Loading;
