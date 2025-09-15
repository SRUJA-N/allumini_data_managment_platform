import { Badge } from '../types';

export const badges: Badge[] = [
  {
    id: '1',
    name: 'Event Enthusiast',
    description: 'Attended 5+ events this semester',
    icon: '🎉',
    earned: true,
    category: 'Engagement'
  },
  {
    id: '2',
    name: 'Job Hunter',
    description: 'Applied to 10+ job positions',
    icon: '🔍',
    earned: true,
    category: 'Career'
  },
  {
    id: '3',
    name: 'Mentor Seeker',
    description: 'Connected with 3+ mentors',
    icon: '🤝',
    earned: false,
    category: 'Mentorship'
  },
  {
    id: '4',
    name: 'Problem Solver',
    description: 'Completed career roadmap',
    icon: '💡',
    earned: true,
    category: 'Achievement'
  },
  {
    id: '5',
    name: 'Community Helper',
    description: 'Helped 5+ students as alumni',
    icon: '❤️',
    earned: true,
    category: 'Community'
  }
];