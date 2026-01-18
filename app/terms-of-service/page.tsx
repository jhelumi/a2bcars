import GoogleReviews from '@/components/googleReviews';
import Header from '../../components/header';
import { Http2ServerRequest } from 'http2';

export default async function AboutUs() {
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <Header userRole="public" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6 text-center  text-brand-gray sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Terms & Conditions
          </h1>
          <p>
            These Terms & Conditions explain how we operate and what you can
            expect when you book a journey with A2B Cars. We aim to keep
            everything simple, fair, and transparent.
            <br />
            By booking a journey with us, you agree to the terms below.
          </p>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Bookings & Confirmations
          </h2>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>All journeys must be pre-booked.</li>
            <li>We do not operate as an on-demand taxi service.</li>
            <li>
              A booking is confirmed only when you receive written confirmation
              from us (WhatsApp, SMS, or email).
            </li>
            <li>
              Please check all details carefully. It is your responsibility to
              ensure the pickup address, date, time, and passenger information
              are correct.
            </li>
          </ul>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Pricing & Quotations
          </h2>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>All quotes are personalised for each journey.</li>
            <li>
              Prices are based on distance, time of day, route, vehicle type,
              waiting time, and any additional requirements.
            </li>
            <li>
              Airport fees, tolls, parking, and additional waiting time may
              apply.
            </li>
            <li>
              Prices may vary during peak periods, early mornings, late nights,
              or severe traffic conditions.
            </li>
          </ul>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Payments
          </h2>
          <p>We accept:</p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li> Bank transfer</li>
            <li>Card payment</li>
            <li>Cash (only if agreed in advance)</li>
            <li>Corporate invoicing (for approved business accounts)</li>
          </ul>
          <p>
            Payment must be completed before or on the day of travel unless
            agreed otherwise for corporate clients.
          </p>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Payment must be completed before or on the day of travel unless
            agreed otherwise for corporate clients.
          </h2>
          <p>We understand plans change. Our cancellation terms are:</p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>More than 24 hours before your booking → No charge</li>

            <li>Within 24 hours → Up to 50% charge</li>
            <li>
              Within 12 hours or after the driver has been dispatched → Full
              charge may apply
            </li>
          </ul>
          <p>All refunds are processed within 5–7 working days.</p>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Delays, Traffic & Unexpected Events
          </h2>
          <p>
            We always plan routes carefully, but some situations are outside our
            control, such as:
          </p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Accidents</li>
            <li>Severe traffic</li>
            <li>Road closures</li>
            <li>Weather conditions</li>
          </ul>
          <p>
            We cannot be held responsible for delays caused by these events, but
            we always do our best to minimise disruption.
          </p>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Flights, Waiting Time & Airport Pickups
          </h2>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>We track all flights in real time.</li>
            <li>If your flight is delayed, there is no additional charge. </li>
            <li>
              We allow reasonable waiting time for luggage and immigration.
            </li>
            <li>
              After extended waiting periods (e.g., lost baggage), additional
              charges may apply.
            </li>
          </ul>
          <p>Meet-and-greet is available upon request.</p>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Changes to Your Booking
          </h2>
          <p>
            If you need to change your time, destination, or passenger details:
          </p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Let us know as soon as possible.</li>
            <li>Changes are subject to availability.</li>
            <li>Price adjustments may apply.</li>
          </ul>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Passenger Responsibilities
          </h2>
          <p>Passengers are responsible for:</p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Being ready at the agreed pickup time</li>
            <li>Providing accurate addresses and contact details</li>
            <li>
              Ensuring they have their passport, luggage, and travel documents
            </li>
            <li>Taking care of personal items</li>
            <li>Maintaining respectful behaviour during the journey</li>
          </ul>
          <p>
            We reserve the right to refuse service to anyone who is abusive,
            intoxicated, or behaving unsafely.
          </p>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Luggage
          </h2>
          <p>We will always help with luggage, but:</p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Please ensure you select the correct vehicle size</li>
            <li>
              Extra-large or excessive luggage must be communicated in advance
            </li>
            <li>
              We are not responsible for loss or damage to personal belongings
            </li>
          </ul>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Vehicle Cleanliness & Damage
          </h2>
          <p>
            If a vehicle requires cleaning or repair due to passenger actions
            (e.g., spillages, sickness), additional charges may apply.
          </p>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Safety, Licensing & Compliance
          </h2>
          <p>
            All A2B Cars drivers and vehicles meet strict executive private hire
            standards:
          </p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Licensed by Buckinghamshire Council</li>
            <li>Fully insured for Hire & Reward</li>
            <li>DBS-checked</li>
            <li>Annual driver medicals</li>
            <li>Vehicles inspected and maintained regularly</li>
          </ul>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Pets
          </h2>
          <p>
            Small pets are welcome, but please inform us in advance.
            <br />
            Large animals may require a specific vehicle.
          </p>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Corporate Accounts
          </h2>
          <p>For companies with approved accounts:</p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Monthly invoicing is available</li>
            <li>Payment terms will be agreed individually</li>
            <li>Late payment fees may apply</li>
          </ul>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Complaints
          </h2>
          <p>
            If something isn’t right, please contact us directly.
            <br />
            We will always do our best to resolve issues quickly and fairly.
          </p>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Acceptance of Terms
          </h2>
          <p>
            By booking with A2B Cars, you confirm that you have read and
            accepted these Terms & Conditions.
          </p>
        </div>
      </main>
    </div>
  );
}
