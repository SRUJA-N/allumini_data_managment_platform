import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Brain, Target, ArrowRight, CheckCircle, Clock } from 'lucide-react';

export const AIAdvisor: React.FC = () => {
  const [selectedGoal, setSelectedGoal] = useState('');
  const [showRoadmap, setShowRoadmap] = useState(false);

  const careerGoals = [
    'Software Engineer at Big Tech',
    'Product Manager',
    'Data Scientist',
    'UX/UI Designer',
    'Startup Founder',
    'Consultant'
  ];

  const roadmapData = {
    'Software Engineer at Big Tech': [
      { title: 'Foundation Skills', status: 'completed', duration: '3-6 months', skills: ['Programming Fundamentals', 'Data Structures', 'Algorithms'] },
      { title: 'Web Development', status: 'in-progress', duration: '2-4 months', skills: ['React/Vue', 'Node.js', 'Database Design'] },
      { title: 'System Design', status: 'pending', duration: '3-5 months', skills: ['Scalability', 'Architecture', 'Cloud Platforms'] },
      { title: 'Interview Prep', status: 'pending', duration: '2-3 months', skills: ['Coding Interviews', 'Behavioral Questions', 'System Design Interviews'] }
    ],
    'Product Manager': [
      { title: 'Business Fundamentals', status: 'completed', duration: '2-3 months', skills: ['Market Research', 'Business Strategy', 'Analytics'] },
      { title: 'Product Strategy', status: 'in-progress', duration: '3-4 months', skills: ['User Research', 'Product Planning', 'Roadmapping'] },
      { title: 'Technical Knowledge', status: 'pending', duration: '2-3 months', skills: ['Basic Programming', 'API Understanding', 'Database Basics'] },
      { title: 'Leadership Skills', status: 'pending', duration: '4-6 months', skills: ['Team Management', 'Stakeholder Communication', 'Decision Making'] }
    ]
  };

  const generateRoadmap = () => {
    setShowRoadmap(true);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'completed':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return <div className="w-5 h-5 border-2 border-gray-300 rounded-full"></div>;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-50 border-green-200';
      case 'in-progress':
        return 'bg-blue-50 border-blue-200';
      default:
        return 'bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">AI Career Path Advisor</h1>
          <p className="text-gray-600">Get personalized career guidance powered by AI</p>
        </div>
      </div>

      {!showRoadmap ? (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900 flex items-center">
              <Target className="w-5 h-5 mr-2 text-blue-600" />
              What's Your Career Goal?
            </h3>
            <p className="text-sm text-gray-600">Select your target role to get a personalized learning roadmap</p>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {careerGoals.map((goal) => (
                <button
                  key={goal}
                  onClick={() => setSelectedGoal(goal)}
                  className={`p-4 text-left border-2 rounded-xl transition-all duration-200 ${
                    selectedGoal === goal
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-200 hover:border-gray-300 text-gray-700'
                  }`}
                >
                  <h4 className="font-medium">{goal}</h4>
                  <p className="text-sm text-gray-500 mt-1">Personalized roadmap</p>
                </button>
              ))}
            </div>

            {selectedGoal && (
              <div className="text-center">
                <Button onClick={generateRoadmap} size="lg">
                  <Brain className="w-5 h-5 mr-2" />
                  Generate My Roadmap
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
      ) : (
        <>
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-gray-900">
                  Your Personalized Roadmap: {selectedGoal}
                </h3>
                <Button variant="outline" onClick={() => setShowRoadmap(false)}>
                  Change Goal
                </Button>
              </div>
              <p className="text-sm text-gray-600">AI-generated learning path based on industry best practices</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {(roadmapData[selectedGoal as keyof typeof roadmapData] || []).map((phase, index) => (
                  <div key={index} className={`border-2 rounded-xl p-6 ${getStatusColor(phase.status)}`}>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 mt-1">
                        {getStatusIcon(phase.status)}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="text-lg font-semibold text-gray-900">
                            Phase {index + 1}: {phase.title}
                          </h4>
                          <span className="text-sm text-gray-500">{phase.duration}</span>
                        </div>
                        
                        <div className="mb-4">
                          <h5 className="text-sm font-medium text-gray-700 mb-2">Skills to Learn:</h5>
                          <div className="flex flex-wrap gap-2">
                            {phase.skills.map((skill, skillIndex) => (
                              <span 
                                key={skillIndex}
                                className="px-3 py-1 bg-white border border-gray-300 text-gray-700 text-sm rounded-full"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        {phase.status === 'pending' && (
                          <Button variant="outline" size="sm">
                            Start Phase {index + 1}
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Recommended Resources</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="p-3 bg-blue-50 rounded-lg">
                    <h4 className="font-medium text-gray-900">LeetCode Premium</h4>
                    <p className="text-sm text-gray-600">Practice coding interviews</p>
                  </div>
                  <div className="p-3 bg-green-50 rounded-lg">
                    <h4 className="font-medium text-gray-900">System Design Primer</h4>
                    <p className="text-sm text-gray-600">Learn scalable system architecture</p>
                  </div>
                  <div className="p-3 bg-orange-50 rounded-lg">
                    <h4 className="font-medium text-gray-900">React Documentation</h4>
                    <p className="text-sm text-gray-600">Master modern web development</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <h3 className="text-lg font-semibold text-gray-900">Progress Overview</h3>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Overall Progress</span>
                      <span className="font-medium text-blue-600">37.5%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 h-2 rounded-full w-3/8"></div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 bg-green-50 rounded-lg">
                      <p className="text-2xl font-bold text-green-600">1</p>
                      <p className="text-xs text-gray-600">Completed</p>
                    </div>
                    <div className="p-3 bg-blue-50 rounded-lg">
                      <p className="text-2xl font-bold text-blue-600">1</p>
                      <p className="text-xs text-gray-600">In Progress</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </>
      )}
    </div>
  );
};