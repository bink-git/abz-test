import React from 'react';
import { useFormContext } from 'react-hook-form';
import CustomInput from './CustomInput';

const NameInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <CustomInput
      label="Your name"
      error={!!errors.name}
      helperText={errors?.name && errors.name.message}
      {...register('name')}
    />
  );
};

export default NameInput;
