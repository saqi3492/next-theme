import { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import OTPInput from 'react-otp-input';
import { FormikProps } from 'formik';

interface OtpVerificationFormValues {
  email: string;
  password: string;
  confirmPassword: string;
  otpCode: string;
}

interface OtpVerificationProps {
  formik: FormikProps<OtpVerificationFormValues>;
}

const OtpVerification = ({ formik }: OtpVerificationProps) => {
  const [otp, setOtp] = useState('');

  const handleChange = (otpValue: string) => {
    setOtp(otpValue);
    formik.setFieldValue('otpCode', otpValue);
  };

  return (
    <Box sx={{ p: { xs: 5, lg: 12 }, width: '100%', maxWidth: '800px' }}>
      <Typography fontSize={28} fontWeight="500" gutterBottom>
        Enter Verification Code
      </Typography>
      <Typography fontSize={16} fontWeight="400" color="textSecondary" mb={4}>
        Weve sent a verification code to your registered email address. Please enter the code to continue.
      </Typography>

      <Box display="flex" alignItems="center" justifyContent="center" gap={3} mb={4}>
        <OTPInput
          value={otp}
          onChange={handleChange}
          numInputs={4}
          renderSeparator={
            <Box component="span" mx={1}>
              -
            </Box>
          }
          inputType="tel"
          renderInput={props => (
            <input
              {...props}
              style={{
                height: '48px',
                width: '48px',
                textAlign: 'center',
                padding: '10px',
                fontSize: '20px',
                borderRadius: '4px',
                border: '1px solid #ccc',
                outline: 'none',
              }}
              onFocus={e => (e.target.style.borderColor = 'green')}
            />
          )}
          shouldAutoFocus
        />
      </Box>
      {formik.touched.otpCode && formik.errors.otpCode && (
        <Typography color="error" variant="body2" mb={2}>
          {formik.errors.otpCode}
        </Typography>
      )}

      <Button size="large" type="submit" fullWidth variant="contained" disabled={formik.isSubmitting}>
        Continue
      </Button>
    </Box>
  );
};

export default OtpVerification;
