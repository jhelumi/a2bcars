'use client';
import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2 } from 'lucide-react';
import { toast } from 'react-toastify';

import AdminHeader from '@/components/AdminHeader';
import { RoutePage } from './pageRouteType';
import { useRouter } from 'next/navigation';

const AdminRouteContents: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [pageRoutes, setpageRoutes] = useState<RoutePage[] | null>(null);
  const router = useRouter();
  const fetchRoutes = async () => {
    try {
      const res = await fetch('/api/ourroutes?searchStr=' + searchTerm, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        const result = await res.json();
        console.log('db routes: ', result);
        setpageRoutes(result);
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      alert('Failed to calculate quote. Please try again.');
    } finally {
      console.log('');
    }
  };

  React.useEffect(() => {
    fetchRoutes();
  }, [searchTerm]);

  const handleUpdateStatus = (id: string, newStatus: string) => {
    toast.success(`Reservation status updated to ${newStatus}`);
  };

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch('/api/ourroutes?id=' + id, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
      });

      if (res.ok) {
        const result = await res.json();
        console.log('db routes: ', result);
        await fetchRoutes();
      }
    } catch (error) {
      console.error('Error fetching quote:', error);
      alert('Failed to calculate quote. Please try again.');
    } finally {
      console.log('ERROR in fetching data from server:');
    }
  };

  const handleEdit = async (id: string) => {
    router.replace('/admin/routecontents/edit/' + id);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-slate-100 text-slate-800';
    }
  };

  return (
    <div className="min-h-screen bg-blue-50">
      <AdminHeader userRole="admin" />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Our Routes</h1>
            <p className="text-slate-600 mt-2">
              Manage custom route page contents
            </p>
          </div>
          <button
            onClick={() => router.replace('/admin/editor')}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>New Route</span>
          </button>
        </div>

        <div className="bg-white rounded-lg border border-blue-200 p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search reservations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-slate-400" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="px-3 py-2 border border-blue-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Status</option>
                <option value="pending">Pending</option>
                <option value="in progress">In Progress</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg border border-blue-200 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-blue-200">
              <thead className="bg-blue-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Address Url
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Data
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-slate-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-blue-100">
                {pageRoutes &&
                  pageRoutes.map((pageRoute) => (
                    <tr key={pageRoute?.id} className="hover:bg-blue-50">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-slate-900">
                          {pageRoute?.title}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-500">
                          {pageRoute?.address}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-slate-500">
                          {pageRoute?.seoKeywords}
                        </div>
                      </td>
                      <td>
                        <div className="text-sm text-slate-500">Draft</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => handleEdit(pageRoute?.id)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <Edit className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() => handleDelete(pageRoute?.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminRouteContents;
