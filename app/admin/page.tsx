'use client';
import React, { useEffect, useState } from 'react';
import {
  Users,
  Car,
  Calendar,
  DollarSign,
  Clock,
  CheckCircle,
} from 'lucide-react';
import AdminHeader from '../../components/AdminHeader';
import Footer from '../../components/footer';
import StatsCard from '../../components/StatsCard';
import { Enquiry, EnquiryStatus } from '@/lib/types/enquiryTypes';

const AdminDashboard: React.FC = () => {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);

  const stats = [
    {
      title: 'Total Enquiries',
      value: 24,
      icon: Users,
      trend: { value: 12, isPositive: true },
      color: 'blue' as const,
    },
    {
      title: 'Active Reservations',
      value: 18,
      icon: Calendar,
      trend: { value: 8, isPositive: true },
      color: 'green' as const,
    },
    {
      title: 'Weekly Revenue',
      value: '$12,450',
      icon: DollarSign,
      trend: { value: 15, isPositive: true },
      color: 'yellow' as const,
    },
    {
      title: 'Completed Jobs',
      value: 156,
      icon: CheckCircle,
      trend: { value: 23, isPositive: true },
      color: 'green' as const,
    },
  ];

  const recentReservations = [
    {
      id: '1',
      customer: 'John Smith',
      from: '123 Main St',
      to: 'Airport Terminal 1',
      time: '2:30 PM',
      driver: 'Mike Johnson',
      status: 'In Progress',
      fare: '$45.00',
    },
    {
      id: '2',
      customer: 'Sarah Wilson',
      from: 'Downtown Plaza',
      to: '456 Oak Avenue',
      time: '3:15 PM',
      driver: 'David Brown',
      status: 'Pending',
      fare: '$28.50',
    },
    {
      id: '3',
      customer: 'Robert Davis',
      from: 'Hotel Grand',
      to: 'Business District',
      time: '4:00 PM',
      driver: 'Lisa Garcia',
      status: 'Completed',
      fare: '$32.75',
    },
  ];

  const getStatusColor = (status: EnquiryStatus) => {
    switch (status) {
      case EnquiryStatus.Open:
        return 'bg-green-100 text-green-800';
      case EnquiryStatus.InProgress:
        return 'bg-blue-100 text-blue-800';
      case EnquiryStatus.Closed:
        return 'bg-yellow-100 text-yellow-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  useEffect(() => {
    const fetchEnquiries = async () => {
      try {
        const res = await fetch('/api/quote', {
          method: 'GET',
          headers: { 'Content-Type': 'application/json' },
        });

        if (res.ok) {
          const result = await res.json();
          console.log('Recent Enquiries: ', result);
          setEnquiries(result);
        }
      } catch (error) {
        console.error('Error fetching quote:', error);
      }
    };
    fetchEnquiries();
  }, []);
  return (
    <div className="min-h-screen bg-blue-50">
      <AdminHeader userRole="admin" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900">Admin Dashboard</h1>
          <p className="text-slate-600 mt-2">
            Overview of your taxi business operations
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border border-blue-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Recent Enquiries
            </h2>
            <div className="space-y-4">
              {enquiries.map((enquiry) => (
                <div
                  key={enquiry?.name}
                  className="border border-blue-100 rounded-lg p-4"
                >
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-slate-900">
                        {enquiry.customerType}
                      </h3>
                      <p className="text-sm text-slate-600">
                        {enquiry.returnTime}
                      </p>
                    </div>
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(enquiry.status)}`}
                    >
                      {enquiry.status}
                    </span>
                  </div>
                  <div className="text-sm text-slate-600 mb-2">
                    <p>
                      <strong>From:</strong> {enquiry.startLocation}
                    </p>
                    <p>
                      <strong>To:</strong> {enquiry.endLocation}
                    </p>
                    <p>
                      <strong>Travel Data:</strong>{' '}
                      {enquiry.travelDate.toString()}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg border border-blue-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">
              Driver Status
            </h2>
            <div className="space-y-4">
              {[
                {
                  name: 'Mike Johnson',
                  status: 'On Trip',
                  location: 'Downtown',
                  earnings: '$145.50',
                },
                {
                  name: 'David Brown',
                  status: 'Available',
                  location: 'Airport Area',
                  earnings: '$98.25',
                },
                {
                  name: 'Lisa Garcia',
                  status: 'On Trip',
                  location: 'Business District',
                  earnings: '$167.75',
                },
                {
                  name: 'Tom Wilson',
                  status: 'Off Duty',
                  location: 'Home',
                  earnings: '$89.00',
                },
              ].map((driver, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-3 border border-blue-100 rounded-lg"
                >
                  <div>
                    <h3 className="font-medium text-slate-900">
                      {driver.name}
                    </h3>
                    <p className="text-sm text-slate-600">{driver.location}</p>
                  </div>
                  <div className="text-right">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        driver.status === 'Available'
                          ? 'bg-green-100 text-green-800'
                          : driver.status === 'On Trip'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-slate-100 text-slate-800'
                      }`}
                    >
                      {driver.status}
                    </span>
                    <p className="text-sm text-slate-600 mt-1">
                      Today: {driver.earnings}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;
