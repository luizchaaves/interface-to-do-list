import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  background: ${(props) => props.theme.background.primary.page};
  color: ${(props) => props.theme.color.primary};
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20%;
  padding: 1rem;
  height: 100%;
`;
