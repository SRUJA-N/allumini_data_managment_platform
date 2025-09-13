import React from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { badges } from '../data/badges';
import { Trophy, Star, Target, Award, TrendingUp, Crown } from 'lucide-react';

export const Gamification: React.FC = () => {
  const userStats = {
    totalPoints: 1245,
    level: 8,
    rank: 23,
    streakDays: 12,
    completedChallenges: 15
  };

  const leaderboard = [
    { name: 'Sarah Johnson', points: 2150, avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
    { name: 'Alex Martinez', points: 1890, avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
    { name: 'John Smith', points: 1245, avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' },
    { name: 'Emily Davis', points: 1120, avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop' }
  ];

  const challenges = [
    { title: 'Event Master', description: 'Attend 3 events this month', progress: 2, total: 3, points: 150, icon: Target },
    { title: 'Job Hunter Pro', description: 'Apply to 10 jobs', progress: 7, total: 10, points: 200, icon: TrendingUp },
    { title: 'Network Builder', description: 'Connect with 5 mentors', progress: 3, total: 5, points: 250, icon: Star }
  ];

  const getRankIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Crown className="w-5 h-5 text-yellow-500" />;
      case 1:
        return <Award className="w-5 h-5 text-gray-400" />;
      case 2:
        return <Award className="w-5 h-5 text-orange-600" />;
      default:
        return <span className="w-5 h-5 flex items-center justify-center text-sm font-bold text-gray-600">{index + 1}</span>;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-gradient-to-br from-orange-500 to-red-500 rounded-xl">
          <Trophy className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Gamification Hub</h1>
          <p className="text-gray-600">Track your progress and compete with peers</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <Trophy className="w-12 h-12 text-orange-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">{userStats.totalPoints}</h3>
            <p className="text-sm text-gray-600">Total Points</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <Star className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">{userStats.level}</h3>
            <p className="text-sm text-gray-600">Current Level</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <Award className="w-12 h-12 text-purple-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">#{userStats.rank}</h3>
            <p className="text-sm text-gray-600">Leaderboard Rank</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <Target className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">{userStats.streakDays}</h3>
            <p className="text-sm text-gray-600">Day Streak</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <TrendingUp className="w-12 h-12 text-teal-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">{userStats.completedChallenges}</h3>
            <p className="text-sm text-gray-600">Challenges</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">My Badges</h3>
            <p className="text-sm text-gray-600">Your achievements and milestones</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-4">
              {badges.map((badge) => (
                <div 
                  key={badge.id} 
                  className={`p-4 rounded-xl border-2 transition-all duration-200 ${
                    badge.earned 
                      ? 'border-green-200 bg-green-50' 
                      : 'border-gray-200 bg-gray-50 opacity-60'
                  }`}
                >
                  <div className="text-center">
                    <div className={`text-4xl mb-2 ${badge.earned ? '' : 'grayscale'}`}>
                      {badge.icon}
                    </div>
                    <h4 className={`font-medium text-sm ${badge.earned ? 'text-gray-900' : 'text-gray-500'}`}>
                      {badge.name}
                    </h4>
                    <p className={`text-xs mt-1 ${badge.earned ? 'text-gray-600' : 'text-gray-400'}`}>
                      {badge.description}
                    </p>
                    {badge.earned && (
                      <span className="inline-block mt-2 px-2 py-1 bg-green-200 text-green-800 text-xs rounded-full">
                        Earned
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Leaderboard</h3>
            <p className="text-sm text-gray-600">Top performers this month</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((user, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    {getRankIcon(index)}
                    <img 
                      src={user.avatar} 
                      alt={user.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-medium text-gray-900">{user.name}</h4>
                      <p className="text-sm text-gray-500">{user.points} points</p>
                    </div>
                  </div>
                  {index === 2 && (
                    <span className="px-2 py-1 bg-blue-200 text-blue-800 text-xs font-medium rounded-full">
                      You
                    </span>
                  )}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Active Challenges</h3>
          <p className="text-sm text-gray-600">Complete challenges to earn points and badges</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {challenges.map((challenge, index) => {
              const progress = (challenge.progress / challenge.total) * 100;
              const Icon = challenge.icon;
              
              return (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-blue-100 rounded-lg">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{challenge.title}</h4>
                        <p className="text-sm text-gray-600">{challenge.description}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-medium text-orange-600">+{challenge.points} points</p>
                      <p className="text-xs text-gray-500">{challenge.progress}/{challenge.total}</p>
                    </div>
                  </div>
                  
                  <div className="mb-3">
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full transition-all duration-300" 
                        style={{ width: `${progress}%` }}
                      ></div>
                    </div>
                  </div>
                  
                  {progress === 100 ? (
                    <Button variant="secondary" size="sm" disabled>
                      Completed
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm">
                      View Progress
                    </Button>
                  )}
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};