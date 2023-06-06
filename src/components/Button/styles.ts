import styled from 'styled-components';

export const ButtonComponent = styled.button`
  font-size: 1rem;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  border: none;
  border-radius: 0.5rem;
  min-width: 12rem;
  background: ${(props) => props.theme.background.cards.green};
  color: ${(props) => props.theme.color.white};
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.2s;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.color.white},
      0 0 0 4px ${(props) => props.theme.background.cards.green};
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
