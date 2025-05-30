import React from 'react';
import { Box, Typography } from '@mui/material';

const SessionsPage: React.FC = () => {
  return (
    <Box p={3}>
      <Typography variant="h4" fontWeight={700} mb={2}>
        Sessions
      </Typography>
      <Typography variant="body1">
        This is the Sessions page. Add your sessions table or content here.
      </Typography>
    </Box>
  );
};

export default SessionsPage;
