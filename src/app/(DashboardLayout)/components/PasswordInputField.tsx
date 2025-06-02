import { VisibilityOffOutlined, VisibilityOutlined } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField, Typography, SxProps } from '@mui/material';
import { useState, ChangeEvent } from 'react';
import { FormikProps } from 'formik';

interface PasswordInputFieldProps<T> {
  formik: FormikProps<T>;
  label: string;
  name: keyof T;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  size?: 'small' | 'medium';
  sx?: SxProps;
}

const PasswordInputField = <T,>({ formik, label, name, onChange, size = 'small', sx = {} }: PasswordInputFieldProps<T>) => {
  const [showPassword, setShowPassword] = useState(false);
  const { touched, error, value } = formik.getFieldMeta(name as string);

  return (
    <>
      <Typography fontSize={14} fontWeight="500" mb="4px">
        {label}
      </Typography>
      <TextField
        fullWidth
        name={String(name)}
        placeholder={label}
        value={value}
        size={size}
        onChange={onChange ? onChange : formik.handleChange}
        error={Boolean(touched && error)}
        helperText={touched && error ? error : ''}
        type={showPassword ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                {showPassword ? <VisibilityOffOutlined fontSize="small" /> : <VisibilityOutlined fontSize="small" />}
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{ mb: 1, '& .MuiOutlinedInput-root': { borderRadius: 1 }, ...sx }}
      />
    </>
  );
};

export default PasswordInputField;
