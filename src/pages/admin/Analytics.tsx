import React from 'react';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import { analyticsData } from '../../data/analytics';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { TrendingUp, Users, Calendar, Briefcase, Award, DollarSign } from 'lucide-react';

export const Analytics: React.FC = () => {
  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

  const engagementData = analyticsData.engagement.map(item => ({
    name: item.name,
    value: item.value,
    fill: COLORS[Math.floor(Math.random() * COLORS.length)]
  }));

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Platform Analytics</h1>
        <p className="text-gray-600">Comprehensive insights into platform performance</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">2,139</h3>
            <p className="text-sm text-gray-600">Total Users</p>
            <p className="text-xs text-green-600 mt-1">+12% this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Calendar className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">156</h3>
            <p className="text-sm text-gray-600">Events Hosted</p>
            <p className="text-xs text-green-600 mt-1">+23% this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Briefcase className="w-12 h-12 text-orange-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">78</h3>
            <p className="text-sm text-gray-600">Job Postings</p>
            <p className="text-xs text-green-600 mt-1">+15% this month</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Award className="w-12 h-12 text-purple-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">68%</h3>
            <p className="text-sm text-gray-600">Placement Rate</p>
            <p className="text-xs text-green-600 mt-1">+5% this month</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">User Growth</h3>
            <p className="text-sm text-gray-600">Monthly user registration trends</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={analyticsData.userGrowth}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="students" stroke="#3B82F6" strokeWidth={2} />
                <Line type="monotone" dataKey="alumni" stroke="#10B981" strokeWidth={2} />
                <Line type="monotone" dataKey="employees" stroke="#F59E0B" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Engagement Metrics</h3>
            <p className="text-sm text-gray-600">Platform engagement distribution</p>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={engagementData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, value }) => `${name}: ${value}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {engagementData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Top Performing Events</h3>
            <p className="text-sm text-gray-600">Events with highest attendance and satisfaction</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {analyticsData.topEvents.map((event, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">{event.name}</h4>
                    <p className="text-sm text-gray-500">{event.attendees} attendees</p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1">
                      <span className="text-yellow-500">★</span>
                      <span className="text-sm font-medium">{event.satisfaction}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Job Market Insights</h3>
            <p className="text-sm text-gray-600">Employment statistics and trends</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Briefcase className="w-8 h-8 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900">Total Jobs Posted</p>
                    <p className="text-sm text-gray-500">This year</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-blue-600">{analyticsData.jobStats.totalPosted}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Users className="w-8 h-8 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900">Total Applications</p>
                    <p className="text-sm text-gray-500">All time</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-green-600">{analyticsData.jobStats.totalApplications}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <Award className="w-8 h-8 text-orange-600" />
                  <div>
                    <p className="font-medium text-gray-900">Placement Rate</p>
                    <p className="text-sm text-gray-500">Success rate</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-orange-600">{analyticsData.jobStats.placementRate}%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <DollarSign className="w-8 h-8 text-purple-600" />
                  <div>
                    <p className="font-medium text-gray-900">Average Salary</p>
                    <p className="text-sm text-gray-500">Entry level</p>
                  </div>
                </div>
                <span className="text-2xl font-bold text-purple-600">${analyticsData.jobStats.averageSalary.toLocaleString()}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Engagement Trends</h3>
          <p className="text-sm text-gray-600">Detailed engagement metrics with month-over-month changes</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {analyticsData.engagement.map((metric, index) => (
              <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                <div>
                  <h4 className="font-medium text-gray-900">{metric.name}</h4>
                  <p className="text-2xl font-bold text-gray-900 mt-1">{metric.value}%</p>
                </div>
                <div className="text-right">
                  <div className={`flex items-center space-x-1 ${metric.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    <TrendingUp className={`w-4 h-4 ${metric.change < 0 ? 'rotate-180' : ''}`} />
                    <span className="text-sm font-medium">
                      {metric.change >= 0 ? '+' : ''}{metric.change}%
                    </span>
                  </div>
                  <p className="text-xs text-gray-500">vs last month</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};