import React from 'react';
import { TextField } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';
import InputMask from 'react-input-mask';
import CustomInput from './CustomInput';

const PhoneInput = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();

  return (
    <>
      {/* <div>
        <Controller
          control={control}
          name="phone"
          error={!!errors.phone}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <InputMask
              mask="+38 \(999) 999-99-99"
              value={value}
              onChange={onChange}
            >
              {(inputProps) => (
                <TextField
                  {...inputProps}
                  label="Phone"
                  type="tel"
                  helperText={'+38 (XXX) XXX - XX - XX'}
                  sx={{
                    minWidth: '380px',
                    height: '54px',
                    marginBottom: '40px',
                  }}
                />
              )}
            </InputMask>
          )}
        />

        {errors?.phone && <p>{errors.phone.message}</p>}
      </div> */}
      <CustomInput
        name="Phone"
        label="Phone"
        type="tel"
        error={!!errors.phone}
        helperText={
          errors?.phone ? errors.phone.message : '+38 (XXX) XXX - XX - XX'
        }
        {...register('phone')}
      />

      {/* <TextField
        name="Phone"
        label="Phone"
        type="tel"
        error={!!errors.phone}
        helperText={
          errors?.phone ? errors.phone.message : '+38 (XXX) XXX - XX - XX'
        }
        {...register('phone')}
      /> */}
    </>
  );
};

export default PhoneInput;
