import React from 'react';
import { LoginForm } from '../../components/auth/LoginForm';

export const StudentLogin: React.FC = () => {
  return (
    <LoginForm
      role="student"
      title="Student Portal"
      subtitle="Access your academic journey and opportunities"
    />
  );
};