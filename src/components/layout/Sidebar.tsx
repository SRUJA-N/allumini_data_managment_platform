import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  Calendar, 
  Briefcase, 
  Users, 
  MessageSquare, 
  Brain, 
  Trophy,
  Shield,
  Settings,
  LogOut,
  CheckCircle,
  BarChart3,
  UserCheck
} from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { cn } from '../../utils/cn';

interface SidebarItem {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  href: string;
  badge?: string;
}

export const Sidebar: React.FC = () => {
  const { user, logout } = useAuth();

  const getNavigationItems = (): SidebarItem[] => {
    const baseItems = [
      { icon: Home, label: 'Dashboard', href: '/dashboard' }
    ];

    switch (user?.role) {
      case 'student':
        return [
          ...baseItems,
          { icon: Calendar, label: 'Events', href: '/events' },
          { icon: Briefcase, label: 'Jobs', href: '/jobs' },
          { icon: Users, label: 'Mentorship', href: '/mentorship' },
          { icon: MessageSquare, label: 'Complaints', href: '/complaints' },
          { icon: Brain, label: 'AI Career Advisor', href: '/ai-advisor' },
          { icon: Trophy, label: 'Gamification', href: '/gamification' },
          { icon: Shield, label: 'Blockchain', href: '/blockchain' }
        ];

      case 'alumni':
        return [
          ...baseItems,
          { icon: Calendar, label: 'Events', href: '/events' },
          { icon: Briefcase, label: 'Job Referrals', href: '/job-referrals' },
          { icon: Users, label: 'Mentorship', href: '/mentorship' },
          { icon: MessageSquare, label: 'Memories', href: '/memories' },
          { icon: Trophy, label: 'Gamification', href: '/gamification' },
          { icon: Shield, label: 'Blockchain', href: '/blockchain' }
        ];

      case 'recruiter':
        return [
          ...baseItems,
          { icon: Briefcase, label: 'Job Management', href: '/job-management' },
          { icon: MessageSquare, label: 'Complaints', href: '/complaints' }
        ];

      case 'admin':
        return [
          ...baseItems,
          { icon: UserCheck, label: 'Approvals', href: '/approvals' },
          { icon: BarChart3, label: 'Analytics', href: '/analytics' },
          { icon: Trophy, label: 'Leaderboard', href: '/leaderboard' },
          { icon: MessageSquare, label: 'Complaints', href: '/complaints' },
          { icon: Calendar, label: 'Event Management', href: '/event-management' }
        ];

      default:
        return baseItems;
    }
  };

  const navigationItems = getNavigationItems();

  return (
    <div className="w-64 bg-white shadow-sm border-r border-gray-200 h-full flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-lg">A</span>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-900">Alumni Hub</h1>
            <p className="text-sm text-gray-500 capitalize">{user?.role} Portal</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-6 space-y-2">
        {navigationItems.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            className={({ isActive }) =>
              cn(
                'flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group',
                isActive
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              )
            }
          >
            {({ isActive }) => (
              <>
                <item.icon
                  className={cn(
                    'w-5 h-5 transition-colors',
                    isActive ? 'text-blue-700' : 'text-gray-400 group-hover:text-gray-600'
                  )}
                />
                <span className="font-medium">{item.label}</span>
                {item.badge && (
                  <span className="ml-auto bg-red-100 text-red-600 text-xs px-2 py-1 rounded-full">
                    {item.badge}
                  </span>
                )}
              </>
            )}
          </NavLink>
        ))}
      </nav>

      <div className="p-4 border-t border-gray-200 space-y-2">
        <NavLink
          to="/settings"
          className="flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all duration-200 group"
        >
          <Settings className="w-5 h-5 text-gray-400 group-hover:text-gray-600" />
          <span className="font-medium">Settings</span>
        </NavLink>
        
        <button
          onClick={logout}
          className="w-full flex items-center space-x-3 px-4 py-3 rounded-xl text-gray-600 hover:bg-red-50 hover:text-red-700 transition-all duration-200 group"
        >
          <LogOut className="w-5 h-5 text-gray-400 group-hover:text-red-700" />
          <span className="font-medium">Logout</span>
        </button>
      </div>
    </div>
  );
};