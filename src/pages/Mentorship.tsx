import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { mentors } from '../data/mentors';
import { useAuth } from '../context/AuthContext';
import { Star, MessageCircle, Users, Calendar, Award } from 'lucide-react';

export const Mentorship: React.FC = () => {
  const { user } = useAuth();
  const [requestedMentors, setRequestedMentors] = useState<string[]>([]);

  const handleMentorshipRequest = (mentorId: string) => {
    if (!requestedMentors.includes(mentorId)) {
      setRequestedMentors(prev => [...prev, mentorId]);
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
          />
        ))}
        <span className="text-sm text-gray-600 ml-1">({rating})</span>
      </div>
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {user?.role === 'student' ? 'Find Mentors' : 'My Mentees'}
          </h1>
          <p className="text-gray-600">
            {user?.role === 'student' 
              ? 'Connect with experienced professionals for guidance' 
              : 'Manage your mentorship relationships'}
          </p>
        </div>
      </div>

      {user?.role === 'student' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mentors.map((mentor) => {
              const isRequested = requestedMentors.includes(mentor.id);
              
              return (
                <Card key={mentor.id} hover>
                  <CardContent className="p-6">
                    <div className="text-center mb-4">
                      <img 
                        src={mentor.avatar} 
                        alt={mentor.name}
                        className="w-20 h-20 rounded-full mx-auto mb-3 object-cover"
                      />
                      <h3 className="text-lg font-semibold text-gray-900">{mentor.name}</h3>
                      <p className="text-sm text-gray-600">{mentor.position}</p>
                      <p className="text-sm font-medium text-blue-600">{mentor.company}</p>
                    </div>

                    <div className="mb-4">
                      {renderStars(mentor.rating)}
                      <p className="text-xs text-gray-500 mt-1">{mentor.sessions} mentorship sessions</p>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-900 mb-2">Expertise</h4>
                      <div className="flex flex-wrap gap-1">
                        {mentor.expertise.map((skill, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-700 text-xs rounded-md"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Chat
                      </Button>
                      <Button
                        variant={isRequested ? "secondary" : "primary"}
                        size="sm"
                        className="flex-1"
                        onClick={() => handleMentorshipRequest(mentor.id)}
                        disabled={isRequested}
                      >
                        {isRequested ? 'Requested' : 'Request'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">My Mentorship Requests</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {requestedMentors.length === 0 ? (
                  <p className="text-gray-500 text-center py-8">No mentorship requests yet.</p>
                ) : (
                  mentors
                    .filter(mentor => requestedMentors.includes(mentor.id))
                    .map(mentor => (
                      <div key={mentor.id} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <img 
                            src={mentor.avatar} 
                            alt={mentor.name}
                            className="w-12 h-12 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-medium text-gray-900">{mentor.name}</h4>
                            <p className="text-sm text-gray-500">{mentor.position} at {mentor.company}</p>
                          </div>
                        </div>
                        <span className="px-3 py-1 bg-yellow-200 text-yellow-800 text-xs font-medium rounded-full">
                          Pending
                        </span>
                      </div>
                    ))
                )}
              </div>
            </CardContent>
          </Card>
        </>
      )}

      {user?.role === 'alumni' && (
        <>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardContent className="text-center p-6">
                <Users className="w-12 h-12 text-teal-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">8</h3>
                <p className="text-sm text-gray-600">Active Mentees</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <Calendar className="w-12 h-12 text-blue-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">23</h3>
                <p className="text-sm text-gray-600">Sessions This Month</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="text-center p-6">
                <Award className="w-12 h-12 text-orange-600 mx-auto mb-3" />
                <h3 className="text-2xl font-bold text-gray-900">4.8</h3>
                <p className="text-sm text-gray-600">Average Rating</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Current Mentees</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { name: 'Alex Johnson', program: 'Computer Science', sessions: 5, lastSession: '2024-02-20' },
                  { name: 'Maria Garcia', program: 'Business Administration', sessions: 8, lastSession: '2024-02-18' },
                  { name: 'David Chen', program: 'Engineering', sessions: 3, lastSession: '2024-02-22' }
                ].map((mentee, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-semibold">{mentee.name.charAt(0)}</span>
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{mentee.name}</h4>
                        <p className="text-sm text-gray-500">{mentee.program}</p>
                        <p className="text-xs text-gray-400">{mentee.sessions} sessions • Last: {mentee.lastSession}</p>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Message
                      </Button>
                      <Button variant="primary" size="sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        Schedule
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </>
      )}
    </div>
  );
};