import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { handleSignUp } from '@/app/authentication/auth/AuthApiCalls';
import { Box, Button, Stack, Typography } from '@mui/material';
import CustomLink from '@/app/(DashboardLayout)/components/shared/CustomLink';
import InputField from '@/app/(DashboardLayout)/components/shared/InputField';
import InputDropdownField from '@/app/(DashboardLayout)/components/shared/InputDropdownField';
import { useSelector } from 'react-redux';
import PasswordInputField from '@/app/(DashboardLayout)/components/shared/PasswordInputField';
import { useRouter } from 'next/navigation';

interface SignUpFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
  zipCode: string;
  country: string | number;
}

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string(),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords do not match')
    .required('Confirm Password is required'),
  zipCode: Yup.string().required('Zip Code is required'),
  phone: Yup.string()
    .matches(/^[+]{1}\d{9,15}$/, 'Enter a valid phone number')
    .required('Phone Number is required'),
  country: Yup.mixed<string | number>().required('Country is required'),
});

const SignUpForm = () => {
  const countries = useSelector((state: any) => state.MasterData.countries);
  const router = useRouter();

  const formik = useFormik<SignUpFormValues>({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
      phone: '',
      zipCode: '',
      country: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values, _helpers: FormikHelpers<SignUpFormValues>) => {
      const isSuccess = await handleSignUp(values);
      if (isSuccess) {
        router.replace('/tutorial');
      }
    },
  });

  const handleCountryChange = (selectedCountryValue: string | number) => {
    const selectedCountry = countries.find((c: any) => c.value === selectedCountryValue);
    formik.setFieldValue('country', selectedCountryValue);
    formik.setFieldValue('phone', selectedCountry?.dialCode || '');
  };

  const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = '+' + event.target.value.trim().slice(1).replace(/\D+/g, '');
    formik.setFieldValue('phone', inputValue);
  };

  return (
    <Box sx={{ p: { xs: 5, lg: 12 }, width: '100%', maxWidth: '800px' }}>
      <Typography fontWeight="500" fontSize={28} gutterBottom>
        Create your account
      </Typography>

      <form onSubmit={formik.handleSubmit} noValidate autoComplete="off" style={{ marginTop: '20px' }}>
        <Stack direction="row" spacing={2}>
          <Stack flexGrow={1}>
            <InputField formik={formik} name="firstName" label="First Name" />
          </Stack>
          <Stack flexGrow={1}>
            <InputField formik={formik} name="lastName" label="Last Name" />
          </Stack>
        </Stack>

        <InputField formik={formik} name="email" label="Email Address" />

        <PasswordInputField formik={formik} name="password" label="Password" size="small" />

        <PasswordInputField formik={formik} name="confirmPassword" label="Confirm Password" size="small" />

        <InputField formik={formik} name="zipCode" label="Zip Code" />

        <InputDropdownField formik={formik} items={countries} name="country" label="Country" onChange={handleCountryChange} />

        <InputField formik={formik} name="phone" label="Phone Number" onChange={handlePhoneInput} />

        <Button size="large" type="submit" fullWidth variant="contained" sx={{ my: 3 }} disabled={formik.isSubmitting}>
          Sign Up
        </Button>

        <Typography variant="body2" color="textSecondary" align="center" mt={2}>
          Already have an account? <CustomLink href="/authentication/login">Sign In</CustomLink>
        </Typography>
      </form>
    </Box>
  );
};

export default SignUpForm;
