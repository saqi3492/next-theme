import { Box, Button, Stack, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { FormikProps } from 'formik';
import InputField from '@/app/(DashboardLayout)/components/InputField';
import CustomLink from '@/app/(DashboardLayout)/components/CustomLink';

interface ForgotPasswordFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  otpCode: string;
}

interface ForgotPasswordFormProps {
  formik: FormikProps<ForgotPasswordFormValues>;
}

const ForgotPasswordForm = ({ formik }: ForgotPasswordFormProps) => {
  return (
    <Box sx={{ p: { xs: 5, lg: 12 }, width: '100%', maxWidth: '800px' }}>
      <Typography fontSize={28} fontWeight="500" gutterBottom>
        Forgot Password
      </Typography>
      <Typography fontSize={16} fontWeight="400" color="textSecondary" mb={4}>
        Enter your email and we will send you instructions to reset your password.
      </Typography>

      <InputField formik={formik} name="email" label="Email Address" />

      <Button size="large" type="submit" fullWidth variant="contained" color="primary" disabled={formik.isSubmitting} sx={{ mt: 5 }}>
        Submit
      </Button>
      <Stack alignItems="center" mt={1}>
        <CustomLink href="/authentication/login" sx={{ display: 'flex', alignItems: 'center' }}>
          <ArrowBackIosNewIcon fontSize="small" />
          Back to Sign In
        </CustomLink>
      </Stack>
    </Box>
  );
};

export default ForgotPasswordForm;
