import { Event } from '../types';

export const events: Event[] = [
  {
    id: '1',
    title: 'Annual Tech Conference 2024',
    date: '2024-03-15',
    location: 'Main Auditorium',
    description: 'Join us for the biggest tech conference of the year featuring industry leaders and innovation showcases.',
    image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
    attendees: 45,
    maxAttendees: 100,
    category: 'Technology'
  },
  {
    id: '2',
    title: 'Alumni Networking Night',
    date: '2024-03-22',
    location: 'Student Center',
    description: 'Connect with successful alumni from various industries and expand your professional network.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
    attendees: 32,
    maxAttendees: 80,
    category: 'Networking'
  },
  {
    id: '3',
    title: 'Career Fair 2024',
    date: '2024-04-10',
    location: 'Sports Complex',
    description: 'Meet with top employers and discover exciting career opportunities in your field.',
    image: 'https://images.pexels.com/photos/1181237/pexels-photo-1181237.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
    attendees: 120,
    maxAttendees: 200,
    category: 'Career'
  }
];