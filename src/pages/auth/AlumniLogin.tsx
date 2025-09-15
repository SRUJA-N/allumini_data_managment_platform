import React from 'react';
import { LoginForm } from '../../components/auth/LoginForm';

export const AlumniLogin: React.FC = () => {
  return (
    <LoginForm
      role="alumni"
      title="Alumni Portal"
      subtitle="Connect, mentor, and give back to your community"
    />
  );
};