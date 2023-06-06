import { Label, Wrapper, InputText, InputTextArea } from './styles';

interface Props {
  label: string;
  type?: 'text' | 'password' | 'number' | 'email' | 'date' | 'textarea';
  name: string;
  value: string;
  onChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => void;
}

const Input = ({ label, type, name, value, onChange }: Props) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>{label}</Label>
      {type === 'textarea' ? (
        <InputTextArea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <InputText
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
    </Wrapper>
  );
};

export default Input;
