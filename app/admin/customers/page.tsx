"use client";
import React, { useState } from 'react';
import { Plus, Search, Edit, Trash2, User, Phone, Mail, Car, DollarSign } from 'lucide-react';
import { toast } from 'react-toastify';
import Header from '../../../components/header';
import Footer from '../../../components/footer';
import AdminHeader from '@/components/AdminHeader';

const Customers: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

 

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

      
      </main>

      <Footer />
    </div>
  );
};

export default Customers;