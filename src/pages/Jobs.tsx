import React, { useState } from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { jobs } from '../data/jobs';
import { useAuth } from '../context/AuthContext';
import { MapPin, DollarSign, Clock, Briefcase, Eye, BookmarkPlus } from 'lucide-react';

export const Jobs: React.FC = () => {
  const { user } = useAuth();
  const [appliedJobs, setAppliedJobs] = useState<string[]>(['1']);
  const [savedJobs, setSavedJobs] = useState<string[]>(['2']);

  const handleApply = (jobId: string) => {
    if (!appliedJobs.includes(jobId)) {
      setAppliedJobs(prev => [...prev, jobId]);
    }
  };

  const handleSave = (jobId: string) => {
    if (savedJobs.includes(jobId)) {
      setSavedJobs(prev => prev.filter(id => id !== jobId));
    } else {
      setSavedJobs(prev => [...prev, jobId]);
    }
  };

  const getJobTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'full-time':
        return 'bg-green-100 text-green-800';
      case 'part-time':
        return 'bg-blue-100 text-blue-800';
      case 'internship':
        return 'bg-orange-100 text-orange-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            {user?.role === 'student' ? 'Job Opportunities' : 'Job Referrals'}
          </h1>
          <p className="text-gray-600">
            {user?.role === 'student' 
              ? 'Explore career opportunities tailored for you' 
              : 'Help students by referring them to opportunities'}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {jobs.map((job) => {
          const isApplied = appliedJobs.includes(job.id);
          const isSaved = savedJobs.includes(job.id);
          
          return (
            <Card key={job.id} hover>
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`px-3 py-1 text-xs font-medium rounded-full ${getJobTypeColor(job.type)}`}>
                        {job.type}
                      </span>
                      <span className="text-xs text-gray-500">
                        Posted {new Date(job.posted).toLocaleDateString()}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">{job.title}</h3>
                    <p className="text-sm font-medium text-gray-700 mb-2">{job.company}</p>
                  </div>
                  <button
                    onClick={() => handleSave(job.id)}
                    className={`p-2 rounded-lg transition-colors ${
                      isSaved ? 'bg-blue-100 text-blue-600' : 'hover:bg-gray-100 text-gray-400'
                    }`}
                  >
                    <BookmarkPlus className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-sm text-gray-600 mb-4 line-clamp-2">{job.description}</p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="w-4 h-4 mr-2" />
                    {job.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <DollarSign className="w-4 h-4 mr-2" />
                    {job.salary}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Briefcase className="w-4 h-4 mr-2" />
                    {job.type}
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-900 mb-2">Required Skills</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.map((skill, index) => (
                      <span 
                        key={index}
                        className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Details
                  </Button>
                  {user?.role === 'student' ? (
                    <Button
                      variant={isApplied ? "secondary" : "primary"}
                      size="sm"
                      className="flex-1"
                      onClick={() => handleApply(job.id)}
                      disabled={isApplied}
                    >
                      {isApplied ? 'Applied' : 'Apply Now'}
                    </Button>
                  ) : (
                    <Button
                      variant="primary"
                      size="sm"
                      className="flex-1"
                    >
                      Refer Student
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {user?.role === 'student' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Applied Jobs</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {appliedJobs.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No applications yet.</p>
                ) : (
                  jobs
                    .filter(job => appliedJobs.includes(job.id))
                    .map(job => (
                      <div key={job.id} className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{job.title}</h4>
                          <p className="text-sm text-gray-500">{job.company}</p>
                        </div>
                        <span className="px-2 py-1 bg-green-200 text-green-800 text-xs font-medium rounded-full">
                          Applied
                        </span>
                      </div>
                    ))
                )}
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <h3 className="text-lg font-semibold text-gray-900">Saved Jobs</h3>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {savedJobs.length === 0 ? (
                  <p className="text-gray-500 text-center py-4">No saved jobs.</p>
                ) : (
                  jobs
                    .filter(job => savedJobs.includes(job.id))
                    .map(job => (
                      <div key={job.id} className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                        <div>
                          <h4 className="font-medium text-gray-900">{job.title}</h4>
                          <p className="text-sm text-gray-500">{job.company}</p>
                        </div>
                        <Button variant="outline" size="sm">
                          Apply
                        </Button>
                      </div>
                    ))
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};