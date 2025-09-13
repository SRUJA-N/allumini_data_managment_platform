import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { MessageSquare, Plus, AlertCircle, CheckCircle, Clock } from 'lucide-react';

interface Complaint {
  id: string;
  title: string;
  description: string;
  category: string;
  status: 'pending' | 'in-progress' | 'resolved';
  date: string;
  priority: 'low' | 'medium' | 'high';
}

export const Complaints: React.FC = () => {
  const [complaints, setComplaints] = useState<Complaint[]>([
    {
      id: '1',
      title: 'Login Issues with Student Portal',
      description: 'Unable to access the student portal despite multiple attempts. Getting error messages.',
      category: 'Technical',
      status: 'resolved',
      date: '2024-02-15',
      priority: 'high'
    },
    {
      id: '2',
      title: 'Missing Course Materials',
      description: 'Course materials for CS 301 are not available on the learning platform.',
      category: 'Academic',
      status: 'in-progress',
      date: '2024-02-20',
      priority: 'medium'
    }
  ]);

  const [showForm, setShowForm] = useState(false);
  const [newComplaint, setNewComplaint] = useState({
    title: '',
    description: '',
    category: 'Technical',
    priority: 'medium' as const
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const complaint: Complaint = {
      id: Date.now().toString(),
      ...newComplaint,
      status: 'pending',
      date: new Date().toISOString().split('T')[0]
    };
    
    setComplaints([complaint, ...complaints]);
    setNewComplaint({ title: '', description: '', category: 'Technical', priority: 'medium' });
    setShowForm(false);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'resolved':
        return <CheckCircle className="w-5 h-5 text-green-600" />;
      case 'in-progress':
        return <Clock className="w-5 h-5 text-blue-600" />;
      default:
        return <AlertCircle className="w-5 h-5 text-yellow-600" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'resolved':
        return 'bg-green-100 text-green-800';
      case 'in-progress':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-yellow-100 text-yellow-800';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Complaints & Feedback</h1>
          <p className="text-gray-600">Submit and track your complaints and feedback</p>
        </div>
        <Button onClick={() => setShowForm(!showForm)}>
          <Plus className="w-4 h-4 mr-2" />
          New Complaint
        </Button>
      </div>

      {showForm && (
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Submit New Complaint</h3>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  value={newComplaint.title}
                  onChange={(e) => setNewComplaint({ ...newComplaint, title: e.target.value })}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Brief description of the issue"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                <textarea
                  value={newComplaint.description}
                  onChange={(e) => setNewComplaint({ ...newComplaint, description: e.target.value })}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Provide detailed information about your complaint..."
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select
                    value={newComplaint.category}
                    onChange={(e) => setNewComplaint({ ...newComplaint, category: e.target.value })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="Technical">Technical</option>
                    <option value="Academic">Academic</option>
                    <option value="Administrative">Administrative</option>
                    <option value="Facilities">Facilities</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Priority</label>
                  <select
                    value={newComplaint.priority}
                    onChange={(e) => setNewComplaint({ ...newComplaint, priority: e.target.value as 'low' | 'medium' | 'high' })}
                    className="w-full px-3 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                  </select>
                </div>
              </div>

              <div className="flex space-x-3">
                <Button type="submit">Submit Complaint</Button>
                <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                  Cancel
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <MessageSquare className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">{complaints.length}</h3>
            <p className="text-sm text-gray-600">Total Complaints</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <AlertCircle className="w-12 h-12 text-yellow-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {complaints.filter(c => c.status === 'pending').length}
            </h3>
            <p className="text-sm text-gray-600">Pending</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <Clock className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {complaints.filter(c => c.status === 'in-progress').length}
            </h3>
            <p className="text-sm text-gray-600">In Progress</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {complaints.filter(c => c.status === 'resolved').length}
            </h3>
            <p className="text-sm text-gray-600">Resolved</p>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">My Complaints</h3>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {complaints.length === 0 ? (
              <p className="text-gray-500 text-center py-8">No complaints submitted yet.</p>
            ) : (
              complaints.map((complaint) => (
                <div key={complaint.id} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h4 className="font-medium text-gray-900">{complaint.title}</h4>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusColor(complaint.status)}`}>
                          {complaint.status.replace('-', ' ')}
                        </span>
                        <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(complaint.priority)}`}>
                          {complaint.priority}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 mb-2">{complaint.description}</p>
                      <div className="flex items-center space-x-4 text-xs text-gray-500">
                        <span>Category: {complaint.category}</span>
                        <span>Submitted: {new Date(complaint.date).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <div className="ml-4">
                      {getStatusIcon(complaint.status)}
                    </div>
                  </div>
                  
                  {complaint.status === 'resolved' && (
                    <div className="mt-3 p-3 bg-green-50 rounded-lg">
                      <p className="text-sm text-green-800">
                        <strong>Resolution:</strong> Your issue has been resolved. Thank you for your feedback!
                      </p>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};