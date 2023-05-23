import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  font-size: 1.5rem;
  color: ${(props) => props.theme.color.primary};
  cursor: pointer;
  position: absolute;
  transition: 0.3s;

  &:hover {
    transform: scale(1.2);
  }
`;
