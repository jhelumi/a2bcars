import OurVehicles from '@/components/ourVehicles';
import Header from '../../components/header';

export default function AirportTransfers() {
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <Header userRole="public" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6 text-center  text-brand-gray sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Airport Transfers
          </h1>

          <p className="text-lg leading-8 dark:text-zinc-400">
            Travelling to or from the airport should feel simple and
            stress-free. At A2B Cars, we make sure your journey is calm,
            comfortable, and on time — every single time. Whether it’s an
            early-morning departure, a late-night arrival, or a long-haul
            return, we look after everything carefully from the moment you book
            with us.
            <br />
            We have been operational since 1999, and over the years we’ve helped
            thousands of customers travel smoothly to all major UK airports. Our
            service is reliable, professional, and focused on giving you a
            peaceful start or finish to your journey.
          </p>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            What’s Included in Your Airport Transfer
          </h2>

          <ul className="list-disc  list-inside ml-4 text-left">
            <li>On-time pickup with clear communication</li>
            <li>Meet-and-greet service available on request</li>
            <li>Flight tracking for delays or early arrivals</li>
            <li>Help with luggage</li>
            <li>Clean, spacious, executive vehicles</li>
            <li>Professional, DBS-checked, insured drivers</li>
            <li>
              Smooth, calm driving with safety at the centre of every journey
            </li>
          </ul>
          <p>
            Your driver will always arrive early, assist you with your bags, and
            ensure you feel comfortable before the journey begins.
          </p>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Airports We Cover
          </h2>

          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Heathrow Airport</li>
            <li>Gatwick Airport</li>
            <li>Luton Airport</li>
            <li>Stansted Airport</li>
            <li>London City Airport</li>
            <li>Birmingham Airport</li>
          </ul>
          <p>
            If you need travel to another airport not listed here, just ask — we
            can usually accommodate it.
          </p>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Why Choose A2B Cars for Airport Travel
          </h2>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Reliable, punctual service</li>
            <li>Excellent communication before, during, and after your trip</li>
            <li>Flight monitoring to avoid any waiting around</li>
            <li>Executive-licensed vehicles only</li>
            <li>
              Safe and comfortable journeys, even during busy travel seasons
            </li>
            <li>Over two decades of experience</li>
          </ul>

          <OurVehicles />

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Travelling for Work?
          </h2>

          <p>
            We also handle corporate airport travel for businesses across
            Buckinghamshire, South Oxfordshire & Hertfordshire. If your company
            requires regular airport transfers, we can provide a reliable, calm
            service with simple invoicing and clear communication.
          </p>
        </div>
      </main>
    </div>
  );
}
