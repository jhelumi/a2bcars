import OurVehicles from '@/components/ourVehicles';
import Header from '../../components/header';

export default function AirportTransfers() {
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <Header userRole="public" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6 text-center  text-brand-gray sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Corporate Accounts & Business Travel
          </h1>

          <p className="text-lg leading-8 dark:text-zinc-400">
            When your business needs reliable transport for meetings, airport
            runs, office-to-office travel, or visiting clients, you need a
            service that is professional, punctual, and easy to work with. At
            A2B Cars, we provide calm, comfortable, and well-managed executive
            travel for companies across Buckinghamshire, South Oxfordshire &
            Hertfordshire.
            <br />
            We’ve been operational since 1999, and we partner with many
            businesses who trust us because we do things properly: clear
            communication, reliable scheduling, and a clean, executive service
            from start to finish.
          </p>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Why Businesses Choose A2B Cars
          </h2>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Professional, Polite, Experienced Drivers</li>
            <li>Executive-Standard Vehicles for a Comfortable Journey</li>
            <li>Reliable, On-Time Pickups for Important Meetings</li>
            <li>Clear Communication Throughout Every Journey</li>
            <li>Flexible Scheduling for Early Morning or Late-Night Travel</li>
            <li>Discreet and Private Travel Environment</li>
            <li>Smooth, Calm Driving for Working on the Go</li>
          </ul>

          <p>
            Your staff and clients will always be looked after with care,
            professionalism, and respect.
          </p>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Corporate Airport Travel
          </h2>
          <p>We handle all major UK airports and provide:</p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Flight monitoring</li>
            <li>Meet-and-greet options</li>
            <li>Help with luggage</li>
            <li>Direct, stress-free travel</li>
            <li>Clear communication at pickup and drop-off</li>
            <li>Reliable timings for tight schedules</li>
          </ul>

          <p>
            Many businesses rely on us for regular airport journeys because we
            prioritise punctuality and comfort.
          </p>

          <OurVehicles />

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Corporate Account Benefits
          </h2>
          <p>
            Streamline your company&apos;s transport needs with our corporate
            account benefits:
          </p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Priority bookings for your company</li>
            <li>Simple, clear invoicing</li>
            <li>Monthly statements</li>
            <li>Consistent service across all journeys</li>
            <li>A dedicated point of contact</li>
            <li>No last-minute surprises or unprofessional drivers</li>
          </ul>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Trusted by Local and National Businesses
          </h2>
          <p>
            We work with companies of all sizes — from small teams to large
            corporate clients — and many of them have stayed with us for years
            because they trust the way we work.
            <br />
            Whether it’s transporting staff, meeting visitors, or ensuring your
            team reaches the airport on time, we provide a reliable service that
            reflects positively on your business.
          </p>
        </div>
      </main>
    </div>
  );
}
