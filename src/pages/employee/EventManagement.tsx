import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CheckCircle, XCircle, Clock, Calendar, MapPin, Users, AlertTriangle } from 'lucide-react';

interface EventRequest {
  id: string;
  title: string;
  description: string;
  organizer: string;
  organizerRole: 'student' | 'alumni';
  requestedDate: string;
  location: string;
  expectedAttendees: number;
  category: string;
  status: 'pending' | 'approved' | 'rejected';
  submittedDate: string;
  budget?: string;
  requirements?: string[];
}

export const EventManagement: React.FC = () => {
  const [eventRequests, setEventRequests] = useState<EventRequest[]>([
    {
      id: '1',
      title: 'React.js Workshop for Beginners',
      description: 'A hands-on workshop covering React fundamentals, components, and state management for students new to the framework.',
      organizer: 'Sarah Johnson',
      organizerRole: 'alumni',
      requestedDate: '2024-03-15',
      location: 'Computer Lab A',
      expectedAttendees: 50,
      category: 'Workshop',
      status: 'pending',
      submittedDate: '2024-02-20',
      budget: '$500',
      requirements: ['Projector', 'Laptops', 'WiFi Access']
    },
    {
      id: '2',
      title: 'Alumni Career Panel Discussion',
      description: 'Panel discussion with successful alumni sharing career insights and answering student questions.',
      organizer: 'Alex Martinez',
      organizerRole: 'student',
      requestedDate: '2024-03-22',
      location: 'Main Auditorium',
      expectedAttendees: 100,
      category: 'Career',
      status: 'pending',
      submittedDate: '2024-02-22',
      budget: '$300',
      requirements: ['Microphones', 'Stage Setup', 'Recording Equipment']
    },
    {
      id: '3',
      title: 'Startup Pitch Competition',
      description: 'Students present their startup ideas to a panel of judges including alumni entrepreneurs and investors.',
      organizer: 'Dr. Emily Rodriguez',
      organizerRole: 'alumni',
      requestedDate: '2024-04-10',
      location: 'Business School Auditorium',
      expectedAttendees: 80,
      category: 'Competition',
      status: 'approved',
      submittedDate: '2024-02-18',
      budget: '$1000',
      requirements: ['Presentation Setup', 'Judging Tables', 'Prize Fund']
    },
    {
      id: '4',
      title: 'Gaming Tournament',
      description: 'Esports tournament featuring popular games with prizes for winners.',
      organizer: 'John Smith',
      organizerRole: 'student',
      requestedDate: '2024-03-30',
      location: 'Student Center',
      expectedAttendees: 60,
      category: 'Entertainment',
      status: 'rejected',
      submittedDate: '2024-02-25',
      budget: '$800',
      requirements: ['Gaming Setups', 'Streaming Equipment', 'Prizes']
    }
  ]);

  const handleEventAction = (id: string, action: 'approved' | 'rejected') => {
    setEventRequests(prev => prev.map(event => 
      event.id === id ? { ...event, status: action } : event
    ));
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category.toLowerCase()) {
      case 'workshop':
        return 'bg-blue-100 text-blue-800';
      case 'career':
        return 'bg-teal-100 text-teal-800';
      case 'competition':
        return 'bg-orange-100 text-orange-800';
      case 'entertainment':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
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

  const pendingEvents = eventRequests.filter(event => event.status === 'pending');
  const processedEvents = eventRequests.filter(event => event.status !== 'pending');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Event Management</h1>
        <p className="text-gray-600">Review and approve event requests from students and alumni</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <Clock className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">{pendingEvents.length}</h3>
            <p className="text-sm text-gray-600">Pending Review</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {eventRequests.filter(event => event.status === 'approved').length}
            </h3>
            <p className="text-sm text-gray-600">Approved</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {eventRequests.filter(event => event.status === 'rejected').length}
            </h3>
            <p className="text-sm text-gray-600">Rejected</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <Users className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {eventRequests.reduce((sum, event) => sum + event.expectedAttendees, 0)}
            </h3>
            <p className="text-sm text-gray-600">Total Expected Attendees</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Pending Event Requests</h3>
          <p className="text-sm text-gray-600">Events awaiting your approval</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            {pendingEvents.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No pending event requests.</p>
            ) : (
              pendingEvents.map((event) => (
                <div key={event.id} className="p-6 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h4>
                      <div className="flex items-center space-x-4 mb-2">
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(event.category)}`}>
                          {event.category}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getRoleColor(event.organizerRole)}`}>
                          {event.organizerRole}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                    <div className="flex items-center text-sm text-gray-600">
                      <Calendar className="w-4 h-4 mr-2" />
                      {new Date(event.requestedDate).toLocaleDateString()}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <MapPin className="w-4 h-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <Users className="w-4 h-4 mr-2" />
                      {event.expectedAttendees} attendees
                    </div>
                    <div className="flex items-center text-sm text-gray-600">
                      <span className="font-medium">Budget: {event.budget}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Organizer Details:</h5>
                    <p className="text-sm text-gray-600">
                      {event.organizer} • Submitted on {new Date(event.submittedDate).toLocaleDateString()}
                    </p>
                  </div>

                  {event.requirements && (
                    <div className="mb-4">
                      <h5 className="text-sm font-medium text-gray-900 mb-2">Requirements:</h5>
                      <div className="flex flex-wrap gap-2">
                        {event.requirements.map((req, index) => (
                          <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md">
                            {req}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <div className="flex space-x-3">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleEventAction(event.id, 'approved')}
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve Event
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleEventAction(event.id, 'rejected')}
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject Event
                    </Button>
                    <Button variant="outline" size="sm">
                      Request Changes
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Recent Decisions</h3>
          <p className="text-sm text-gray-600">Recently processed event requests</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {processedEvents.map((event) => (
              <div key={event.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-4">
                  <div>
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    <div className="flex items-center space-x-2 mt-1">
                      <p className="text-sm text-gray-500">by {event.organizer}</p>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getCategoryColor(event.category)}`}>
                        {event.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="text-right text-sm text-gray-500">
                    <p>{new Date(event.requestedDate).toLocaleDateString()}</p>
                    <p>{event.expectedAttendees} attendees</p>
                  </div>
                  <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(event.status)}`}>
                    {event.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};