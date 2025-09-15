import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { events } from '../data/events';
import { useAuth } from '../context/AuthContext';
import { Calendar, MapPin, Users, Plus } from 'lucide-react';

export const Events: React.FC = () => {
  const { user } = useAuth();
  const [registeredEvents, setRegisteredEvents] = useState<string[]>(['1']);

  const handleRegister = (eventId: string) => {
    if (registeredEvents.includes(eventId)) {
      setRegisteredEvents(prev => prev.filter(id => id !== eventId));
    } else {
      setRegisteredEvents(prev => [...prev, eventId]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Events</h1>
          <p className="text-gray-600">Discover and join upcoming events</p>
        </div>
        {user?.role === 'alumni' && (
          <Button>
            <Plus className="w-4 h-4 mr-2" />
            Host Event
          </Button>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
        {events.map((event) => {
          const isRegistered = registeredEvents.includes(event.id);
          const spotsLeft = event.maxAttendees - event.attendees;
          
          return (
            <Card key={event.id} hover>
              <div className="aspect-video w-full overflow-hidden rounded-t-2xl">
                <img 
                  src={event.image} 
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full mb-2">
                    {event.category}
                  </span>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-sm text-gray-600 line-clamp-2">{event.description}</p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="w-4 h-4 mr-2" />
                    {new Date(event.date).toLocaleDateString('en-US', { 
                      weekday: 'long', 
                      year: 'numeric', 
                      month: 'long', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {event.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Users className="w-4 h-4 mr-2" />
                    {event.attendees} attendees • {spotsLeft} spots left
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="w-full bg-gray-200 rounded-full h-2 mr-3">
                    <div 
                      className="bg-blue-600 h-2 rounded-full" 
                      style={{ width: `${(event.attendees / event.maxAttendees) * 100}%` }}
                    ></div>
                  </div>
                  <Button
                    variant={isRegistered ? "secondary" : "primary"}
                    size="sm"
                    onClick={() => handleRegister(event.id)}
                    disabled={!isRegistered && spotsLeft === 0}
                  >
                    {isRegistered ? 'Registered' : spotsLeft === 0 ? 'Full' : 'Register'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {user?.role === 'student' && (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">My Registered Events</h3>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {registeredEvents.length === 0 ? (
                <p className="text-gray-500 text-center py-8">You haven't registered for any events yet.</p>
              ) : (
                events
                  .filter(event => registeredEvents.includes(event.id))
                  .map(event => (
                    <div key={event.id} className="flex items-center justify-between p-4 bg-blue-50 rounded-lg">
                      <div>
                        <h4 className="font-medium text-gray-900">{event.title}</h4>
                        <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()} • {event.location}</p>
                      </div>
                      <span className="px-3 py-1 bg-blue-200 text-blue-800 text-xs font-medium rounded-full">
                        Registered
                      </span>
                    </div>
                  ))
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};