import { User } from '../types';

export const users: User[] = [
  {
    id: '1',
    name: 'John Smith',
    email: 'john@student.edu',
    role: 'student',
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    isVerified: true
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    email: 'sarah@alumni.edu',
    role: 'alumni',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop',
    isVerified: true
  },
  {
    id: '3',
    name: 'Mike Wilson',
    email: 'mike@university.edu',
    role: 'recruiter',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: '4',
    name: 'Lisa Chen',
    email: 'lisa@admin.edu',
    role: 'admin',
    avatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];