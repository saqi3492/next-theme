'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useFormik, FormikHelpers } from 'formik';
import * as Yup from 'yup';
import { Grid } from '@mui/material';
import ForgotPasswordForm from './ForgotPasswordForm';
import ResetPasswordForm from './ResetPasswordForm';
import OtpVerification from './OtpVerification';
import { forgotPassword, resetPassword } from '../auth/AuthApiCalls';
import Description from '../auth/Description';
import AuthCard from '@/app/(DashboardLayout)/components/shared/AuthCard';

/**
 * @typedef {Object} ForgotPasswordFormValues
 * @property {string} email
 * @property {string} password
 * @property {string} confirmPassword
 * @property {string} otpCode
 */

/**
 * Type for the form steps.
 */
type FormType = 'forgot' | 'otp-verification' | 'reset';

const validationSchemaEmail = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
});

const validationSchemaPassword = Yup.object().shape({
  password: Yup.string().min(8, 'Password must be at least 8 characters long').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), undefined], 'Passwords not matched')
    .required('Confirm Password is required'),
});

const validationSchemaOtp = Yup.object().shape({
  otpCode: Yup.string().length(4, 'OTP must be 4 characters long').required('OTP is required'),
});

interface ForgotPasswordFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  otpCode: string;
}

const ForgotPassword = () => {
  const [formType, setFormType] = useState<FormType>('forgot');
  const router = useRouter();

  const handleContinue = (type: FormType) => {
    setFormType(type);
  };

  const formik = useFormik<ForgotPasswordFormValues>({
    initialValues: { email: '', password: '', confirmPassword: '', otpCode: '' },
    validationSchema:
      formType === 'forgot' ? validationSchemaEmail : formType === 'otp-verification' ? validationSchemaOtp : validationSchemaPassword,
    enableReinitialize: true,
    onSubmit: async (values, _helpers) => {
      if (formType === 'forgot') {
        await forgotPassword(values);
        handleContinue('otp-verification');
      } else if (formType === 'otp-verification') {
        handleContinue('reset');
      } else {
        await resetPassword(values);
        router.push('/signin');
      }
    },
  });

  return (
    <Grid container px={1} sx={{ minHeight: '100vh' }}>
      <Grid my={1} size={{ xs: 12, md: 6 }}>
        <AuthCard>
          <Description />
        </AuthCard>
      </Grid>
      <Grid
        component="form"
        onSubmit={formik.handleSubmit}
        onReset={formik.handleReset}
        noValidate
        autoComplete="off"
        size={{ xs: 12, md: 6 }}
        container
        justifyContent="center"
        alignItems="center"
      >
        {formType === 'forgot' && <ForgotPasswordForm formik={formik} />}
        {formType === 'otp-verification' && <OtpVerification formik={formik} />}
        {formType === 'reset' && <ResetPasswordForm formik={formik} />}
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
