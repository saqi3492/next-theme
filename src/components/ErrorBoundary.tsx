import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import WarningRoundedIcon from '@mui/icons-material/WarningRounded';
import { Box } from '@mui/material';
import { handleLogout } from '@/utils/helpers';

type Props = { children: React.ReactNode };

type State = { hasError: boolean; error?: Error };

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log error info here
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <Dialog open={true}>
          <DialogContent>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
              <WarningRoundedIcon sx={{ mb: 2, fontSize: 100 }} color="error" />
              <Typography>An error has occurred while rendering. Please Reload the page.</Typography>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button fullWidth variant="contained" color={'error'} onClick={() => handleLogout()}>
              Reload
            </Button>
          </DialogActions>
        </Dialog>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
