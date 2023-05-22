import styled from 'styled-components';

export const Container = styled.div`
  width: 22.25rem;
  background: ${(props) => props.theme.background.primary.menu};
  height: 100vh;
  z-index: ${(props) => props.theme.zIndex.menu};
  box-shadow: ${(props) => props.theme.boxShadow.primary};

  @media (max-width: 600px) {
    width: 100vw;
    box-shadow: none;
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
  box-shadow: 0px 1px 4px rgba(115, 115, 115, 0.75);
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
