import styled from 'styled-components';

export const Container = styled.div`
  flex-grow: 1;
  background: ${(props) => props.theme.background.primary.page};
  z-index: ${(props) => props.theme.zIndex.page};
  color: ${(props) => props.theme.color.primary};
  height: 100vh;
  overflow: hidden;
  position: relative;
`;

export const Content = styled.div`
  padding: 0rem 1rem;
  height: calc(100% - 104px);
  overflow-y: auto;

  @media (max-width: 600px) {
    height: calc(100% - 192px);
  }
`;
