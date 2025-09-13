import { Complaint } from '../types';

export const adminComplaints: Complaint[] = [
  {
    id: '1',
    title: 'Login Issues with Student Portal',
    description: 'Unable to access the student portal despite multiple attempts. Getting error messages when trying to log in.',
    category: 'Technical',
    status: 'resolved',
    date: '2024-02-15',
    priority: 'high',
    submittedBy: 'John Smith',
    submittedByRole: 'student'
  },
  {
    id: '2',
    title: 'Missing Course Materials',
    description: 'Course materials for CS 301 are not available on the learning platform. Students are unable to access required readings.',
    category: 'Academic',
    status: 'in-progress',
    date: '2024-02-20',
    priority: 'medium',
    submittedBy: 'Sarah Johnson',
    submittedByRole: 'student'
  },
  {
    id: '3',
    title: 'Alumni Verification Delay',
    description: 'My alumni verification has been pending for over 2 weeks. Need urgent verification for job applications.',
    category: 'Administrative',
    status: 'pending',
    date: '2024-02-22',
    priority: 'high',
    submittedBy: 'Mike Wilson',
    submittedByRole: 'alumni'
  },
  {
    id: '4',
    title: 'Event Registration Bug',
    description: 'Cannot register for events. The registration button is not working properly.',
    category: 'Technical',
    status: 'pending',
    date: '2024-02-25',
    priority: 'medium',
    submittedBy: 'Emily Davis',
    submittedByRole: 'student'
  }
];

export const employeeJobComplaints: Complaint[] = [
  {
    id: '1',
    title: 'Misleading Job Description',
    description: 'The Software Engineer position posted by TechCorp has misleading requirements. The actual role requires 5+ years experience but was posted as entry-level.',
    category: 'Job Posting',
    status: 'in-progress',
    date: '2024-02-18',
    priority: 'medium',
    submittedBy: 'Alex Johnson',
    submittedByRole: 'student',
    jobId: '1',
    jobTitle: 'Software Engineer at TechCorp Inc.'
  },
  {
    id: '2',
    title: 'Unprofessional Interview Process',
    description: 'The interview process for the UX Designer role was unprofessional. The interviewer was late and unprepared.',
    category: 'Interview Process',
    status: 'resolved',
    date: '2024-02-20',
    priority: 'high',
    submittedBy: 'Maria Garcia',
    submittedByRole: 'student',
    jobId: '2',
    jobTitle: 'UX Designer at Design Studio'
  },
  {
    id: '3',
    title: 'Salary Information Incorrect',
    description: 'The posted salary range for the Marketing Intern position is incorrect. The actual offer was significantly lower.',
    category: 'Job Posting',
    status: 'pending',
    date: '2024-02-23',
    priority: 'medium',
    submittedBy: 'David Chen',
    submittedByRole: 'student',
    jobId: '3',
    jobTitle: 'Marketing Intern at StartupXYZ'
  }
];