import styled from 'styled-components';

interface StyledProps {
  background: string;
}

export const Icon = styled.div<StyledProps>`
  background: ${({ background }) => background};
  padding: 0.5rem;
  border-radius: 50%;
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;

  svg {
    font-size: 1.25rem;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;

  span {
    font-weight: 700;
  }
`;

export const Container = styled.div<StyledProps>`
  width: 100%;
  padding: 0.5rem;
  background: ${(props) => props.theme.background.primary.card};
  color: ${(props) => props.theme.color.primary};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;

  p {
    font-weight: 600;
  }

  &.active,
  &:hover {
    background: ${({ background }) => background};
    color: ${(props) => props.theme.color.white};
  }

  &.active ${Icon}, &:hover ${Icon} {
    background: #fff;
  }

  &.active ${Icon} > svg,
  &:hover ${Icon} > svg {
    color: ${({ background }) => background};
  }
`;
