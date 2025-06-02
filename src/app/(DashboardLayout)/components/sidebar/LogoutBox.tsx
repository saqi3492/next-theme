import React from 'react';
import { Box, Divider } from '@mui/material';
import { iconStyle, StyledText } from './MultiLevelMenu';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavItemButton } from './SidebarComponents';
import { handleLogout } from '@/utils/helpers';

interface LogoutBoxProps {
  isCompact: boolean;
}

const LogoutBox: React.FC<LogoutBoxProps> = ({ isCompact }) => {
  return (
    <Box sx={{ p: '0 7px' }}>
      <Divider sx={{ borderWidth: '1px', marginBottom: '4px' }} />
      <NavItemButton onClick={handleLogout}>
        <LogoutIcon sx={iconStyle(0)} />
        <StyledText compact={Number(isCompact)}>Log Out</StyledText>
      </NavItemButton>
    </Box>
  );
};

export default LogoutBox;
