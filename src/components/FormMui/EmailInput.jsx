import React from 'react';
import { TextField } from '@mui/material';
import { useFormContext } from 'react-hook-form';
import CustomInput from './CustomInput';

const EmailInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  return (
    <CustomInput
      type="email"
      label="Email"
      error={!!errors.email}
      helperText={errors?.email && errors.email.message}
      {...register('email')}
    />
  );
};

export default EmailInput;
