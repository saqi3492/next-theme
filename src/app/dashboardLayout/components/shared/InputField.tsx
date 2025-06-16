import { TextField, Typography } from '@mui/material';
import { FormikProps } from 'formik';
import { ChangeEvent } from 'react';

interface InputFieldProps<T> {
  formik: FormikProps<T>;
  name: keyof T;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const InputField = <T,>({ formik, name, label, onChange }: InputFieldProps<T>) => {
  return (
    <>
      <Typography fontSize={14} fontWeight="500" mb="4px">
        {label}
      </Typography>
      <TextField
        fullWidth
        name={String(name)}
        placeholder={label}
        size="small"
        sx={{ mb: 1 }}
        value={formik.values[name] as any}
        onChange={onChange ?? formik.handleChange}
        error={Boolean(formik.touched[name]) && Boolean(formik.errors[name])}
        helperText={formik.touched[name] && typeof formik.errors[name] === 'string' ? formik.errors[name] : ''}
      />
    </>
  );
};

export default InputField;
