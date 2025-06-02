import { Autocomplete, TextField, Typography } from '@mui/material';
import { FormikProps } from 'formik';
import { SyntheticEvent } from 'react';

interface DropdownItem {
  label: string;
  value: string | number;
}

interface InputDropdownFieldProps<T> {
  items?: DropdownItem[];
  name: keyof T;
  label: string;
  formik: FormikProps<T>;
  multiSelect?: boolean;
  onChange?: (value: any) => void;
  disabled?: boolean;
}

const InputDropdownField = <T,>({
  items = [],
  name,
  label,
  formik,
  multiSelect = false,
  onChange,
  disabled = false,
}: InputDropdownFieldProps<T>) => {
  return (
    <>
      <Typography color={disabled ? 'textSecondary' : 'textPrimary'} fontSize={14} fontWeight="500" mb="4px">
        {label}
      </Typography>
      <Autocomplete
        multiple={multiSelect}
        options={items}
        getOptionLabel={option => option.label}
        disableCloseOnSelect={multiSelect}
        disabled={disabled}
        value={
          multiSelect
            ? items.filter(item => Array.isArray(formik.values[name]) && formik.values[name]?.includes(item.value))
            : items.find(item => item.value === formik.values[name]) || null
        }
        onChange={(_e: SyntheticEvent, newValue: any) => {
          const updatedValue = multiSelect ? newValue?.map((option: DropdownItem) => option.value) : (newValue?.value ?? null);
          if (onChange) {
            onChange(updatedValue);
          } else {
            formik.setFieldValue(name as string, updatedValue);
          }
        }}
        renderInput={params => (
          <TextField
            {...params}
            name={String(name)}
            fullWidth
            size="small"
            error={Boolean(formik.touched[name]) && Boolean(formik.errors[name])}
            helperText={formik.touched[name] && typeof formik.errors[name] === 'string' ? formik.errors[name] : ''}
            placeholder={`Select ${label}`}
            variant="outlined"
            sx={{ mb: 1 }}
          />
        )}
      />
    </>
  );
};

export default InputDropdownField;
