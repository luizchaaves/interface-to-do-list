import styled from 'styled-components';

export const Container = styled.div`
  color: ${(props) => props.theme.color.primary}}
  font-size: 1.3rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg{
    transform: rotate(-45deg)
  }
  
  &:hover svg{
    transition: .5s;
    transform: scale(1.2) rotate(-45deg);
  }
`;
