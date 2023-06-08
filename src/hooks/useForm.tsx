import { useState } from 'react';

type UseValidate = boolean;

const useForm = ({ useValidate }: { useValidate: UseValidate }) => {
  const [value, setValue] = useState('');
  const [error, setError] = useState<string>();

  function onChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    if (useValidate) validate(event.target.value);
    setValue(event.target.value);
  }

  function validate(value: string) {
    if (value.length === 0) {
      setError('Preencha um valor');
      return false;
    } else {
      setError(undefined);
      return true;
    }
  }

  return {
    value,
    setValue,
    onChange,
    error,
    validate: () => validate(value),
  };
};

export default useForm;
