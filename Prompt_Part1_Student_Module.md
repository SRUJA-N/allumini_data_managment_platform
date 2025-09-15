# Hackathon Prompt: Part 1 - Student Module

## Overview
You are responsible for the Student Module of the Alumni Data Management Platform. This module focuses on student-facing features that help students connect with alumni, find opportunities, and engage in community activities. Your work will enhance the student experience and ensure seamless interaction with the platform.

## Key Features to Work On
- Student Dashboard: Personalized overview with stats, recent activities, and upcoming events
- Events Browsing: View and register for university events and alumni-hosted events
- Job Applications: Browse job postings and apply for opportunities
- Mentorship Requests: Connect with alumni mentors based on career interests
- Gamification: Earn points, badges, and track progress in leaderboards

## Files to Read and Understand
### Core Pages
- `src/pages/Dashboard.tsx` (focus on `renderStudentDashboard` function)
- `src/pages/Events.tsx`
- `src/pages/Jobs.tsx`
- `src/pages/Mentorship.tsx`
- `src/pages/Gamification.tsx`

### Data Files
- `src/data/events.ts`
- `src/data/jobs.ts`
- `src/data/mentors.ts`
- `src/data/badges.ts`

### Shared Components
- `src/components/ui/StatCard.tsx`
- `src/components/ui/Card.tsx`
- `src/components/ui/Button.tsx`
- `src/components/layout/DashboardLayout.tsx`
- `src/components/layout/Header.tsx`
- `src/components/layout/Sidebar.tsx`

### Context and Types
- `src/context/AuthContext.tsx`
- `src/types/index.ts`
- `src/utils/cn.ts`

## Tasks to Complete
1. **Enhance Student Dashboard**: Add more interactive elements, improve data visualization, or add personalized recommendations
2. **Improve Events Page**: Add filtering, search functionality, or calendar integration for better event discovery
3. **Optimize Job Applications**: Implement application tracking, resume upload, or job matching algorithms
4. **Expand Mentorship Features**: Add messaging system, session scheduling, or feedback mechanisms
5. **Gamify Student Engagement**: Create more badge types, point systems, or achievement notifications
6. **Ensure Responsiveness**: Test and improve mobile experience across all student-facing pages
7. **Add Accessibility Features**: Implement proper ARIA labels, keyboard navigation, and screen reader support

## Integration Points
- Connect with Alumni Module for mentorship matching
- Link to Recruiter Module for job postings
- Integrate with Admin Module for analytics tracking
- Use shared UI components for consistency

## Testing Checklist
- [ ] All pages load correctly for student role
- [ ] Event registration works end-to-end
- [ ] Job application process is smooth
- [ ] Mentorship requests are sent and tracked
- [ ] Gamification points update correctly
- [ ] Mobile responsiveness verified
- [ ] Cross-browser compatibility checked

## Final Deliverables
- Enhanced student dashboard with improved UX
- Fully functional events, jobs, mentorship, and gamification pages
- Clean, maintainable code following project conventions
- Documentation of any new features or changes made

## BlackboxAI Build Prompt for Student Module
You are tasked with building the Student Module of an Alumni Data Management Platform using React and TypeScript. The module should include a personalized dashboard showing stats like events joined, jobs applied, mentorship requests, and points earned. Implement pages for browsing events, applying for jobs, requesting mentorship, and tracking gamification badges. Use Tailwind CSS for styling and ensure responsiveness. Integrate with shared UI components and context for authentication. Provide smooth navigation and interactive elements. Follow best practices for accessibility and performance.
