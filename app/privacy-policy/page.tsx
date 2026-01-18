import GoogleReviews from '@/components/googleReviews';
import Header from '../../components/header';

export default async function AboutUs() {
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <Header userRole="public" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6 text-center  text-brand-gray sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Privacy Policy{' '}
          </h1>

          <p>
            At A2B Cars, we respect your privacy and are committed to protecting
            your personal information.
            <br />
            This policy explains what information we collect, how we use it, and
            how we keep it secure.
          </p>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Information We Collect
          </h2>
          <p>We may collect:</p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Name, phone number, email address</li>
            <li>Pickup and destination addresses</li>
            <li>Flight numbers</li>
            <li>Company name (corporate bookings)</li>
            <li>Special requirements</li>
            <li>IP address, browser type, cookies (see Cookie Policy)</li>
          </ul>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            How We Use Your Information
          </h2>
          <p> We use your information to: </p>

          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Provide quotations</li>
            <li>Manage and confirm bookings</li>
            <li>Communicate with you</li>
            <li>Improve our service</li>
            <li>Meet legal obligations</li>
          </ul>
          <p> We do not sell or share your data for marketing.</p>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Legal Basis for Processing (UK GDPR)
          </h2>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Performance of a contract</li>
            <li>Legitimate interests</li>
            <li>Legal obligation</li>
          </ul>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            How We Store & Protect Your Data
          </h2>

          <p>
            We use encrypted devices, password protection, restricted access,
            and secure email systems.
          </p>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Sharing Your Information
          </h2>

          <p>We only share your data with:</p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Your assigned driver</li>
            <li>Licensing or law enforcement (if legally required)</li>
            <li>Insurance provider (if needed)</li>
          </ul>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Your Rights
          </h2>

          <p>You can request:</p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>A copy of your data</li>
            <li>Correction of inaccurate data</li>
            <li>Deletion (in some cases)</li>
            <li> Withdrawal of consent</li>
            <li>ICO complaint</li>
          </ul>
        </div>
      </main>
    </div>
  );
}
