import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-bottom: 1.2rem;
`;
export const Label = styled.label`
  display: block;
  font-size: 1rem;
  line-height: 1;
  padding-bottom: 0.5rem;
`;

export const InputText = styled.input`
  border: 1px solid ${(props) => props.theme.background.primary.menu};
  display: block;
  width: 100%;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: ${(props) => props.theme.background.primary.input};
  transition: 0.3s;
  color: ${(props) => props.theme.color.primary};

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.color.white},
      0 0 0 4px ${(props) => props.theme.background.primary.card};
  }
`;

export const InputTextArea = styled.textarea`
  border: 1px solid ${(props) => props.theme.background.primary.menu};
  display: block;
  width: 100%;
  height: 200px;
  font-size: 1rem;
  padding: 0.8rem;
  border-radius: 0.4rem;
  background: ${(props) => props.theme.background.primary.input};
  color: ${(props) => props.theme.color.primary};
  transition: 0.3s;
  resize: none;

  &:hover,
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px ${(props) => props.theme.color.white},
      0 0 0 4px ${(props) => props.theme.background.primary.card};
  }
`;
