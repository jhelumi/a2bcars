import OurVehicles from '@/components/ourVehicles';
import Header from '../../components/header';

export default function AirportTransfers() {
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <Header userRole="public" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6 text-center  text-brand-gray sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Event & Seasonal Travel
          </h1>

          <p className="text-lg leading-8 dark:text-zinc-400">
            Whether it’s a special event, a family celebration, a concert, a
            sports match, a festival, or a busy seasonal period, we make sure
            your journey is smooth, calm, and on time. At A2B Cars, we provide
            reliable and comfortable travel for all types of events across
            Buckinghamshire, South Oxfordshire, Hertfordshire, and beyond.
            <br />
            We’ve been operational since 1999, and over the years we’ve helped
            thousands of customers travel safely to important occasions —
            without the stress of parking, trains, traffic, or timing.
          </p>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Types of Events We Cover
          </h2>
          <p>We provide travel for:</p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Family celebrations & gatherings</li>
            <li>Weddings (guest and family transport)</li>
            <li>Concerts & live events</li>
            <li>Theatre shows</li>
            <li>
              Tennis, Formula One / Grand Prix, rugby, cricket & other sporting
              events
            </li>
            <li>Festivals</li>
            <li>Christmas parties & seasonal functions</li>
            <li>Airport runs during busy holiday periods</li>
            <li>Any other event where you need reliable, comfortable travel</li>
          </ul>

          <p>If your event isn’t listed, just ask — we can usually help.</p>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Why Choose A2B Cars for Event Travel
          </h2>

          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Comfortable, spacious executive vehicles</li>
            <li>Safe and calm driving</li>
            <li>Reliable timings, even during busy events</li>
            <li>Professional, polite, DBS-checked drivers</li>
            <li>No stress about event parking or long queues</li>
            <li>Direct, door-to-door travel</li>
            <li>Clear communication throughout</li>
            <li>Perfect for families, groups, and corporate outings</li>
          </ul>

          <p>
            We make sure you arrive relaxed and ready to enjoy your event — and
            we’ll be there on time for your return journey too.
          </p>

          <OurVehicles />

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Group Travel Options
          </h2>
          <p>
            If you&apos;re travelling with a group, our Mercedes V-Class and
            Mercedes Vito 8-Seater offer these benefits:
          </p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Spacious Seating for comfortable group travel</li>
            <li>Generous Luggage Capacity</li>
            <li>
              Ideal for Groups attending weddings, parties, and corporate events
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}
