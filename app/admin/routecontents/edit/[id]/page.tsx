import AdminHeader from '@/components/AdminHeader';
import EditRouteForm from './editForm';
import prisma from '@/lib/db';
export default async function EditRoutePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log('ID:, ', id);
  const routePage = await prisma.routePage.findUnique({
    where: {
      id: id,
    },
  });

  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <AdminHeader userRole="admin" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-3 gap-4">
          <div className="col-span-3">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
              Dynamic Route Form
            </h1>
            <p className="leading-10 mt:10 "> Please edit the route below.</p>
          </div>
          <div className="col-span-3 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-8">
              <EditRouteForm data={routePage ?? null} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
