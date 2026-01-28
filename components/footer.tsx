'use client';
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import Link from 'next/link';

import Image from 'next/image';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-gray text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Link href="/" className="flex items-center space-x-2">
                <Image
                  className="dark:invert"
                  src="/a2blogo.svg"
                  alt="Vercel logomark"
                  width={120}
                  height={120}
                />
              </Link>
            </div>
            <p className="text-slate-300 mb-4 max-w-md">
              Reliable Airport Transfers & Executive Travel
              <br />
              <span className="text-xs">
                Professional, punctual, and comfortable travel — operational
                since 1999.
              </span>
            </p>
            <div className="grid grid-cols-2 gap-4 ">
              <div className="flex space-x-2">
                <Link href="https://www.facebook.com/a2bcars.net">
                  <Image
                    className="dark:invert #ffffff"
                    src="/facebook.svg"
                    alt="Vercel logomark"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="https://x.com/a2bcars1">
                  <Image
                    className="dark:invert"
                    src="/x.svg"
                    alt="Vercel logomark"
                    width={20}
                    height={20}
                  />
                </Link>
                <Link href="https://www.instagram.com/a2b.cars/">
                  <Image
                    className="dark:invert"
                    src="/instagram.svg"
                    alt="Vercel logomark"
                    width={20}
                    height={20}
                  />
                </Link>
              </div>
              <div>
                <Link
                  target="_blank"
                  href="https://www.tripadvisor.co.uk/Attraction_Review-g4208470-d17837562-Reviews-A2B_Cars-Long_Crendon_Aylesbury_Aylesbury_Vale_Buckinghamshire_England.html"
                >
                  <Image
                    src="/tripadvisor_award.png"
                    alt="TripAdvisor"
                    width="60"
                    height="60"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">01844 208125</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">info@a2bcars.net</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4 text-blue-400" />
                <span className="text-slate-300">
                  A2B Cars, Crendon House, Crendon Industrial Estate, Long
                  Crendon. HP18 9BB
                </span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="/privacy-policy"
                className="block text-slate-300 hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="/terms-of-service"
                className="block text-slate-300 hover:text-blue-400 transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="/cookie-policy"
                className="block text-slate-300 hover:text-blue-400 transition-colors"
              >
                Cookie Policy
              </a>
              <a
                href="/faq"
                className="block text-slate-300 hover:text-blue-400 transition-colors"
              >
                FAQs
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-slate-400">© 2026 A2B Cars All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
