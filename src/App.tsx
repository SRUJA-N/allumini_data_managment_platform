import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import { DashboardLayout } from './components/layout/DashboardLayout';

// Auth Pages
import { WelcomePage } from './pages/WelcomePage';
import { StudentLogin } from './pages/auth/StudentLogin';
import { AlumniLogin } from './pages/auth/AlumniLogin';
import { EmployeeLogin } from './pages/auth/EmployeeLogin';
import { AdminLogin } from './pages/auth/AdminLogin';

// Dashboard Pages
import { Dashboard } from './pages/Dashboard';
import { Events } from './pages/Events';
import { Jobs } from './pages/Jobs';
import { Mentorship } from './pages/Mentorship';
import { Complaints } from './pages/Complaints';
import { AIAdvisor } from './pages/AIAdvisor';
import { Gamification } from './pages/Gamification';
import { Blockchain } from './pages/Blockchain';

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  return user ? <DashboardLayout>{children}</DashboardLayout> : <Navigate to="/" replace />;
};

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Welcome Page */}
      <Route path="/" element={user ? <Navigate to="/dashboard" replace /> : <WelcomePage />} />
      
      {/* Auth Routes */}
      <Route path="/login/student" element={user ? <Navigate to="/dashboard" replace /> : <StudentLogin />} />
      <Route path="/login/alumni" element={user ? <Navigate to="/dashboard" replace /> : <AlumniLogin />} />
      <Route path="/login/employee" element={user ? <Navigate to="/dashboard" replace /> : <EmployeeLogin />} />
      <Route path="/login/admin" element={user ? <Navigate to="/dashboard" replace /> : <AdminLogin />} />

      {/* Protected Dashboard Routes */}
      <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
      <Route path="/events" element={<ProtectedRoute><Events /></ProtectedRoute>} />
      <Route path="/jobs" element={<ProtectedRoute><Jobs /></ProtectedRoute>} />
      <Route path="/job-referrals" element={<ProtectedRoute><Jobs /></ProtectedRoute>} />
      <Route path="/mentorship" element={<ProtectedRoute><Mentorship /></ProtectedRoute>} />
      <Route path="/complaints" element={<ProtectedRoute><Complaints /></ProtectedRoute>} />
      <Route path="/memories" element={<ProtectedRoute><div className="p-6"><h1 className="text-2xl font-bold">Memories Gallery</h1><p className="text-gray-600">Coming soon...</p></div></ProtectedRoute>} />
      <Route path="/ai-advisor" element={<ProtectedRoute><AIAdvisor /></ProtectedRoute>} />
      <Route path="/gamification" element={<ProtectedRoute><Gamification /></ProtectedRoute>} />
      <Route path="/blockchain" element={<ProtectedRoute><Blockchain /></ProtectedRoute>} />

      {/* Employee Routes */}
      <Route path="/job-management" element={<ProtectedRoute><div className="p-6"><h1 className="text-2xl font-bold">Job Management</h1><p className="text-gray-600">Manage job postings and applications.</p></div></ProtectedRoute>} />
      <Route path="/event-management" element={<ProtectedRoute><div className="p-6"><h1 className="text-2xl font-bold">Event Management</h1><p className="text-gray-600">Approve and manage university events.</p></div></ProtectedRoute>} />

      {/* Admin Routes */}
      <Route path="/approvals" element={<ProtectedRoute><div className="p-6"><h1 className="text-2xl font-bold">Approvals</h1><p className="text-gray-600">Manage system approvals and verifications.</p></div></ProtectedRoute>} />
      <Route path="/analytics" element={<ProtectedRoute><div className="p-6"><h1 className="text-2xl font-bold">Platform Analytics</h1><p className="text-gray-600">View comprehensive platform analytics.</p></div></ProtectedRoute>} />
      <Route path="/leaderboard" element={<ProtectedRoute><div className="p-6"><h1 className="text-2xl font-bold">Leaderboard</h1><p className="text-gray-600">Top contributors and achievements.</p></div></ProtectedRoute>} />

      {/* Settings */}
      <Route path="/settings" element={<ProtectedRoute><div className="p-6"><h1 className="text-2xl font-bold">Settings</h1><p className="text-gray-600">Manage your account settings.</p></div></ProtectedRoute>} />

      {/* Catch all route */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="App">
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;