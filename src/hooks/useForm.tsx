import { useState } from 'react';

const useForm = () => {
  const [value, setValue] = useState('');

  function onChange(
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) {
    setValue(event.target.value);
  }

  return {
    value,
    setValue,
    onChange,
  };
};

export default useForm;
