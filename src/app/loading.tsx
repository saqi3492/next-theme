'use client';

import { styled, useTheme, Theme } from '@mui/material/styles';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
import React from 'react';

const LoaderWrapper = styled('div')(() => ({
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 2001,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'white',
}));

const ClimbingLoader: React.FC = () => {
  const theme = useTheme<Theme>();
  return (
    <LoaderWrapper>
      <ClimbingBoxLoader color={theme.palette.primary.main} />
    </LoaderWrapper>
  );
};

export default ClimbingLoader;
