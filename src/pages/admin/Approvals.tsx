import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CheckCircle, XCircle, Clock, User, Calendar, Briefcase, AlertTriangle } from 'lucide-react';

interface ApprovalItem {
  id: string;
  type: 'alumni_verification' | 'event_approval' | 'job_posting';
  title: string;
  description: string;
  submittedBy: string;
  submittedDate: string;
  status: 'pending' | 'approved' | 'rejected';
  priority: 'low' | 'medium' | 'high';
  details: any;
}

export const Approvals: React.FC = () => {
  const [approvals, setApprovals] = useState<ApprovalItem[]>([
    {
      id: '1',
      type: 'alumni_verification',
      title: 'Alumni Verification Request',
      description: 'Request for alumni status verification',
      submittedBy: 'Michael Johnson',
      submittedDate: '2024-02-20',
      status: 'pending',
      priority: 'high',
      details: {
        graduationYear: '2018',
        degree: 'Computer Science',
        currentCompany: 'Microsoft'
      }
    },
    {
      id: '2',
      type: 'event_approval',
      title: 'Tech Workshop Event',
      description: 'Request to host a React.js workshop for students',
      submittedBy: 'Sarah Wilson',
      submittedDate: '2024-02-22',
      status: 'pending',
      priority: 'medium',
      details: {
        eventDate: '2024-03-15',
        expectedAttendees: 50,
        venue: 'Computer Lab A'
      }
    },
    {
      id: '3',
      type: 'job_posting',
      title: 'Software Engineer Position',
      description: 'New job posting from TechStart Inc.',
      submittedBy: 'HR Department',
      submittedDate: '2024-02-25',
      status: 'pending',
      priority: 'medium',
      details: {
        company: 'TechStart Inc.',
        salary: '₹80,000 - ₹100,000',
        location: 'Remote'
      }
    },
    {
      id: '4',
      type: 'alumni_verification',
      title: 'Alumni Verification Request',
      description: 'Request for alumni status verification',
      submittedBy: 'Lisa Chen',
      submittedDate: '2024-02-18',
      status: 'approved',
      priority: 'medium',
      details: {
        graduationYear: '2019',
        degree: 'Business Administration',
        currentCompany: 'Goldman Sachs'
      }
    }
  ]);

  const handleApproval = (id: string, action: 'approved' | 'rejected') => {
    setApprovals(prev => prev.map(item => 
      item.id === id ? { ...item, status: action } : item
    ));
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'alumni_verification':
        return <User className="w-5 h-5" />;
      case 'event_approval':
        return <Calendar className="w-5 h-5" />;
      case 'job_posting':
        return <Briefcase className="w-5 h-5" />;
      default:
        return <AlertTriangle className="w-5 h-5" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'alumni_verification':
        return 'bg-blue-100 text-blue-700';
      case 'event_approval':
        return 'bg-green-100 text-green-700';
      case 'job_posting':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'approved':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const pendingApprovals = approvals.filter(item => item.status === 'pending');
  const processedApprovals = approvals.filter(item => item.status !== 'pending');

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Approvals</h1>
        <p className="text-gray-600">Review and manage pending approvals</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <Clock className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">{pendingApprovals.length}</h3>
            <p className="text-sm text-gray-600">Pending</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {approvals.filter(item => item.status === 'approved').length}
            </h3>
            <p className="text-sm text-gray-600">Approved</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <XCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {approvals.filter(item => item.status === 'rejected').length}
            </h3>
            <p className="text-sm text-gray-600">Rejected</p>
          </CardContent>
        </Card>
        <Card className="text-center">
          <CardContent className="p-6">
            <AlertTriangle className="w-12 h-12 text-orange-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {approvals.filter(item => item.priority === 'high').length}
            </h3>
            <p className="text-sm text-gray-600">High Priority</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Pending Approvals</h3>
          <p className="text-sm text-gray-600">Items requiring your attention</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {pendingApprovals.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No pending approvals.</p>
            ) : (
              pendingApprovals.map((item) => (
                <div key={item.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                        {getTypeIcon(item.type)}
                      </div>
                      <div>
                        <h4 className="font-medium text-gray-900">{item.title}</h4>
                        <p className="text-sm text-gray-600">{item.description}</p>
                        <p className="text-xs text-gray-500">
                          Submitted by {item.submittedBy} on {new Date(item.submittedDate).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(item.priority)}`}>
                      {item.priority} priority
                    </span>
                  </div>

                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <h5 className="text-sm font-medium text-gray-900 mb-2">Details:</h5>
                    <div className="text-sm text-gray-600">
                      {Object.entries(item.details).map(([key, value]) => (
                        <p key={key}>
                          <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').toLowerCase()}:</span> {String(value)}
                        </p>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button
                      variant="primary"
                      size="sm"
                      onClick={() => handleApproval(item.id, 'approved')}
                    >
                      <CheckCircle className="w-4 h-4 mr-1" />
                      Approve
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleApproval(item.id, 'rejected')}
                      className="text-red-600 border-red-200 hover:bg-red-50"
                    >
                      <XCircle className="w-4 h-4 mr-1" />
                      Reject
                    </Button>
                  </div>
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">Recent Decisions</h3>
          <p className="text-sm text-gray-600">Recently processed approvals</p>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {processedApprovals.map((item) => (
              <div key={item.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center space-x-3">
                  <div className={`p-2 rounded-lg ${getTypeColor(item.type)}`}>
                    {getTypeIcon(item.type)}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{item.title}</h4>
                    <p className="text-sm text-gray-500">by {item.submittedBy}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 text-xs font-medium rounded-full ${getStatusColor(item.status)}`}>
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};