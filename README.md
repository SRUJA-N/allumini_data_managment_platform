# Alumni Data Management & Engagement Platform

## Overview
This platform connects students, alumni, recruiters, and university administrators in a comprehensive ecosystem to facilitate career growth, mentorship, event management, and community engagement. It is built using React and TypeScript with Tailwind CSS for styling.

## Key Features

### Recruiter Module
- Manage university operations related to job postings and student services.
- Handle complaints related to job postings and recruitment processes.
- Access a dedicated Recruiter dashboard with relevant metrics and tasks.

### Admin Module
- Oversee platform-wide operations, analytics, and user management.
- Manage approvals, leaderboards, and event management.
- View and resolve all submitted complaints across the platform.
- Access a dedicated Admin dashboard with comprehensive system insights.

### Other Roles
- **Student Portal:** Access academic journey, events, jobs, mentorship, and AI career advisor.
- **Alumni Portal:** Connect with alma mater, mentor students, host events, and job referrals.

## Project Structure
- `src/pages/auth/`: Authentication pages for different roles.
- `src/pages/recruiter/`: Recruiter-specific pages like Job Management.
- `src/pages/admin/`: Admin-specific pages including Analytics, Approvals, Event Management.
- `src/pages/Complaints.tsx`: Complaints handling accessible by Recruiter and Admin.
- `src/components/layout/Sidebar.tsx`: Role-based navigation sidebar.
- `src/context/AuthContext.tsx`: Authentication context and user role management.
- `src/data/`: Static data files for users, complaints, analytics, etc.

## Setup and Running
1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. Open the app in your browser at `http://localhost:5173/`.

## Usage
- Login using the provided demo credentials on the Welcome page.
- Navigate through role-specific portals using the sidebar.
- Admin users can manage events, view analytics, and handle complaints.
- Recruiters can manage job postings and view job-related complaints.

## Testing
- Basic manual testing has been performed for routing, navigation, and role-based access.
- Further thorough testing is recommended for UI interactions, complaint workflows, and event management.

## Contribution
Contributions are welcome. Please follow the existing code style and ensure role-based access control is maintained.

## License
This project is licensed under the MIT License.

---

For any questions or support, please contact the project maintainer.
