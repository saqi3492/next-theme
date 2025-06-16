import { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { IconButton, Tooltip } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import SessionDeleteDialog from './SessionDeleteDialog';
import { useRouter } from 'next/navigation';

interface ActionRendererProps {
  data: {
    sessionId: string;
    [key: string]: any;
  };
}

const ActionRenderer: React.FC<ActionRendererProps> = ({ data }) => {
  const router = useRouter();
  const [open, setOpen] = useState(false);

  return (
    <>
      <Tooltip title="Show Details" placement="left">
        <IconButton onClick={() => router.push(`/sessions/details/${data.sessionId}`)}>
          <OpenInNewIcon />
        </IconButton>
      </Tooltip>
      <Tooltip title="Delete" placement="right">
        <IconButton onClick={() => setOpen(true)}>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
      {open ? <SessionDeleteDialog closeDialog={() => setOpen(false)} data={data} /> : null}
    </>
  );
};

export default ActionRenderer;
