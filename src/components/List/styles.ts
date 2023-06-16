import styled, { keyframes } from 'styled-components';

type StyledPropsButton = {
  color?: string;
};

type StyledPropsRow = {
  borderColor: string;
};

export const Container = styled.div`
  height: 100%;
  overflow-y: auto;
`;

export const Row = styled.div<StyledPropsRow>`
  background: ${(props) => props.theme.background.primary.input};
  width: 100%;
  max-height: 56px;
  height: 100%;
  border-radius: 0.5rem;
  padding: 0.5rem;
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.5rem;
  border-left: 5px solid ${({ borderColor }) => borderColor};
  cursor: pointer;
`;

export const Text = styled.p`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ContainerButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  position: relative;
`;

const AnimationGroupButton = keyframes`
  from{
    right: -50px;
    visibility: hidden;
    opacity: 0;
  }
  to{
    right: 0px;
    visibility: visible;
    opacity: 1;
  }
`;

export const GroupButton = styled.div`
  background: transparent;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 600px) {
    opacity: 0;
    visibility: hidden;
    display: none;

    &.active {
      display: flex;
      position: relative !important;
      opacity: 1;
      visibility: visible;
      animation: ${AnimationGroupButton} 0.3s ease-in-out !important;
    }
  }
`;

export const Button = styled.button<StyledPropsButton>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background: transparent;
  color: ${({ color }) => color};
  border: 2px solid ${({ color }) => color};
  z-index: 10;
  font-size: 1.1rem;
  cursor: pointer;

  &.mobile {
    z-index: 100;
    color: ${(props) => props.theme.color.primary};
    border-color: ${(props) => props.theme.color.primary};
  }

  &:hover,
  &:focus {
    transition: 0.3s;
    transform: scale(1.1);
  }

  @media (max-width: 380px) {
    height: 32px;
    width: 32px;
  }
`;
