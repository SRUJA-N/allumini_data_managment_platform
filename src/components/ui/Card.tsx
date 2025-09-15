import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export const Card: React.FC<CardProps> = ({ children, className, hover = false }) => {
  return (
    <div
      className={cn(
        'bg-white rounded-2xl shadow-sm border border-gray-100',
        hover && 'hover:shadow-lg hover:border-gray-200 transition-all duration-200 cursor-pointer',
        className
      )}
    >
      {children}
    </div>
  );
};

export const CardHeader: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('px-6 py-4 border-b border-gray-100', className)}>
    {children}
  </div>
);

export const CardContent: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('px-6 py-4', className)}>
    {children}
  </div>
);