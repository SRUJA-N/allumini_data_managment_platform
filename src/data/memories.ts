export interface Memory {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: 'graduation' | 'event' | 'achievement' | 'reunion' | 'campus';
  likes: number;
  comments: number;
  author: string;
  authorAvatar: string;
}

export const memories: Memory[] = [
  {
    id: '1',
    title: 'Graduation Day 2020',
    description: 'Finally made it! Four years of hard work paid off. Thank you to all my professors and friends who supported me.',
    image: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    date: '2020-05-15',
    category: 'graduation',
    likes: 45,
    comments: 12,
    author: 'Sarah Johnson',
    authorAvatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: '2',
    title: 'Tech Conference Success',
    description: 'Our startup pitch won first place at the annual tech conference! Proud moment for our team.',
    image: 'https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    date: '2023-11-20',
    category: 'achievement',
    likes: 67,
    comments: 23,
    author: 'Alex Martinez',
    authorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: '3',
    title: 'Alumni Reunion 2023',
    description: 'Amazing to see everyone after 5 years! The campus has changed so much, but the memories remain.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    date: '2023-09-10',
    category: 'reunion',
    likes: 89,
    comments: 34,
    author: 'Dr. Emily Rodriguez',
    authorAvatar: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: '4',
    title: 'Campus Library Memories',
    description: 'Spent countless hours here during finals. This place holds so many memories of late-night study sessions.',
    image: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    date: '2019-12-15',
    category: 'campus',
    likes: 32,
    comments: 8,
    author: 'John Smith',
    authorAvatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: '5',
    title: 'First Job Celebration',
    description: 'Got my dream job at Google! Thank you to the career services team and my mentors for all the support.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    date: '2021-03-22',
    category: 'achievement',
    likes: 156,
    comments: 45,
    author: 'Maria Santos',
    authorAvatar: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  },
  {
    id: '6',
    title: 'Homecoming Game 2022',
    description: 'What an incredible game! Our team won in overtime. The energy in the stadium was electric!',
    image: 'https://images.pexels.com/photos/1618200/pexels-photo-1618200.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
    date: '2022-10-08',
    category: 'event',
    likes: 78,
    comments: 19,
    author: 'David Chen',
    authorAvatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop'
  }
];