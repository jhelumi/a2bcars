"use client";
import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, User, Phone, Mail, Car, DollarSign } from 'lucide-react';
import { toast } from 'react-toastify';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import AdminHeader from '@/components/AdminHeader';

const AdminDrivers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
  };

  const mockDrivers = [
    {
      id: '1',
      name: 'Mike Johnson',
      email: 'mike.johnson@taxipro.com',
      phone: '+1 (555) 123-4567',
      licenseNumber: 'DL123456789',
      vehicleModel: '2020 Toyota Camry',
      vehiclePlate: 'ABC-1234',
      commissionRate: 15,
      status: 'Active',
      weeklyEarnings: 1245.50,
      completedJobs: 23,
      rating: 4.8,
    },
    {
      id: '2',
      name: 'David Brown',
      email: 'david.brown@taxipro.com',
      phone: '+1 (555) 987-6543',
      licenseNumber: 'DL987654321',
      vehicleModel: '2019 Honda Accord',
      vehiclePlate: 'XYZ-5678',
      commissionRate: 15,
      status: 'Active',
      weeklyEarnings: 987.25,
      completedJobs: 18,
      rating: 4.6,
    },
    {
      id: '3',
      name: 'Lisa Garcia',
      email: 'lisa.garcia@taxipro.com',
      phone: '+1 (555) 456-7890',
      licenseNumber: 'DL456789123',
      vehicleModel: '2021 Nissan Altima',
      vehiclePlate: 'DEF-9012',
      commissionRate: 18,
      status: 'Active',
      weeklyEarnings: 1567.75,
      completedJobs: 31,
      rating: 4.9,
    },
    {
      id: '4',
      name: 'Tom Wilson',
      email: 'tom.wilson@taxipro.com',
      phone: '+1 (555) 321-0987',
      licenseNumber: 'DL321098765',
      vehicleModel: '2018 Ford Fusion',
      vehiclePlate: 'GHI-3456',
      commissionRate: 15,
      status: 'Inactive',
      weeklyEarnings: 0,
      completedJobs: 0,
      rating: 4.5,
    },
  ];

  const filteredDrivers = mockDrivers.filter(driver =>
    driver.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    driver.vehicleModel.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    return status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800';
  };

  const handleEditDriver = (driverId: string) => {
    toast.info(`Edit driver functionality would open for driver ${driverId}`);
  };

  const handleDeleteDriver = (driverId: string) => {
    toast.success('Driver removed successfully');
  };

  return (
    <div className="min-h-screen bg-blue-50">
     <AdminHeader userRole="admin" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Drivers</h1>
            <p className="text-slate-600 mt-2">Manage driver profiles and performance</p>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center space-x-2">
            <Plus className="h-5 w-5" />
            <span>Add Driver</span>
          </button>
        </div>

        <div className="bg-white rounded-lg border border-blue-200 p-6 mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search drivers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {filteredDrivers.map((driver) => (
            <div key={driver.id} className="bg-white rounded-lg border border-blue-200 p-6 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <User className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">{driver.name}</h3>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(driver.status)}`}>
                      {driver.status}
                    </span>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => handleEditDriver(driver.id)}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    <Edit className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => handleDeleteDriver(driver.id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Mail className="h-4 w-4" />
                  <span>{driver.email}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Phone className="h-4 w-4" />
                  <span>{driver.phone}</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-slate-600">
                  <Car className="h-4 w-4" />
                  <span>{driver.vehicleModel} ({driver.vehiclePlate})</span>
                </div>
              </div>

              <div className="mt-4 pt-4 border-t border-blue-100">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-slate-500">Weekly Earnings</span>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4 text-green-600" />
                      <span className="font-medium text-slate-900">${driver.weeklyEarnings.toFixed(2)}</span>
                    </div>
                  </div>
                  <div>
                    <span className="text-slate-500">Completed Jobs</span>
                    <p className="font-medium text-slate-900">{driver.completedJobs}</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Commission Rate</span>
                    <p className="font-medium text-slate-900">{driver.commissionRate}%</p>
                  </div>
                  <div>
                    <span className="text-slate-500">Rating</span>
                    <p className="font-medium text-slate-900">⭐ {driver.rating}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredDrivers.length === 0 && (
          <div className="text-center py-12">
            <User className="h-12 w-12 text-slate-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-slate-900 mb-2">No drivers found</h3>
            <p className="text-slate-600">Try adjusting your search criteria or add a new driver.</p>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default AdminDrivers;