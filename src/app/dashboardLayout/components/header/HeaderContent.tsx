import React, { memo } from 'react';
import { Stack } from '@mui/material';
import UserMenu from '@/app/dashboardLayout/components/header/UserMenu';
import HeaderLogo from '@/app/dashboardLayout/components/header/HeaderLogo';

const HeaderContent: React.FC = () => {
  return (
    <Stack direction="row" justifyContent="space-between">
      <HeaderLogo />
      <UserMenu />
    </Stack>
  );
};

export default memo(HeaderContent);
