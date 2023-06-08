import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  top: 30%;
  text-align: center;

  & svg {
    font-size: 5rem;
  }
`;

export const Icon = styled.div`
  font-size: 5rem;
`;
