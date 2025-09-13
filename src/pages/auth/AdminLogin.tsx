import React from 'react';
import { LoginForm } from '../../components/auth/LoginForm';

export const AdminLogin: React.FC = () => {
  return (
    <LoginForm
      role="admin"
      title="Admin Portal"
      subtitle="Oversee platform operations and analytics"
    />
  );
};