import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';
import { Users, GraduationCap, Briefcase, Shield } from 'lucide-react';

export const WelcomePage: React.FC = () => {
  const userTypes = [
    {
      title: 'Student Portal',
      description: 'Access your academic journey, events, jobs, and mentorship opportunities',
      icon: GraduationCap,
      path: '/login/student',
      color: 'from-blue-600 to-indigo-600',
      features: ['Event Registration', 'Job Applications', 'Mentorship Requests', 'AI Career Advisor']
    },
    {
      title: 'Alumni Portal',
      description: 'Connect with your alma mater, mentor students, and give back to the community',
      icon: Users,
      path: '/login/alumni',
      color: 'from-teal-600 to-cyan-600',
      features: ['Host Events', 'Job Referrals', 'Mentor Students', 'Alumni Network']
    },
    {
      title: 'Employee Portal',
      description: 'Manage university operations, handle complaints, and oversee student services',
      icon: Briefcase,
      path: '/login/employee',
      color: 'from-orange-600 to-red-600',
      features: ['Job Management', 'Complaint Resolution', 'Event Approval', 'Student Support']
    },
    {
      title: 'Admin Portal',
      description: 'Oversee platform operations, analytics, and manage all system aspects',
      icon: Shield,
      path: '/login/admin',
      color: 'from-purple-600 to-pink-600',
      features: ['Platform Analytics', 'User Management', 'Approval Workflows', 'System Overview']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-teal-600 rounded-2xl flex items-center justify-center">
              <span className="text-white font-bold text-2xl">A</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Alumni Data Management & Engagement Platform
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connecting students, alumni, and university staff in a comprehensive ecosystem for career growth, 
            mentorship, and community engagement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {userTypes.map((userType, index) => {
            const Icon = userType.icon;
            
            return (
              <Card key={index} hover className="overflow-hidden">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className={`w-14 h-14 bg-gradient-to-r ${userType.color} rounded-xl flex items-center justify-center mr-4`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{userType.title}</h3>
                      <p className="text-sm text-gray-500">Choose your portal</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{userType.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {userType.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to={userType.path}>
                    <Button className={`w-full bg-gradient-to-r ${userType.color} hover:opacity-90 transition-opacity`}>
                      Access {userType.title.split(' ')[0]} Portal
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Demo Credentials</h2>
            <p className="text-gray-600 mb-6">
              Use these credentials to explore each portal. All data is dummy/static for demonstration purposes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="text-left">
                <p><strong>Student:</strong> john@student.edu / password123</p>
                <p><strong>Alumni:</strong> sarah@alumni.edu / password123</p>
              </div>
              <div className="text-left">
                <p><strong>Employee:</strong> mike@university.edu / password123</p>
                <p><strong>Admin:</strong> lisa@admin.edu / password123</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};