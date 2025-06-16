import { Box, Button, Typography } from '@mui/material';
import CustomLink from '@/app/dashboardLayout/components/shared/CustomLink';
import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { handleSignIn } from '@/app/authentication/auth/AuthApiCalls';
import PasswordInputField from '@/app/dashboardLayout/components/shared/PasswordInputField';
import InputField from '@/app/dashboardLayout/components/shared/InputField';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

interface SignInFormValues {
  email: string;
  password: string;
}

const validationSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
});

const SignInForm = () => {
  const router = useRouter();

  const formik = useFormik<SignInFormValues>({
    initialValues: { email: '', password: '' },
    validationSchema: validationSchema,
    onSubmit: async (values, _helpers: FormikHelpers<SignInFormValues>) => {
      const isSuccess = await handleSignIn(values);
      if (isSuccess) router.replace('/sessions');
    },
  });

  return (
    <Box sx={{ p: { xs: 5, lg: 12 }, width: '100%', maxWidth: '800px' }}>
      <Typography fontWeight="500" fontSize={28} gutterBottom>
        Welcome back
      </Typography>
      <Typography fontWeight="400" fontSize={16} color="textSecondary" mb={3}>
        Please sign-in to your account and start the adventure.
      </Typography>

      <form onSubmit={formik.handleSubmit} noValidate autoComplete="off" style={{ marginTop: '20px' }}>
        <InputField formik={formik} name="email" label="Email Address" />
        <PasswordInputField formik={formik} name="password" label="Password" size="small" />
        <Box display="flex" justifyContent="flex-end" mt={1}>
          <Typography
            component={Link}
            href="/"
            fontWeight="500"
            sx={{
              textDecoration: 'none',
              color: 'primary.main',
            }}
          ></Typography>
          <CustomLink href="/authentication/resetPassword" sx={{ fontSize: '13px', fontWeight: 500 }}>
            Forgot Password?
          </CustomLink>
        </Box>
        <Button size="large" type="submit" fullWidth variant="contained" sx={{ my: 2 }}>
          Sign In
        </Button>
        <Typography variant="body2" color="textSecondary" align="center" mt={2}>
          New on our platform? <CustomLink href="/authentication/signup">Create a New Account</CustomLink>
        </Typography>
      </form>
    </Box>
  );
};

export default SignInForm;
