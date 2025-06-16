'use client';
import React, { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  console.log('i am in the authentication layout');

  return <div className="auth-layout">{children}</div>;
}
