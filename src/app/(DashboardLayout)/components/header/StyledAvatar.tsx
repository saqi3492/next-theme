import React from 'react';
import { styled } from '@mui/material/styles';
import { Avatar, Badge } from '@mui/material';
import UserImg from '@/assets/user.jpg';

interface StyledAvatarProps {
  imgUrl?: string;
}

const StyledAvatar: React.FC<StyledAvatarProps> = ({ imgUrl }) => {
  return (
    <StyledBadge overlap="circular" anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }} variant="dot">
      <Avatar alt="User Avatar" src={imgUrl ?? UserImg.src} />
    </StyledBadge>
  );
};

export default StyledAvatar;

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': {
      transform: 'scale(.8)',
      opacity: 1,
    },
    '100%': {
      transform: 'scale(2.4)',
      opacity: 0,
    },
  },
}));
