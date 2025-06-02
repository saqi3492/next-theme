import { ReactNode } from 'react';
import { Box } from '@mui/material';
import Logo from '@/assets/logo.png';
import Image from 'next/image';

interface AuthCardProps {
  children: ReactNode;
}

const AuthCard = ({ children }: AuthCardProps) => {
  return (
    <Box
      sx={{
        p: 5,
        height: '100%',
        backgroundColor: '#eeeeeefa',
        borderRadius: '56px',
      }}
    >
      {/* Use require to ensure src is string for MUI Box with component="img" */}
      <Image src={Logo} alt="logo" width={200} height={48} priority />

      <Box
        sx={{
          flexDirection: 'column',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          height: 'calc(100% - 112px)',
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default AuthCard;
