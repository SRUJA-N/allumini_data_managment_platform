# Hackathon Prompt: Part 3 - Recruiter Module

## Overview
You are responsible for the Recruiter Module of the Alumni Data Management Platform. This module supports university recruiters in managing operations, handling complaints, and facilitating connections between students, alumni, and employers. Your work will streamline university processes and enhance operational efficiency.

## Key Features to Work On
- Recruiter Dashboard: Overview of tasks, performance metrics, and pending items
- Job Management: Posting and managing job opportunities for students
- Event Management: Coordinating and approving university events
- Complaint Handling: Processing and resolving student/alumni complaints

## Files to Read and Understand
### Core Pages
- `src/pages/Dashboard.tsx` (focus on `renderRecruiterDashboard` function)
- `src/pages/recruiter/JobManagement.tsx`
- `src/pages/recruiter/EventManagement.tsx`
- `src/pages/Complaints.tsx`

### Data Files
- `src/data/jobs.ts`
- `src/data/events.ts`
- `src/data/complaints.ts`
- `src/data/users.ts`

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
1. **Enhance Recruiter Dashboard**: Add task prioritization, workflow automation, or performance analytics
2. **Improve Job Management**: Implement advanced job posting tools, candidate tracking, and employer relations
3. **Streamline Event Management**: Build approval workflows, resource allocation, and event analytics
4. **Optimize Complaint System**: Create efficient triage, escalation, and resolution tracking
5. **Add Communication Tools**: Implement messaging, notifications, and collaboration features
6. **Implement Reporting**: Generate reports on job placements, event attendance, and complaint resolution
7. **Ensure Compliance**: Add audit trails, data retention policies, and regulatory compliance features

## Integration Points
- Connect with Student Module for job applications and event registrations
- Link to Alumni Module for event collaborations and job referrals
- Integrate with Admin Module for approval workflows and analytics
- Use shared UI components for consistency

## Testing Checklist
- [ ] All pages load correctly for recruiter role
- [ ] Job posting and management works end-to-end
- [ ] Event approval process functions properly
- [ ] Complaint handling system is efficient
- [ ] Dashboard shows accurate task and performance data
- [ ] Reporting features generate correct data
- [ ] All workflows maintain data integrity

## Final Deliverables
- Efficient recruiter dashboard with task management
- Comprehensive job management system
- Robust event coordination platform
- Effective complaint resolution system
- Clean, maintainable code following project conventions
- Documentation of any new features or changes made

## BlackboxAI Build Prompt for Recruiter Module
You are tasked with building the Recruiter Module of an Alumni Data Management Platform using React and TypeScript. The module should include a dashboard showing tasks like complaints handled, pending approvals, and jobs posted. Implement job management with posting and tracking features, event management with approval workflows, and a complaint handling system with triage and resolution tracking. Use Tailwind CSS for styling and ensure responsiveness. Integrate with shared UI components and context for authentication. Include reporting tools and compliance features. Follow best practices for operational efficiency and data integrity.
