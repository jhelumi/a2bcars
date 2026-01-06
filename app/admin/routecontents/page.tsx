"use client";
import React, { useState } from 'react';
import { Plus, Search, Filter, Edit, Trash2, MapPin, Calendar, User } from 'lucide-react';
import { toast } from 'react-toastify';

import ReservationForm from '../../../components/ReservationForm';
import AdminHeader from '@/components/AdminHeader';
import { RoutePage } from './pageRouteType';

const AdminRouteContents: React.FC = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [pageRoutes, setpageRoutes] = useState<RoutePage[] | null> (null);
   
const fetchRoutes = async () => {
     
      try {
      
        const res = await fetch("/api/ourroutes?searchStr="+ searchTerm, {
        method: "GET",
        headers: { "Content-Type": "application/json" },
       
      });

      if (res.ok) {
        const result = await res.json();
        console.log("db routes: ", result)   
        setpageRoutes(result);     
      }
      } catch (error) {
        console.error("Error fetching quote:", error);
        alert("Failed to calculate quote. Please try again.");
      } finally {
        console.log("ERROR in fetching data from server:" )
      }
    };
  const handleLogout = () => {
    localStorage.removeItem('userRole');
    localStorage.removeItem('userEmail');
  };

  React.useEffect(() => 
  {
    fetchRoutes();
  },[searchTerm])
  const mockDrivers = [
    { id: '1', name: 'Mike Johnson' },
    { id: '2', name: 'David Brown' },
    { id: '3', name: 'Lisa Garcia' },
    { id: '4', name: 'Tom Wilson' },
  ];

  const mockReservations = [
    {
      id: '1',
      customerName: 'John Smith',
      customerPhone: '+1 (555) 123-4567',
      startLocation: '123 Main St, Downtown',
      endLocation: 'Airport Terminal 1',
      startDateTime: '2025-01-15T14:30:00',
      endDateTime: '2025-01-15T15:15:00',
      fareAmount: 45.00,
      driverName: 'Mike Johnson',
      status: 'In Progress',
    },
    {
      id: '2',
      customerName: 'Sarah Wilson',
      customerPhone: '+1 (555) 987-6543',
      startLocation: 'Downtown Plaza',
      endLocation: '456 Oak Avenue',
      startDateTime: '2025-01-15T15:15:00',
      endDateTime: '2025-01-15T15:45:00',
      fareAmount: 28.50,
      driverName: 'David Brown',
      status: 'Pending',
    },
    {
      id: '3',
      customerName: 'Robert Davis',
      customerPhone: '+1 (555) 456-7890',
      startLocation: 'Hotel Grand',
      endLocation: 'Business District',
      startDateTime: '2025-01-15T16:00:00',
      endDateTime: '2025-01-15T16:30:00',
      fareAmount: 32.75,
      driverName: 'Lisa Garcia',
      status: 'Completed',
    },
  ];

  const handleCreateRoute = (data: any) => {
    console.log('Creating reservation:', data);
    toast.success('Reservation created successfully!');
    setShowCreateForm(false);
  };

  const handleUpdateStatus = (id: string, newStatus: string) => {
    toast.success(`Reservation status updated to ${newStatus}`);
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

  const filteredReservations = mockReservations.filter(reservation => {
    const matchesSearch = reservation.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reservation.startLocation.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         reservation.endLocation.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || reservation.status.toLowerCase() === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-blue-50">
       <AdminHeader userRole="admin" />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Our Routes</h1>
            <p className="text-slate-600 mt-2">Manage custom route page contents</p>
          </div>
          <button
            onClick={() => setShowCreateForm(true)}
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors flex items-center space-x-2"
          >
            <Plus className="h-5 w-5" />
            <span>New Route</span>
          </button>
        </div>

        {showCreateForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-xl font-semibold text-slate-900">Create New Reservation</h2>
                  <button
                    onClick={() => setShowCreateForm(false)}
                    className="text-slate-400 hover:text-slate-600"
                  >
                    ×
                  </button>
                </div>
                <ReservationForm
                  onSubmit={handleCreateRoute}
                  drivers={mockDrivers}
                />
              </div>
            </div>
          </div>
        )}

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
                {pageRoutes && pageRoutes.map((pageRoute) => (
                  <tr key={pageRoute.id} className="hover:bg-blue-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                       <div className="text-sm font-medium text-slate-900">{pageRoute.title}</div>
                    </td>                  
                   <td className="px-6 py-4 whitespace-nowrap">
                      
                        <div className="text-sm text-slate-500">{pageRoute.address}</div>
                      
                    </td>   
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-slate-500">{pageRoute.seoKeywords}</div>
                    </td>
                    <td><div className="text-sm text-slate-500">Draft</div></td>
                    {/* <td className="px-6 py-4 whitespace-nowrap">
                      <select
                        value={reservation.status}
                        onChange={(e) => handleUpdateStatus(reservation.id, e.target.value)}
                        className={`px-2 py-1 rounded-full text-xs font-medium border-0 focus:outline-none focus:ring-2 focus:ring-blue-500 ${getStatusColor(reservation.status)}`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="In Progress">In Progress</option>
                        <option value="Completed">Completed</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td> */}
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                      <div className="flex space-x-2">
                        <button className="text-blue-600 hover:text-blue-900">
                          <Edit className="h-4 w-4" />
                        </button>
                        <button className="text-red-600 hover:text-red-900">
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