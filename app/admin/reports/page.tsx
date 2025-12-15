"use client";
import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell } from 'recharts';
import { Calendar, Download, TrendingUp, DollarSign, Users, Car } from 'lucide-react';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import StatsCard from '../../../components/StatsCard';
import AdminHeader from '@/components/AdminHeader';

const AdminReports: React.FC = () => {
  const [dateRange, setDateRange] = useState('week');

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
  };

  const revenueData = [
    { name: 'Mon', revenue: 1200, jobs: 24 },
    { name: 'Tue', revenue: 1450, jobs: 29 },
    { name: 'Wed', revenue: 1100, jobs: 22 },
    { name: 'Thu', revenue: 1650, jobs: 33 },
    { name: 'Fri', revenue: 1800, jobs: 36 },
    { name: 'Sat', revenue: 2100, jobs: 42 },
    { name: 'Sun', revenue: 1900, jobs: 38 },
  ];

  const driverPerformanceData = [
    { name: 'Lisa Garcia', jobs: 31, earnings: 1567.75, rating: 4.9 },
    { name: 'Mike Johnson', jobs: 23, earnings: 1245.50, rating: 4.8 },
    { name: 'David Brown', jobs: 18, earnings: 987.25, rating: 4.6 },
    { name: 'Tom Wilson', jobs: 15, earnings: 789.00, rating: 4.5 },
  ];

  const jobStatusData = [
    { name: 'Completed', value: 156, color: '#10B981' },
    { name: 'In Progress', value: 18, color: '#3B82F6' },
    { name: 'Pending', value: 12, color: '#F59E0B' },
    { name: 'Cancelled', value: 8, color: '#EF4444' },
  ];

  const stats = [
    {
      title: 'Total Revenue',
      value: '$12,450',
      icon: DollarSign,
      trend: { value: 15, isPositive: true },
      color: 'green' as const,
    },
    {
      title: 'Total Jobs',
      value: 194,
      icon: Car,
      trend: { value: 8, isPositive: true },
      color: 'blue' as const,
    },
    {
      title: 'Active Drivers',
      value: 24,
      icon: Users,
      trend: { value: 12, isPositive: true },
      color: 'blue' as const,
    },
    {
      title: 'Avg. Job Value',
      value: '$64.18',
      icon: TrendingUp,
      trend: { value: 5, isPositive: true },
      color: 'yellow' as const,
    },
  ];

  return (
    <div className="min-h-screen bg-blue-50">
       <AdminHeader userRole="admin" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Reports & Analytics</h1>
            <p className="text-slate-600 mt-2">Business performance insights and driver analytics</p>
          </div>
          <div className="flex space-x-4">
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="week">This Week</option>
              <option value="month">This Month</option>
              <option value="quarter">This Quarter</option>
              <option value="year">This Year</option>
            </select>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center space-x-2">
              <Download className="h-5 w-5" />
              <span>Export</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg border border-blue-200 p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-slate-900">Daily Revenue</h2>
              <Calendar className="h-5 w-5 text-slate-400" />
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`$${value}`, 'Revenue']} />
                <Bar dataKey="revenue" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg border border-blue-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Job Status Distribution</h2>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={jobStatusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent === undefined ? 0 : percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {jobStatusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg border border-blue-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Jobs Completed Trend</h2>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [value, 'Jobs']} />
                <Line type="monotone" dataKey="jobs" stroke="#10B981" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="bg-white rounded-lg border border-blue-200 p-6">
            <h2 className="text-xl font-semibold text-slate-900 mb-4">Driver Performance</h2>
            <div className="space-y-4">
              {driverPerformanceData.map((driver, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-blue-100 rounded-lg">
                  <div>
                    <h3 className="font-medium text-slate-900">{driver.name}</h3>
                    <p className="text-sm text-slate-600">{driver.jobs} jobs completed</p>
                  </div>
                  <div className="text-right">
                    <p className="font-medium text-slate-900">${driver.earnings.toFixed(2)}</p>
                    <p className="text-sm text-slate-600">⭐ {driver.rating}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AdminReports;