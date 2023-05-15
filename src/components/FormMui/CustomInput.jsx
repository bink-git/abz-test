import React from 'react';
import { styled } from '@mui/material/styles';
import TextField from '@mui/material/TextField';

const CssTextField = styled(TextField)(({ theme }) => ({
  fontSize: 16,
  width: '100%',
  color: '#7E7E7E',
  fontFamily: ['Nunito', 'sans-serif'].join(','),

  '& .MuiOutlinedInput-root': {
    width: '100%',
  },

  'label ': {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
  },
  'label + &': {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
  },
  '& label.Mui-focused': {
    color: '#7E7E7E',
  },

  '& .MuiFormHelperText-root': {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
  },

  '& .MuiOutlinedInput-root': {
    fontFamily: ['Nunito', 'sans-serif'].join(','),
    '& fieldset': {
      borderColor: '#D0CFCF',
    },
    '&:hover fieldset': {
      borderColor: '#D0CFCF',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#D0CFCF',
      borderWidth: 1,
    },
  },
  '& .MuiInputLabel-root.Mui-error': {
    color: '#CB3D40',
  },
  '& .MuiOutlinedInput-root.Mui-error': {
    'label ': {
      color: '#CB3D40',
    },
    '& fieldset': {
      borderColor: '#CB3D40',
    },
    '&:hover fieldset': {
      borderColor: '#CB3D40',
    },
    '&.Mui-focused fieldset': {
      borderColor: '#CB3D40',
      borderWidth: 2,
      fontFamily: ['Nunito', 'sans-serif'].join(','),
    },
  },
}));

const CustomInput = React.forwardRef(
  ({ label, error, helperText, ...rest }, ref) => {
    return (
      <CssTextField
        ref={ref}
        label={label}
        error={error}
        helperText={helperText}
        {...rest}
      />
    );
  }
);

export default CustomInput;
