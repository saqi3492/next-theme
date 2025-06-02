import SnackbarAlert from './SnackbarAlert';
import LoadingBackdrop from './LoadingBackdrop';
import TimTimLoader from './TimTimLoader';

const ProgressAlerts: React.FC = () => {
  return (
    <>
      <SnackbarAlert />
      <LoadingBackdrop />
      <TimTimLoader />
    </>
  );
};

export default ProgressAlerts;
