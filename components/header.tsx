'use client';
import React, { useState } from 'react';
import {
  Menu,
  X,
  Plane,
  Handshake,
  Route,
  Zap,
  CalendarCheck,
  CircleParking,
  Users,
  PhoneIncoming,
  Waypoints,
  Phone,
  MessageCircle,
} from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import IconLink from './IconLink';
import { Toaster } from '@/components/ui/sonner';
interface HeaderProps {
  userRole?: 'admin' | 'driver' | 'public' | null;
}

const Header: React.FC<HeaderProps> = ({ userRole }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const pathname = usePathname();

  const adminNavItems = [
    { path: '/aboutus', label: 'About Us', icon: Users },
    { path: '/airporttransfers', label: 'Airport Transfers', icon: Plane },
    {
      path: '/businesstravel',
      label: 'Corporate Accounts & Business Travel',
      icon: Handshake,
    },
    { path: '/longdistancetravel', label: 'Long Distance Travel', icon: Route },
    { path: '/city2citytravel', label: 'City-t-City Travel', icon: Zap },
    {
      path: '/eventstravel',
      label: 'Event & Seasonal Travel',
      icon: CalendarCheck,
    },
    { path: '/fleet', label: 'Our Fleet', icon: CircleParking },
    { path: '/popularjourneys', label: 'Popular Journeys', icon: Waypoints },
    { path: '/contactus', label: 'Contact Us', icon: PhoneIncoming },
  ];

  const navItems = userRole === 'public' ? adminNavItems : [];

  return (
    <header className="bg-brand-gray border-b border-blue-200 sticky top-0 z-50">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link href="/" className="flex items-center space-x-2">
            <Image
              className="dark:invert"
              src="/a2blogo.svg"
              alt="Vercel logomark"
              width={120}
              height={120}
            />
          </Link>
          <div className="grid grid-cols-3 gap-4 ">
            <Link
              href="tel:+441844208125"
              className="flex text-white lg:text-xl md:text-sm font-semibold gap-2"
            >
              <Phone className="h-6 w-6 text-blue-400" />
            </Link>
            <Link
              href="https://wa.me/447435964303"
              className="flex text-white lg:text-xl md:text-sm font-semibold gap-2"
            >
              <MessageCircle className="h-6 w-6 text-blue-400 " />
            </Link>
            <Link
              target="_blank"
              href="https://www.tripadvisor.co.uk/Attraction_Review-g4208470-d17837562-Reviews-A2B_Cars-Long_Crendon_Aylesbury_Aylesbury_Vale_Buckinghamshire_England.html"
            >
              <Image
                src="/tripadvisor_award.png"
                alt="TripAdvisor"
                width="40"
                height="40"
              />
            </Link>
          </div>
          {userRole && (
            <>
              <nav className="hidden md:flex space-x-8">
                {navItems.map((item) => (
                  <IconLink
                    key={item.path}
                    Icon={item.icon}
                    href={item.path}
                    className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                      pathname === item.path
                        ? 'text-blue-600 bg-blue-50'
                        : 'text-slate-700 hover:text-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {item.label}
                  </IconLink>
                ))}
              </nav>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 rounded-md text-blue-50 hover:text-blue-600 hover:bg-blue-50"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
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
                      ? 'text-brand-blue bg-blue-50'
                      : 'text-blue-50 hover:text-brand-blue hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
      <Toaster />
    </header>
  );
};

export default Header;
