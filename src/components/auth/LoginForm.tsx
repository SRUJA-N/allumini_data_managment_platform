import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/Button';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { User, Lock, Eye, EyeOff } from 'lucide-react';

interface LoginFormProps {
  role: 'student' | 'alumni' | 'employee' | 'admin';
  title: string;
  subtitle: string;
}

export const LoginForm: React.FC<LoginFormProps> = ({ role, title, subtitle }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();

  // Get demo credentials based on role
  const getDemoCredentials = () => {
    const roleCredentials = {
      student: { email: 'john@student.edu', password: 'password123' },
      alumni: { email: 'sarah@alumni.edu', password: 'password123' },
      employee: { email: 'mike@university.edu', password: 'password123' },
      admin: { email: 'lisa@admin.edu', password: 'password123' }
    };
    return roleCredentials[role];
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (login(email, password)) {
      navigate('/dashboard');
    } else {
      setError('Invalid credentials. Please try the demo credentials below.');
    }
  };

  const fillDemoCredentials = () => {
    const demo = getDemoCredentials();
    setEmail(demo.email);
    setPassword(demo.password);
  };

  const roleColors = {
    student: 'from-blue-600 to-indigo-600',
    alumni: 'from-teal-600 to-cyan-600',
    employee: 'from-orange-600 to-red-600',
    admin: 'from-purple-600 to-pink-600'
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <div className={`mx-auto w-16 h-16 bg-gradient-to-r ${roleColors[role]} rounded-2xl flex items-center justify-center mb-6`}>
            <span className="text-white font-bold text-2xl">{title.charAt(0)}</span>
          </div>
          <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
          <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
        </div>

        <Card>
          <CardContent className="space-y-6">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="email" className="sr-only">Email address</label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="password" className="sr-only">Password</label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="Password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {error && (
                <div className="text-red-600 text-sm text-center bg-red-50 py-2 rounded-lg">
                  {error}
                </div>
              )}

              <Button 
                type="submit" 
                className="w-full" 
                size="lg"
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign in'}
              </Button>
            </form>

            <div className="border-t border-gray-200 pt-6">
              <div className="bg-blue-50 rounded-xl p-4">
                <h4 className="text-sm font-semibold text-blue-900 mb-2">Demo Credentials</h4>
                <p className="text-xs text-blue-700 mb-3">
                  Email: {getDemoCredentials().email}<br />
                  Password: {getDemoCredentials().password}
                </p>
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  onClick={fillDemoCredentials}
                  className="w-full text-blue-700 border-blue-200 hover:bg-blue-50"
                >
                  Use Demo Credentials
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};