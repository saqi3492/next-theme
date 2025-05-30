'use client';
import { useEffect } from 'react';
import { fetchSessionData } from './SessionsApiCalls';
import SessionsTable from './SessionsTable';
import SessionHeader from './SessionHeader';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../store/store';

const Sessions = () => {
  const rowData = useSelector((state: RootState) => state.Session.sessions);

  useEffect(() => {
    fetchSessionData();
  }, []);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
      <SessionHeader />
      <SessionsTable rowData={rowData} />
    </div>
  );
};

export default Sessions;
