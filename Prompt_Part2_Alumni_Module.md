# Hackathon Prompt: Part 2 - Alumni Module

## Overview
You are responsible for the Alumni Module of the Alumni Data Management Platform. This module empowers alumni to give back to their alma mater by hosting events, providing mentorship, and sharing memories. Your work will strengthen the alumni community and create meaningful connections between alumni and current students.

## Key Features to Work On
- Alumni Dashboard: Overview of impact, mentorship sessions, and contributions
- Event Creation: Tools for alumni to organize and host events
- Mentorship Provision: Platform for alumni to offer guidance and support
- Memories Sharing: Space for alumni to share experiences and stories

## Files to Read and Understand
### Core Pages
- `src/pages/Dashboard.tsx` (focus on `renderAlumniDashboard` function)
- `src/pages/Events.tsx` (focus on event creation features)
- `src/pages/Mentorship.tsx` (focus on mentorship provision)
- `src/pages/Memories.tsx`

### Data Files
- `src/data/events.ts`
- `src/data/memories.ts`
- `src/data/mentors.ts`
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
1. **Enhance Alumni Dashboard**: Add detailed impact metrics, contribution history, or networking suggestions
2. **Improve Event Creation**: Build intuitive event creation forms, attendee management, and promotion tools
3. **Expand Mentorship Platform**: Add profile creation, availability scheduling, and session management
4. **Develop Memories Feature**: Create rich media sharing, story curation, and community engagement tools
5. **Add Alumni Networking**: Implement connection requests, messaging, or alumni directory
6. **Ensure Data Privacy**: Implement proper access controls and data sharing preferences
7. **Add Notification System**: Create alerts for mentorship requests, event RSVPs, and platform updates

## Integration Points
- Connect with Student Module for mentorship matching and event participation
- Link to Recruiter Module for event approvals and job referrals
- Integrate with Admin Module for impact tracking and analytics
- Use shared UI components for consistency

## Testing Checklist
- [ ] All pages load correctly for alumni role
- [ ] Event creation and management works smoothly
- [ ] Mentorship requests can be accepted and managed
- [ ] Memories can be shared and viewed
- [ ] Dashboard reflects accurate impact metrics
- [ ] Privacy settings are respected
- [ ] Notification system functions properly

## Final Deliverables
- Comprehensive alumni dashboard with impact tracking
- Full-featured event creation and management system
- Robust mentorship provision platform
- Engaging memories sharing functionality
- Clean, maintainable code following project conventions
- Documentation of any new features or changes made

## BlackboxAI Build Prompt for Alumni Module
You are tasked with building the Alumni Module of an Alumni Data Management Platform using React and TypeScript. The module should include a dashboard showing impact metrics like mentorship sessions, events hosted, and job referrals. Implement features for creating and managing events, providing mentorship with profile and availability management, and sharing memories with rich media support. Use Tailwind CSS for styling and ensure responsiveness. Integrate with shared UI components and context for authentication. Include privacy controls and notification systems. Follow best practices for user experience and performance.
