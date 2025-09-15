import React from 'react';
import { LoginForm } from '../../components/auth/LoginForm';

export const EmployeeLogin: React.FC = () => {
  return (
    <LoginForm
      role="employee"
      title="Employee Portal"
      subtitle="Manage university operations and student services"
    />
  );
};