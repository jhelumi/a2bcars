import GoogleReviews from '@/components/googleReviews';
import Header from '../../components/header';

export default async function AboutUs() {
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <Header userRole="public" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6 text-center  text-brand-gray sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Cookie Policy
          </h1>
          <p>
            Our website uses cookies to improve your experience and help us
            understand how our site is used.
          </p>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            What Are Cookies?
          </h2>
          <p>Cookies are small text files stored on your device by websites.</p>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Types of Cookies We Use
          </h2>

          <ul className="list-disc  list-inside ml-4 text-left">
            <li>Essential Cookies – required for basic site operation</li>
            <li>
              Performance & Analytics Cookies – help us understand site usage
            </li>
            <li>Functionality Cookies – remember preferences</li>
            <li>Clear communication before, during, and after your journey</li>
            <li>A calm and comfortable travel experience</li>
            <li>A calm and comfortable travel experience</li>
          </ul>
          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Third-Party Cookies
          </h2>
          <p>
            Services such as Google Analytics or embedded maps may place
            cookies.
          </p>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Managing Cookies
          </h2>
          <p>Users can control cookies via browser settings.</p>
          <ul className="list-disc  list-inside ml-4 text-left">
            <li>
              <a href="https://support.google.com/chrome/answer/95647">
                Chrome
              </a>
            </li>
            <li>
              <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac">
                Safari
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09">
                Edge
              </a>
            </li>
          </ul>

          <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Changes to This Policy
          </h2>
          <p>Updates will appear on this page with a revised date.</p>
        </div>
      </main>
    </div>
  );
}
