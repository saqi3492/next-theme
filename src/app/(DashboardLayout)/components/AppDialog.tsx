import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { DialogProps } from '@mui/material/Dialog';

interface AppDialogProps extends DialogProps {
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

const AppDialog: React.FC<AppDialogProps> = ({ onClose, title, children, ...dialogProps }) => {
  return (
    <Dialog onClose={onClose} {...dialogProps}>
      {title && (
        <DialogTitle sx={{ m: 0, p: 2 }}>
          {title}
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
      )}
      {children}
    </Dialog>
  );
};

export default AppDialog;
