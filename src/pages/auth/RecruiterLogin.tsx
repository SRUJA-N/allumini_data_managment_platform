import React from 'react';
import { LoginForm } from '../../components/auth/LoginForm';

export const RecruiterLogin: React.FC = () => {
  return (
    <LoginForm
      role="recruiter"
      title="Recruiter Portal"
      subtitle="Manage university operations and student services"
    />
  );
};
