import { Label, Wrapper, InputText, InputTextArea, Error } from './styles';

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
  error: string | undefined;
  validate: Function;
  required: boolean;
}

const Input = ({
  label,
  type,
  name,
  value,
  onChange,
  error,
  required,
}: Props) => {
  return (
    <Wrapper>
      <Label htmlFor={name}>
        {label}
        {required ? '*' : ''}
      </Label>
      {type === 'textarea' ? (
        <InputTextArea
          className={error ? 'error' : ''}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      ) : (
        <InputText
          className={error ? 'error' : ''}
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      )}
      {error && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default Input;
