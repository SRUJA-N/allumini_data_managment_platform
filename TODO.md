# TODO: Change $ to ₹ Symbol

## Files to Edit
- [x] src/pages/recruiter/JobManagement.tsx: Update placeholder text
- [x] src/pages/recruiter/EventManagement.tsx: Update budget values
- [x] src/pages/admin/Approvals.tsx: Update salary range
- [x] src/pages/admin/Analytics.tsx: Update average salary display
- [x] src/data/jobs.ts: Update salary ranges

## Followup Steps
- [x] Verify changes by searching for remaining "$" symbols

# TODO: Change all "employee" to "Recruiter" in whole project

## Steps to Complete
- [x] Rename directory src/pages/employee to src/pages/recruiter
- [x] Rename file src/pages/auth/EmployeeLogin.tsx to RecruiterLogin.tsx
- [x] Edit src/App.tsx: update imports, routes, comments
- [x] Edit src/components/layout/Sidebar.tsx: update case 'employee' to 'recruiter'
- [x] Edit src/data/complaints.ts: update employeeJobComplaints to recruiterJobComplaints
- [x] Edit src/data/analytics.ts: update 'employees' to 'recruiters'
- [x] Edit src/types/index.ts: update 'employee' to 'recruiter' in role type
- [x] Edit src/components/auth/LoginForm.tsx: update role, credentials, gradients
- [x] Edit src/pages/admin/Analytics.tsx: update dataKey="employees" to "recruiters"
- [x] Edit src/pages/auth/RecruiterLogin.tsx: update component name, role, title, subtitle
- [x] Edit src/pages/Complaints.tsx: update all 'employee' references
- [x] Edit src/data/users.ts: update role 'employee' to 'recruiter'
- [x] Edit src/pages/Dashboard.tsx: update renderEmployeeDashboard to renderRecruiterDashboard, case, call
- [x] Edit src/pages/WelcomePage.tsx: update title, description, path, credentials
- [x] Edit README.md: update all employee references
- [x] Rename Prompt_Part3_Employee_Module.md to Prompt_Part3_Recruiter_Module.md and update content
- [x] Edit Prompt_Part1_Student_Module.md: update "Employee Module" to "Recruiter Module"
- [x] Edit Prompt_Part2_Alumni_Module.md: update "Employee Module" to "Recruiter Module"
- [x] Edit Prompt_Part4_Admin_Module.md: update "Employee Module" to "Recruiter Module"
- [x] Edit TODO.md: update references to employee paths

## Followup Steps
- [ ] Test the application by running it and checking login, navigation, and functionality for the recruiter role
