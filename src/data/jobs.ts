import { Job } from '../types';

export const jobs: Job[] = [
  {
    id: '1',
    title: 'Software Engineer',
    company: 'TechCorp Inc.',
    location: 'San Francisco, CA',
    salary: '₹85,000 - ₹120,000',
    type: 'Full-time',
    description: 'Join our dynamic team to build cutting-edge web applications using React and Node.js.',
    requirements: ['React', 'Node.js', 'JavaScript', 'Git'],
    posted: '2024-02-15'
  },
  {
    id: '2',
    title: 'UX Designer',
    company: 'Design Studio',
    location: 'New York, NY',
    salary: '₹70,000 - ₹95,000',
    type: 'Full-time',
    description: 'Create intuitive and beautiful user experiences for our clients\' digital products.',
    requirements: ['Figma', 'Adobe Creative Suite', 'User Research', 'Prototyping'],
    posted: '2024-02-18'
  },
  {
    id: '3',
    title: 'Marketing Intern',
    company: 'StartupXYZ',
    location: 'Austin, TX',
    salary: '₹20 - ₹25/hour',
    type: 'Internship',
    description: 'Assist with digital marketing campaigns and social media management.',
    requirements: ['Social Media', 'Content Creation', 'Analytics', 'Communication'],
    posted: '2024-02-20'
  }
];