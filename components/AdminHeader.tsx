'use client'
import React, { useState } from 'react';
import { Menu, X, Car, LogOut } from 'lucide-react';
import Link from 'next/link';
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { authClient } from "@/lib/auth-client"

interface HeaderProps {
  userRole?: 'admin' | 'driver' | null;
  onLogout?: () => void;
}

const AdminHeader: React.FC<HeaderProps> = ({ userRole, onLogout }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();
 const pathname = usePathname();

  const handleLogout = async() => {
    await authClient.signOut();          
    setIsMenuOpen(false);
    router.replace("/auth");
    
  };

  const adminNavItems = [
    { path: '/admin', label: 'Dashboard' },
    { path: '/admin/reservations', label: 'Reservations' },
    { path: '/admin/drivers', label: 'Drivers' },
    { path: '/admin/reports', label: 'Reports' },
  ];

  const driverNavItems = [
    { path: '/driver/dashboard', label: 'Dashboard' },
    { path: '/driver/schedule', label: 'Schedule' },
  ];

  const navItems = userRole === 'admin' ? adminNavItems : userRole === 'driver' ? driverNavItems : [];

  return (
    <header className="bg-white border-b border-blue-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
           <Image
                        className="dark:invert"
                        src="/a2blogo-reverse.svg"
                        alt="Vercel logomark"
                        width={120}
                        height={120}
                      />
          
          </Link>

          {userRole && (
            <>
              <nav className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      pathname === item.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="hidden md:flex items-center space-x-4">
                <span className="text-sm text-slate-600 capitalize">{userRole}</span>
                <button
                  onClick={handleLogout}
                  className="flex items-center space-x-1 px-3 py-2 text-sm text-slate-700 hover:text-blue-600 transition-colors"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </div>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-slate-700 hover:text-blue-600 hover:bg-blue-50"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </>
          )}
        </div>

        {isMenuOpen && userRole && (
          <div className="md:hidden py-4 border-t border-blue-200">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  href={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-blue-600 bg-blue-50'
                      : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={handleLogout}
                className="flex items-center space-x-1 px-3 py-2 text-sm text-slate-700 hover:text-blue-600 transition-colors text-left"
              >
                <LogOut className="h-4 w-4" />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default AdminHeader;