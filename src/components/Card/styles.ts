import styled from 'styled-components';

interface StyledProps {
  background?: string;
  fontWeight?: string;
}

export const Container = styled.div<StyledProps>`
  width: 100%;
  padding: 0.5rem;
  background: ${(props) => props.theme.background.primary.card};
  color: ${(props) => props.theme.color.primary};
  border-radius: 0.5rem;
  cursor: pointer;

  &.active,
  &:hover {
    background: ${({ background }) => background};
    color: ${(props) => props.theme.color.white};
  }

  &.active svg,
  &:hover svg {
    transition: 0.6s;
    color: ${({ background }) => background};
    transform: scale(1.2);
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

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

  ${Container}.active &,
  ${Container}:hover & {
    transition: 0.4s;
    background: #fff;
  }

  svg {
    font-size: 1.25rem;
  }
`;

export const Span = styled.span<StyledProps>`
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: 1rem;

  ${Container}.active &,
  ${Container}:hover & {
    transition: 0.4s;
    transform: scale(1.2);
  }
`;
