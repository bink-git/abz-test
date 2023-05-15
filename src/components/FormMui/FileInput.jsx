import { useState, useContext } from 'react';
import { CustomContext } from '../../hooks/Context';
import { styled } from '@mui/material/styles';
import { Button, TextField, Box } from '@mui/material';
import { useFormContext } from 'react-hook-form';

const CustomButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '10px',
  border: '1px solid #000',
  backgroundColor: 'transparent',
  borderColor: '#000',
  borderRadius: '4px',
  borderTopRightRadius: '0',
  borderBottomRightRadius: '0',
  color: '#000',
  width: '84px',
  height: '56px',
  boxSizing: 'border-box',
  fontFamily: ['Nunito', 'sans-serif'].join(','),
  '&:hover': {
    backgroundColor: '#ebebeb',
    borderColor: '#000',
    boxShadow: 'none',
  },
  '&:active': {
    boxShadow: 'none',
    backgroundColor: 'transparent',
    borderColor: '#000',
  },
});

const CustomTextField = styled(TextField)({
  fontFamily: ['Nunito', 'sans-serif'].join(','),
  '& .MuiOutlinedInput-root': {
    '& fieldset': {
      border: '1px solid #d0cfcf',
      borderRadius: '4px',
      borderTopLeftRadius: '0',
      borderBottomLeftRadius: '0',
      borderLeft: 'none',
      justifyContent: 'space-between',
      textAlign: 'left',
      boxSizing: 'border-box',
    },
  },
  '& .Mui-error.MuiOutlinedInput-root': {
    '& fieldset': {
      border: '2px solid #d32f2f',
      borderLeft: 'none',
    },
  },
});

const FileInput = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const { isActive, setIsActive } = useContext(CustomContext);

  const [photo, setPhoto] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setPhoto(file);
    setIsActive(true);
  };

  return (
    <Box
      sx={{
        width: 380,
        display: 'flex',
      }}
    >
      <CustomButton
        variant="contained"
        disableRipple
        component="label"
        onChange={handleFileChange}
        sx={{ border: errors?.photo ? '2px solid #d32f2f !important' : '' }}
      >
        Upload
        <input hidden type="file" {...register('photo')} />
      </CustomButton>

      <CustomTextField
        error={!!errors?.photo}
        helperText={errors?.photo && errors.photo.message}
        placeholder="Upload your photo"
        value={photo ? photo.name : ''}
        sx={{ flexGrow: 1 }}
      />
    </Box>
  );
};

export default FileInput;
