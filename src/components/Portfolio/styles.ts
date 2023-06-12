import styled from 'styled-components';

export const Link = styled.a`
  text-decoration: none;
  color: ${(props) => props.theme.color.primary};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 0.5rem;
  cursor: pointer;
`;

export const Description = styled.div`
  max-width: 470px;
`;

export const Icon = styled.div`
  display: flex;
  font-size: 1.5rem;

  ${Container}:hover & {
    transition: 0.3s;
    transform: scale(1.2);
  }
`;

export const Text = styled.p`
  font-size: 0.9rem;
  text-align: center;
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.2rem;
  font-size: 0.9rem;
  margin-top: 0.5rem;

  ${Container}:hover & {
    transition: 0.3s;
    color: ${(props) => props.theme.background.cards.orange};
    transform: scale(1.05);
  }
`;
