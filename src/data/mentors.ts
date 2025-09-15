import { Mentor } from '../types';

export const mentors: Mentor[] = [
  {
    id: '1',
    name: 'Dr. Emily Rodriguez',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    company: 'Microsoft',
    position: 'Senior Software Engineer',
    expertise: ['Software Development', 'Career Growth', 'Tech Leadership'],
    rating: 4.9,
    sessions: 23
  },
  {
    id: '2',
    name: 'James Park',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    company: 'Google',
    position: 'Product Manager',
    expertise: ['Product Strategy', 'Team Management', 'Innovation'],
    rating: 4.8,
    sessions: 31
  },
  {
    id: '3',
    name: 'Maria Santos',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    company: 'Adobe',
    position: 'UX Director',
    expertise: ['Design Thinking', 'User Research', 'Creative Leadership'],
    rating: 4.7,
    sessions: 18
  }
];