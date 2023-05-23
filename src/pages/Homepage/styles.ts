import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  background: ${(props) => props.theme.background.primary.page};
  color: ${(props) => props.theme.color.primary};
  height: 100vh;
`;
