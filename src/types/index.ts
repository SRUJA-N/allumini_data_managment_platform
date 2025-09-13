export interface User {
  id: string;
  name: string;
  email: string;
  role: 'student' | 'alumni' | 'employee' | 'admin';
  avatar: string;
  isVerified?: boolean;
}

export interface Event {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  image: string;
  attendees: number;
  maxAttendees: number;
  category: string;
}

export interface Job {
  id: string;
  title: string;
  company: string;
  location: string;
  salary: string;
  type: string;
  description: string;
  requirements: string[];
  posted: string;
}

export interface Mentor {
  id: string;
  name: string;
  avatar: string;
  company: string;
  position: string;
  expertise: string[];
  rating: number;
  sessions: number;
}

export interface Complaint {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'pending' | 'in-progress' | 'resolved';
  date: string;
  priority: 'low' | 'medium' | 'high';
}

export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earned: boolean;
  category: string;
}