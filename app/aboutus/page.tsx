import GoogleReviews from '@/components/googleReviews';
import Header from '../../components/header';

export default async function AboutUs() {
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <Header userRole="public" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6 text-center  text-brand-gray sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            About Us
          </h1>

          <p>
            A2B Cars was founded with one simple goal — to make every journey
            smooth, calm, and reliable. We&apos;ve been operational since 1999,
            and over the years we&apos;ve built our reputation on honesty,
            punctuality, and looking after our customers properly from start to
            finish.
            <br />
            We&apos;re a dedicated team, and we treat every booking with the
            same level of care, whether it&apos;s an early-morning airport run,
            a long-distance trip, or an important business journey. We
            don&apos;t cut corners, we don&apos;t rush jobs, and we always
            communicate clearly so you know exactly what&apos;s happening at
            every step.
          </p>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Our Commitment to You
          </h2>
          <p>When you travel with A2B Cars, you can expect:</p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Professional, polite drivers</li>
            <li>Clean, executive-licensed vehicles</li>
            <li>On-time pickups</li>
            <li>Clear communication before, during, and after your journey</li>
            <li>A calm and comfortable travel experience</li>
            <li>A calm and comfortable travel experience</li>
          </ul>
          <p>
            All our vehicles are fully licensed by Buckinghamshire Council, and
            every driver is DBS-checked, insured, medically cleared, and trained
            to a high standard.
          </p>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Why People Choose Us
          </h2>
          <p>
            Most of our customers come back again and again — some for more than
            a decade — because they know we do things properly. We respect your
            time, your privacy, and the trust you place in us. Whether
            you&apos;re a family travelling to the airport or a business sending
            staff across the country, we make sure the journey is handled
            professionally and with care.
          </p>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Our Values
          </h2>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Reliability</li>
            <li>Safety</li>
            <li>Professionalism</li>
            <li>Respect</li>
            <li>Respect</li>
          </ul>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Serving Our Region
          </h2>
          <p>
            We proudly cover Buckinghamshire, South Oxfordshire & Hertfordshire,
            with a strong local presence in Aylesbury, Thame, Haddenham, Long
            Crendon, Princes Risborough, Wendover, and surrounding areas.
            <br />
            Wherever you&apos;re going — we aim to make your journey as smooth
            and stress-free as possible.
          </p>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Ready to Travel With Us?
          </h2>

          <p>
            We look forward to providing you with a smooth, calm, and reliable
            travel experience.
          </p>

          <GoogleReviews />
        </div>
      </main>
    </div>
  );
}
