'use client';

import { redirect } from 'next/navigation';
import { useEffect } from 'react';

export default function HomePage() {
  useEffect(() => {
    const authToken = localStorage.getItem('authentication_token');
    if (!authToken) {
      redirect('/authentication/login');
    } else {
      redirect('/sessions');
    }
  }, []);

  return null;
}
