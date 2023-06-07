import styled from 'styled-components';

export const Container = styled.div`
  width: 22.25rem;
  background: ${(props) => props.theme.background.primary.menu};
  height: 100vh;
  z-index: ${(props) => props.theme.zIndex.menu};
  box-shadow: ${(props) => props.theme.boxShadow.primary};
  position: relative;

  @media (max-width: 600px) {
    width: 100vw;
  }

  @media (min-width: 601px) and (max-width: 664px) {
    width: 16.56rem;
  }

  @media (min-width: 665px) and (max-width: 768px) {
    width: 20.75rem;
  }
`;

export const ContainerLogo = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  box-shadow: ${(props) => props.theme.boxShadow.tertiary};
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  padding: 1rem;

  @media (min-width: 601px) and (max-width: 768px) {
    gap: 1rem;
    padding: 0.5rem;
  }
`;

export const ContainerTheme = styled.div`
  position: absolute;
  display: flex;
  bottom: 12px;
  right: 16px;
`;
