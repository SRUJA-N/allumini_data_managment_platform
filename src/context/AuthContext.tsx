import React, { createContext, useContext, useState, ReactNode } from 'react';
import { User } from '../types';
import { users } from '../data/users';

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => boolean;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const login = (email: string, password: string): boolean => {
    setIsLoading(true);
    
    // Simulate API call delay
    setTimeout(() => {
      const foundUser = users.find(u => u.email === email);
      if (foundUser && password === 'password123') {
        setUser(foundUser);
        setIsLoading(false);
        return true;
      }
      setIsLoading(false);
    }, 1000);

    const foundUser = users.find(u => u.email === email);
    if (foundUser && password === 'password123') {
      setUser(foundUser);
      return true;
    }
    
    return false;
  };

  const logout = () => {
    setUser(null);
  };

  const value: AuthContextType = {
    user,
    login,
    logout,
    isLoading
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};