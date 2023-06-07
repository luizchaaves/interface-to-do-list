import styled from 'styled-components';

export const SVG = styled.svg`
  width: 2.5rem;
  g {
    fill: ${(props) => props.theme.color.primary};
  }
`;

export const Container = styled.div`
  padding: 1.5rem 1rem;
  position: relative;
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const Image = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  font-weight: 700;
  color: ${(props) => props.theme.color.primary};
  cursor: pointer;
`;

export const ContainerTheme = styled.div`
  display: flex;
  position: absolute;
  right: 16px;
`;
