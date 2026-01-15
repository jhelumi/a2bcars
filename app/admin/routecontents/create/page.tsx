import DynamicContentForm from '@/components/dynamicContent/DynamicContentForm';

import AdminHeader from '@/components/AdminHeader';

export default function CreateRoutePage() {
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <AdminHeader userRole="admin" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
              Dynamic Route Form
            </h1>
            <p> Please fill in the form below with dynamic route contents.</p>
          </div>
          <div className="col-span-3 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-8">
              <DynamicContentForm />
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </div>
  );
}
