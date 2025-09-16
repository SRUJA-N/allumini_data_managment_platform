import React from 'react';
import { Card, CardHeader, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Shield, CheckCircle, Clock, FileText, Download, ExternalLink } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export const Blockchain: React.FC = () => {
  const { user } = useAuth();

  const verificationData = {
    student: {
      certificates: [
        { name: 'Student Enrollment', status: 'verified', date: '2023-09-01', hash: '0x1a2b3c4d5e6f7g8h9i0j' },
        { name: 'Academic Standing', status: 'verified', date: '2024-02-15', hash: '0x9i8h7g6f5e4d3c2b1a0z' },
        { name: 'Course Completion', status: 'pending', date: '2024-03-01', hash: null }
      ],
      walletAddress: '0x742d35Cc6B8b2F8AF2c96a9F4e72B7D8F3E4A1B2',
      totalVerifications: 12
    },
    alumni: {
      certificates: [
        { name: 'Degree Verification', status: 'verified', date: '2020-05-15', hash: '0x1a2b3c4d5e6f7g8h9i0j' },
        { name: 'Alumni Status', status: 'verified', date: '2020-06-01', hash: '0x9i8h7g6f5e4d3c2b1a0z' },
        { name: 'Professional Certification', status: 'verified', date: '2023-11-20', hash: '0x7f8e9d0c1b2a3456789e' }
      ],
      walletAddress: '0x842d45Dc7C8b3F9BG3d97b0G5f83C8E9G4F5B2C3',
      totalVerifications: 8
    },
    recruiter: {
      certificates: [
        { name: 'Company Verification', status: 'verified', date: '2022-01-15', hash: '0x2b3c4d5e6f7g8h9i0j1k' },
        { name: 'Recruiter License', status: 'verified', date: '2022-02-01', hash: '0x8h7g6f5e4d3c2b1a0z9y' },
        { name: 'Background Check', status: 'verified', date: '2023-08-10', hash: '0x6e7f8g9h0i1j2k3l4m5n' }
      ],
      walletAddress: '0x943e56Ed8D9c4G0CH4e08c1H6g94D0F0H5G6C4D5',
      totalVerifications: 6
    }
  };

  const currentUserData = user?.role === 'student' ? verificationData.student : user?.role === 'recruiter' ? verificationData.recruiter : verificationData.alumni;

  // Added to ensure recruiter role is handled in UI text
  const getUserRoleText = () => {
    if (user?.role === 'student') return 'Student';
    if (user?.role === 'recruiter') return 'Recruiter';
    return 'Alumni';
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'verified':
        return 'text-green-600 bg-green-100';
      case 'pending':
        return 'text-yellow-600 bg-yellow-100';
      case 'failed':
        return 'text-red-600 bg-red-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'verified':
        return <CheckCircle className="w-4 h-4" />;
      case 'pending':
        return <Clock className="w-4 h-4" />;
      default:
        return <FileText className="w-4 h-4" />;
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center space-x-3">
        <div className="p-3 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Blockchain Verification</h1>
          <p className="text-gray-600">Your verified credentials on the blockchain</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="text-center">
          <CardContent className="p-6">
            <Shield className="w-12 h-12 text-green-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">{currentUserData.totalVerifications}</h3>
            <p className="text-sm text-gray-600">Total Verifications</p>
          </CardContent>
        </Card>
        
        <Card className="text-center">
          <CardContent className="p-6">
            <CheckCircle className="w-12 h-12 text-blue-500 mx-auto mb-3" />
            <h3 className="text-2xl font-bold text-gray-900">
              {currentUserData.certificates.filter(cert => cert.status === 'verified').length}
            </h3>
            <p className="text-sm text-gray-600">Verified Documents</p>
          </CardContent>
        </Card>

        <Card className="text-center">
          <CardContent className="p-6">
            {user?.isVerified ? (
              <>
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-green-600">Verified</h3>
                <p className="text-sm text-gray-600">{getUserRoleText()} Status</p>
              </>
            ) : (
              <>
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-yellow-600">Pending</h3>
                <p className="text-sm text-gray-600">Verification in Progress</p>
              </>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">My Digital Certificates</h3>
            <p className="text-sm text-gray-600">Blockchain-verified credentials and documents</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {currentUserData.certificates.map((cert, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900">{cert.name}</h4>
                    <span className={`px-2 py-1 text-xs font-medium rounded-full flex items-center space-x-1 ${getStatusColor(cert.status)}`}>
                      {getStatusIcon(cert.status)}
                      <span className="capitalize">{cert.status}</span>
                    </span>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-2">Issued: {cert.date}</p>
                  
                  {cert.hash && (
                    <div className="mb-3">
                      <p className="text-xs text-gray-500 mb-1">Blockchain Hash:</p>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded font-mono break-all">
                        {cert.hash}
                      </code>
                    </div>
                  )}
                  
                  <div className="flex space-x-2">
                    {cert.status === 'verified' && (
                      <>
                        <Button variant="outline" size="sm">
                          <Download className="w-4 h-4 mr-1" />
                          Download
                        </Button>
                        <Button variant="outline" size="sm">
                          <ExternalLink className="w-4 h-4 mr-1" />
                          Verify
                        </Button>
                      </>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold text-gray-900">Blockchain Wallet</h3>
            <p className="text-sm text-gray-600">Your digital identity on the blockchain</p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="text-sm font-medium text-gray-900 mb-2">Wallet Address</h4>
              <div className="p-3 bg-gray-50 rounded-lg">
                <code className="text-sm font-mono break-all text-gray-700">
                  {currentUserData.walletAddress}
                </code>
              </div>
            </div>

            <div className="space-y-3">
              <h4 className="text-sm font-medium text-gray-900">Recent Transactions</h4>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Certificate Issued</p>
                    <p className="text-xs text-gray-500">Academic Standing</p>
                  </div>
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-900">Identity Verified</p>
                    <p className="text-xs text-gray-500">{getUserRoleText()} Status</p>
                  </div>
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
              </div>
            </div>

            <Button className="w-full">
              <ExternalLink className="w-4 h-4 mr-2" />
              View on Blockchain Explorer
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold text-gray-900">How Blockchain Verification Works</h3>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Document Submission</h4>
              <p className="text-sm text-gray-600">Submit your credentials for blockchain verification</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <Shield className="w-6 h-6 text-teal-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Cryptographic Hashing</h4>
              <p className="text-sm text-gray-600">Documents are secured with cryptographic hash functions</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <h4 className="font-medium text-gray-900 mb-2">Immutable Verification</h4>
              <p className="text-sm text-gray-600">Your credentials are permanently verified on the blockchain</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
