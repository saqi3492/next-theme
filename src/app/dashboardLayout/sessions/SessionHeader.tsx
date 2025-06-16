import { Typography, Stack, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const SessionHeader: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleStartSession = async () => {
    setLoading(true);
    router.push('/sessions');
    setLoading(false);
  };

  return (
    <>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mt={1.5} mb={2.5}>
        <Typography variant="h6" fontWeight="500">
          Previous Sessions
        </Typography>

        <Button variant="contained" onClick={handleStartSession} startIcon={<AddIcon />} loading={loading}>
          Start Session
        </Button>
      </Stack>
    </>
  );
};

export default SessionHeader;
