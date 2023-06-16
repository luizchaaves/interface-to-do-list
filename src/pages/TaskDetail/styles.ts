import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  background: ${(props) => props.theme.background.primary.page};
  z-index: ${(props) => props.theme.zIndex.page};
  color: ${(props) => props.theme.color.primary};
  height: 100vh;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 0rem 1rem;
  height: calc(100% - 104px);
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100% - 192px);
  }
`;

export const Task = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

interface StyledBadge {
  background: string;
}

export const Badge = styled.div<StyledBadge>`
  display: flex;
  margin-bottom: 0.5rem;

  & div {
    background: ${({ background }) => background};
    padding: 0.2rem;
    border-radius: 0.5rem;
    font-size: 0.8rem;
  }
`;

export const Title = styled.span`
  font-size: 2rem;
  font-weight: 600;
`;

export const Dates = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;
  flex-wrap: wrap;

  & span {
    font-size: 0.8rem;
  }
`;
