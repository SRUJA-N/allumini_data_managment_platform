import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { leaderboardData } from '../../data/analytics';
import { Crown, Award, Trophy, Star, Users, TrendingUp } from 'lucide-react';

export const Leaderboard: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'student' | 'alumni'>('all');

  const filteredData = leaderboardData.filter(user => 
    filter === 'all' || user.role === filter
  );

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 1:
        return <Award className="w-6 h-6 text-gray-400" />;
      case 2:
        return <Award className="w-6 h-6 text-orange-600" />;
      default:
        return (
          <div className="w-6 h-6 flex items-center justify-center bg-gray-200 rounded-full">
            <span className="text-sm font-bold text-gray-600">{index + 1}</span>
          </div>
        );
    }
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'student':
        return 'bg-blue-100 text-blue-800';
      case 'alumni':
        return 'bg-teal-100 text-teal-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const topPerformers = {
    students: leaderboardData.filter(u => u.role === 'student').length,
    alumni: leaderboardData.filter(u => u.role === 'alumni').length,
    totalPoints: leaderboardData.reduce((sum, u) => sum + u.points, 0),
    avgPoints: Math.round(leaderboardData.reduce((sum, u) => sum + u.points, 0) / leaderboardData.length)
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Leaderboard</h1>
          <p className="text-gray-600">Top contributors and community leaders</p>
        </div>
        <div className="flex space-x-2">
          <Button
            variant={filter === 'all' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setFilter('all')}
          >
            All Users
          </Button>
          <Button
            variant={filter === 'student' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setFilter('student')}
          >
            Students
          </Button>
          <Button
            variant={filter === 'alumni' ? 'primary' : 'outline'}
            size="sm"
            onClick={() => setFilter('alumni')}
          >
            Alumni
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardContent className="p-6 text-center">
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">{topPerformers.students}</h3>
            <p className="text-sm text-gray-600">Active Students</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Star className="w-12 h-12 text-teal-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">{topPerformers.alumni}</h3>
            <p className="text-sm text-gray-600">Contributing Alumni</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <Trophy className="w-12 h-12 text-orange-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">{topPerformers.totalPoints.toLocaleString()}</h3>
            <p className="text-sm text-gray-600">Total Points</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <TrendingUp className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">{topPerformers.avgPoints}</h3>
            <p className="text-sm text-gray-600">Average Points</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Top Contributors</h3>
              <p className="text-sm text-gray-600">Ranked by community impact and engagement</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {filteredData.map((user, index) => (
                  <div key={user.id} className={`p-4 rounded-lg border-2 ${index < 3 ? 'border-yellow-200 bg-yellow-50' : 'border-gray-200 bg-white'}`}>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-4">
                        {getRankIcon(index)}
                        <img 
                          src={user.avatar} 
                          alt={user.name}
                          className="w-12 h-12 rounded-full object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{user.name}</h4>
                          <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(user.role)}`}>
                            {user.role}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-2xl font-bold text-gray-900">{user.points.toLocaleString()}</p>
                        <p className="text-sm text-gray-500">points</p>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Award className="w-4 h-4" />
                          <span>{user.badges} badges</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h5 className="text-sm font-medium text-gray-900 mb-2">Recent Contributions:</h5>
                      <div className="space-y-1">
                        {user.contributions.map((contribution, contribIndex) => (
                          <div key={contribIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></div>
                            {contribution}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Achievement Categories</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="w-5 h-5 text-blue-600" />
                    <h4 className="font-medium text-gray-900">Community Engagement</h4>
                  </div>
                  <p className="text-sm text-gray-600">Event participation, mentorship, networking</p>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Trophy className="w-5 h-5 text-green-600" />
                    <h4 className="font-medium text-gray-900">Academic Excellence</h4>
                  </div>
                  <p className="text-sm text-gray-600">High grades, research contributions, awards</p>
                </div>
                
                <div className="p-3 bg-orange-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Star className="w-5 h-5 text-orange-600" />
                    <h4 className="font-medium text-gray-900">Professional Growth</h4>
                  </div>
                  <p className="text-sm text-gray-600">Job placements, career advancement, skills</p>
                </div>
                
                <div className="p-3 bg-purple-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="w-5 h-5 text-purple-600" />
                    <h4 className="font-medium text-gray-900">Leadership</h4>
                  </div>
                  <p className="text-sm text-gray-600">Event hosting, team leadership, innovation</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Monthly Highlights</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="p-3 bg-yellow-50 rounded-lg border border-yellow-200">
                  <div className="flex items-center space-x-2 mb-1">
                    <Crown className="w-4 h-4 text-yellow-600" />
                    <span className="text-sm font-medium text-gray-900">Top Performer</span>
                  </div>
                  <p className="text-sm text-gray-600">Sarah Johnson - 2,150 points</p>
                </div>
                
                <div className="p-3 bg-blue-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <TrendingUp className="w-4 h-4 text-blue-600" />
                    <span className="text-sm font-medium text-gray-900">Rising Star</span>
                  </div>
                  <p className="text-sm text-gray-600">Alex Martinez - +450 points this month</p>
                </div>
                
                <div className="p-3 bg-green-50 rounded-lg">
                  <div className="flex items-center space-x-2 mb-1">
                    <Users className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-medium text-gray-900">Community Hero</span>
                  </div>
                  <p className="text-sm text-gray-600">Dr. Emily Rodriguez - 15 mentorship sessions</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};