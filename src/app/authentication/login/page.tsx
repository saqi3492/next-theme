'use client';
import { Grid } from '@mui/material';
import SignInForm from './SignInForm';
import AuthCard from '@/app/authentication/auth/AuthCard';
import Description from '@/app/authentication/auth/Description';

const SignIn = () => {
  return (
    <Grid container px={1} sx={{ minHeight: '100vh' }}>
      <Grid my={1} size={{ xs: 12, md: 6 }}>
        <AuthCard>
          <Description />
        </AuthCard>
      </Grid>
      <Grid size={{ xs: 12, md: 6 }} container justifyContent="center" alignItems="center">
        <SignInForm />
      </Grid>
    </Grid>
  );
};

export default SignIn;
