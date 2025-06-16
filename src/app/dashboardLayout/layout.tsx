'use client';
import React, { useEffect } from 'react';
import { Box } from '@mui/material';
import Sidebar from '@/app/dashboardLayout/components/sidebar/Sidebar';
import Header from '@/app/dashboardLayout/components/header/Header';
import { COLLAPSED_SIDEBAR_WIDTH, HEADER_HEIGHT, SIDEBAR_WIDTH } from '@/utils/constants';
import { useSelector } from 'react-redux';
import { redirect } from 'next/navigation';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const sidebarCompact = useSelector((state: any) => state.ThemeOptions.sidebarCompact);

  useEffect(() => {
    const authToken = localStorage.getItem('authentication_token');
    if (!authToken) {
      redirect('/authentication/login');
    }
  }, []);

  return (
    <>
      <Sidebar />

      <Header />

      <Box
        sx={{
          p: 2,
          mt: `${HEADER_HEIGHT}px`,
          ml: { xs: 0, md: sidebarCompact ? `${COLLAPSED_SIDEBAR_WIDTH}px` : `${SIDEBAR_WIDTH}px` },
          transition: 'all .2s ease',
          height: `calc(100vh - ${HEADER_HEIGHT}px)`,
        }}
      >
        {children}
      </Box>
    </>
  );
}
