import CircularProgress from '@mui/material/CircularProgress';
import Backdrop from '@mui/material/Backdrop';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../store/store';

const LoadingBackdrop: React.FC = () => {
  const loadingBackdrop = useSelector((state: RootState) => state.Alerts.loadingBackdrop);

  return loadingBackdrop ? (
    <Backdrop sx={{ color: '#fff', zIndex: theme => theme.zIndex.tooltip + 2 }} open={true}>
      <CircularProgress color="inherit" />
    </Backdrop>
  ) : null;
};

export default LoadingBackdrop;
