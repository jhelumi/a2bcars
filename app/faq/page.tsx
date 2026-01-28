import CollapsibleFormDemo from '@/components/Faqs';
import Header from '../../components/header';

export default async function Faqs() {
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <Header userRole="public" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center gap-6 text-center  text-brand-gray sm:items-start sm:text-left">
          <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
            Frequently Asked Questions
          </h1>
          <p>
            Below are some of the questions we are asked most often. If you need
            anything else, just send us a message via our Contact page — we are
            always happy to help.
          </p>

          <CollapsibleFormDemo />
        </div>
      </main>
    </div>
  );
}
