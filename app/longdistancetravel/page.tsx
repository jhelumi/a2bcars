import Image from 'next/image';
import Header from '../../components/header';
import { BrandCarousel } from '../../components/BrandCarousel';
import { ThumbsUpIcon } from 'lucide-react';
import OurVehicles from '@/components/ourVehicles';

export default function LongDistanceTravel() {
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <Header userRole="public" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-left">
        <div className="flex flex-col items-center gap-6 text-center  text-brand-gray sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Long-Distance Travel
          </h1>

          <p className="text-lg leading-8 dark:text-zinc-400">
            When your journey takes you further than the usual day-to-day trips,
            you need a service that&apos;ve comfortable, reliable, and handled
            with care. At A2B Cars, we specialise in long-distance travel across
            the UK, giving you a calm and enjoyable experience from the moment
            you step into the vehicle until you reach your destination.
            <br />
            Whether you&apos;re travelling for business, visiting family,
            heading to an event, or starting a holiday, we make sure the journey
            feels relaxed, safe, and well-organised.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg border border-blue-200 p-6">
              <section>
                <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
                  Why Choose Long-Distance Travel With Us
                </h2>

                <ul className="list-disc  list-inside ml-4 mb-4 text-left">
                  <li>Comfortable, Spacious Executive Vehicles</li>
                  <li>Professional, Polite, DBS-Checked Drivers</li>
                  <li>Direct, Door-to-Door Travel With No Unnecessary Stops</li>
                  <li>Clear Communication Throughout Your Journey</li>
                  <li>
                    Stress-Free Travel Without Parking, Trains, or Connections
                  </li>
                  <li>Safe and Steady Driving for Long Motorway Routes</li>
                  <li>Flexible Scheduling to Suit Your Plans</li>
                </ul>

                <p>
                  We&apos;ve been operational since 1999, and we&apos;ve helped
                  thousands of customers travel smoothly across the UK. Our
                  long-distance service is ideal for individuals, families, and
                  corporate clients who want peace of mind and a smooth,
                  comfortable journey.
                </p>
              </section>
            </div>
            <div className="bg-white rounded-lg border border-blue-200 p-6">
              <section>
                <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
                  Where We Travel
                </h2>

                <ul className="list-disc  list-inside ml-4 mb-4 text-left">
                  <li>London</li>
                  <li>Oxford</li>
                  <li>Cambridge</li>
                  <li>Birmingham</li>
                  <li>Bristol</li>
                  <li>Southampton</li>
                  <li>Manchester</li>
                  <li>Leeds</li>
                  <li>Cardiff</li>
                  <li>And anywhere else in the UK</li>
                </ul>

                <p>
                  If your destination isn&apos;t listed here, simply ask — we
                  can usually help.
                </p>
              </section>
            </div>
            <div className="bg-white rounded-lg border border-blue-200 p-6">
              <section>
                {' '}
                <OurVehicles />
              </section>
            </div>
            <div className="bg-white rounded-lg border border-blue-200 p-6">
              <section>
                {' '}
                <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
                  Business & Corporate Long-Distance Travel
                </h2>
                <p>
                  If you&apos;ve travelling for business or sending staff to
                  meetings, conferences, or regional offices, we provide a calm,
                  reliable service with:
                </p>
                <ul className="list-disc  list-inside ml-4 mb-4 text-left">
                  <li>Clear communication</li>
                  <li>Punctual pickups</li>
                  <li>
                    A comfortable, quiet environment for working during travel
                  </li>
                  <li>Simple invoicing and corporate account options</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
