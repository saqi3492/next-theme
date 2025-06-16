//import { getFormattedDate, handleCatchError, handleErrorMessages } from '@/utils/helpers';
import { dispatch, getState } from '@/store/store';
import { setHideBeatLoader, setShowBeatLoader, setSnackbarObj } from '@/store/reducers/alertsSlice';
import { deleteSessionAction, setSessions } from '@/store/reducers/sessionSLice';

import { getFormattedDate, handleCatchError, handleErrorMessages } from '@/utils/helpers';

export interface Session {
  id: number;
  sessionId: string;
  patientPseudoName: string;
  providerId: number;
  sessionDuration: number | null;
  doctorNote: string | null;
  transcription: string | null;
  createdAt: string;
  updatedAt: string;
  transcriptionUsage: any;
}

const getFormattedSessionData = (session: Session) => {
  return {
    id: session.id,
    sessionId: session.sessionId,
    patientName: session.patientPseudoName,
    createdAt: getFormattedDate(session.createdAt),
    duration: session.sessionDuration || session.sessionDuration === 0 ? `${session.sessionDuration} mins` : '',
  };
};

export const fetchSessionData = async (): Promise<void> => {
  if (getState().Session.sessions) return;

  try {
    dispatch(setShowBeatLoader());

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 2000));

    // const response = await axios.post('/sessions/list', { page_size: 2000 });
    const response: {
      status: boolean;
      data: {
        count: number;
        total_count: number;
        total_page_count: number;
        page: number;
        page_size: number;
        data: Session[];
      };
      message: string;
      errors?: any;
    } = {
      status: true,
      data: {
        count: 5,
        total_count: 5,
        total_page_count: 1,
        page: 1,
        page_size: 2000,
        data: [
          {
            id: 425,
            sessionId: '57169cc8-e375-4b4b-962a-a67a26c81d98',
            patientPseudoName: 'Daniel',
            providerId: 41,
            sessionDuration: 0,
            doctorNote: null,
            transcription: null,
            createdAt: '2024-12-13T13:06:29.000+00:00',
            updatedAt: '2024-12-13T13:06:29.000+00:00',
            transcriptionUsage: null,
          },
        ],
      },
      message: ' Session List',
    };

    if (response?.status && response.data?.data) {
      dispatch(setSessions(response.data.data.map(getFormattedSessionData)));
    } else {
      handleErrorMessages(response.errors);
    }
  } catch (error) {
    handleCatchError(error);
  } finally {
    dispatch(setHideBeatLoader());
  }
};

export const deleteSessionById = async (sessionId: string): Promise<void> => {
  try {
    // const response = await axios.delete(`/sessions/${sessionId}`);
    const response: { status: boolean; data: boolean; message: string; errors?: any } = {
      status: true,
      data: true,
      message: 'Session deleted successfully.',
    };

    if (response.status) {
      dispatch(deleteSessionAction(sessionId));
      dispatch(setSnackbarObj({ message: 'Session  deleted successfully.', severity: 'success' }));
    } else {
      handleErrorMessages(response.errors);
    }
  } catch (error) {
    handleCatchError(error);
  }
};
