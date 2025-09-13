import React from 'react';
import { useAuth } from '../context/AuthContext';
import { StatCard } from '../components/ui/StatCard';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { 
  Calendar, 
  Briefcase, 
  Users, 
  MessageSquare, 
  Trophy,
  TrendingUp,
  UserCheck,
  BarChart3,
  Activity
} from 'lucide-react';

export const Dashboard: React.FC = () => {
  const { user } = useAuth();

  const renderStudentDashboard = () => (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        <p className="text-gray-600">Here's your academic journey overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Events Joined"
          value={12}
          icon={Calendar}
          trend={{ value: 15, isPositive: true }}
          color="blue"
        />
        <StatCard
          title="Jobs Applied"
          value={8}
          icon={Briefcase}
          trend={{ value: 3, isPositive: true }}
          color="teal"
        />
        <StatCard
          title="Mentorship Requests"
          value={3}
          icon={Users}
          trend={{ value: 2, isPositive: true }}
          color="green"
        />
        <StatCard
          title="Points Earned"
          value={245}
          icon={Trophy}
          trend={{ value: 12, isPositive: true }}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Recent Activities</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-blue-50 rounded-lg">
                <Calendar className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Registered for Tech Conference</p>
                  <p className="text-xs text-gray-500">2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <Briefcase className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Applied for Software Engineer role</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                <Users className="w-5 h-5 text-teal-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Connected with new mentor</p>
                  <p className="text-xs text-gray-500">2 days ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Upcoming Events</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900">Annual Tech Conference 2024</h4>
                <p className="text-sm text-gray-500 mt-1">March 15, 2024 • Main Auditorium</p>
                <span className="inline-block mt-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  Registered
                </span>
              </div>
              <div className="p-4 border border-gray-200 rounded-lg">
                <h4 className="font-medium text-gray-900">Alumni Networking Night</h4>
                <p className="text-sm text-gray-500 mt-1">March 22, 2024 • Student Center</p>
                <span className="inline-block mt-2 px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                  Available
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );

  const renderAlumniDashboard = () => (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        <p className="text-gray-600">Your impact on the alumni community</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Mentorship Sessions"
          value={23}
          icon={Users}
          trend={{ value: 8, isPositive: true }}
          color="teal"
        />
        <StatCard
          title="Events Hosted"
          value={5}
          icon={Calendar}
          trend={{ value: 2, isPositive: true }}
          color="blue"
        />
        <StatCard
          title="Job Referrals"
          value={12}
          icon={Briefcase}
          trend={{ value: 4, isPositive: true }}
          color="green"
        />
        <StatCard
          title="Impact Points"
          value={890}
          icon={Trophy}
          trend={{ value: 15, isPositive: true }}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Mentorship Impact</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">Active Mentees</p>
                  <p className="text-2xl font-bold text-teal-600">8</p>
                </div>
                <Users className="w-8 h-8 text-teal-600" />
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">Sessions This Month</p>
                  <p className="text-2xl font-bold text-blue-600">12</p>
                </div>
                <Calendar className="w-8 h-8 text-blue-600" />
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Recent Contributions</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 p-3 bg-green-50 rounded-lg">
                <Briefcase className="w-5 h-5 text-green-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Referred student for internship</p>
                  <p className="text-xs text-gray-500">3 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 bg-teal-50 rounded-lg">
                <Users className="w-5 h-5 text-teal-600" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Completed mentorship session</p>
                  <p className="text-xs text-gray-500">1 day ago</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );

  const renderEmployeeDashboard = () => (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        <p className="text-gray-600">University operations overview</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <StatCard
          title="Complaints Handled"
          value={28}
          icon={MessageSquare}
          trend={{ value: 12, isPositive: true }}
          color="orange"
        />
        <StatCard
          title="Pending Approvals"
          value={7}
          icon={UserCheck}
          trend={{ value: -3, isPositive: false }}
          color="red"
        />
        <StatCard
          title="Jobs Posted"
          value={15}
          icon={Briefcase}
          trend={{ value: 5, isPositive: true }}
          color="blue"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Pending Tasks</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-red-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">High Priority Complaints</p>
                  <p className="text-xs text-gray-500">3 items need attention</p>
                </div>
                <span className="px-2 py-1 bg-red-200 text-red-800 text-xs rounded-full">Urgent</span>
              </div>
              <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">Event Approvals</p>
                  <p className="text-xs text-gray-500">4 events awaiting approval</p>
                </div>
                <span className="px-2 py-1 bg-yellow-200 text-yellow-800 text-xs rounded-full">Medium</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Weekly Performance</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Resolution Rate</span>
                <span className="text-sm font-semibold text-green-600">94%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-green-600 h-2 rounded-full w-11/12"></div>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-600">Response Time</span>
                <span className="text-sm font-semibold text-blue-600">2.3 hrs avg</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );

  const renderAdminDashboard = () => (
    <>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Welcome back, {user?.name}!</h1>
        <p className="text-gray-600">Platform analytics and management</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <StatCard
          title="Total Students"
          value={1247}
          icon={Users}
          trend={{ value: 8, isPositive: true }}
          color="blue"
        />
        <StatCard
          title="Active Alumni"
          value={892}
          icon={UserCheck}
          trend={{ value: 12, isPositive: true }}
          color="teal"
        />
        <StatCard
          title="Platform Events"
          value={156}
          icon={Calendar}
          trend={{ value: 23, isPositive: true }}
          color="green"
        />
        <StatCard
          title="Job Postings"
          value={78}
          icon={Briefcase}
          trend={{ value: 15, isPositive: true }}
          color="orange"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Engagement Metrics</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Daily Active Users</span>
                <span className="text-lg font-bold text-blue-600">324</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Event Participation</span>
                <span className="text-lg font-bold text-teal-600">67%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-600">Job Application Rate</span>
                <span className="text-lg font-bold text-green-600">43%</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">System Status</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">Server Health</p>
                  <p className="text-xs text-gray-500">All systems operational</p>
                </div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="text-sm font-medium text-gray-900">Database Performance</p>
                  <p className="text-xs text-gray-500">Response time: 45ms</p>
                </div>
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );

  const renderDashboardContent = () => {
    switch (user?.role) {
      case 'student':
        return renderStudentDashboard();
      case 'alumni':
        return renderAlumniDashboard();
      case 'employee':
        return renderEmployeeDashboard();
      case 'admin':
        return renderAdminDashboard();
      default:
        return <div>Dashboard not available</div>;
    }
  };

  return (
    <div className="space-y-6">
      {renderDashboardContent()}
    </div>
  );
};