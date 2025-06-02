import { useCallback } from 'react';
import Alert from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';
import { setSnackbarObj, SnackbarObj } from '../../../../../store/reducers/alertsSlice';

const SnackbarAlert: React.FC = () => {
  const dispatch = useDispatch();
  const snackbarObj = useSelector((state: RootState) => state.Alerts.snackbarObj) as SnackbarObj | null;

  // Only message and severity are available in SnackbarObj
  const autoHideDuration = 5000;
  const anchorOrigin = { vertical: 'bottom', horizontal: 'left' } as const;
  const severity = snackbarObj?.severity ?? 'error';
  const message = snackbarObj?.message ?? 'Oops! Something unexpected happened.';

  const handleClose = useCallback(
    (e: React.SyntheticEvent | Event, reason?: string) => {
      if (reason !== 'clickaway') {
        dispatch(setSnackbarObj(null));
      }
    },
    [dispatch]
  );

  return snackbarObj ? (
    <Snackbar open={true} autoHideDuration={autoHideDuration} onClose={handleClose} anchorOrigin={anchorOrigin}>
      <Alert onClose={handleClose} variant="filled" severity={severity} elevation={6} style={{ whiteSpace: 'pre-line' }}>
        {message}
      </Alert>
    </Snackbar>
  ) : null;
};

export default SnackbarAlert;
