import { Dialog, IconButton, DialogProps } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { ReactNode } from 'react';

interface AppDialogProps {
  onClose: () => void;
  maxWidth?: DialogProps['maxWidth'];
  children: ReactNode;
}

const AppDialog: React.FC<AppDialogProps> = ({ onClose, maxWidth = 'xs', children }) => {
  return (
    <Dialog open={true} onClose={onClose} fullWidth maxWidth={maxWidth} PaperProps={{ sx: { padding: 2 } }}>
      <IconButton onClick={onClose} sx={{ position: 'absolute', right: 8, top: 8 }}>
        <CloseIcon />
      </IconButton>
      {children}
    </Dialog>
  );
};

export default AppDialog;
