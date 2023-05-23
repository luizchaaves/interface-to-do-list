import styled from 'styled-components';

interface StyledProps {
  mobile: boolean;
}

export const Container = styled.div`
  flex-grow: 1;
`;

export const ContainerLogo = styled.div<StyledProps>`
  width: 100%;
  /* margin-bottom: 1.5rem; */
  margin-bottom: ${({ mobile }) => (mobile ? '0rem' : '1.5rem')};
  box-shadow: ${(props) => props.theme.boxShadow.tertiary};
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1.5rem 1rem;
  height: 5.5rem;

  h3.title {
    margin-left: 2rem;
  }
`;
