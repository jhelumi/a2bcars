import Header from "../../../components/header"

import RouteRenderer from "../../../components/dynamicContent/RouteRenderer"
import prisma from "@/lib/db";
import { notFound } from "next/navigation";

export default async  function OurRoutes({ params}: {params: Promise<{ pageId: string }>;}) {
  const { pageId } = await params;

  const page = await prisma.routePage.findUnique({
   where: {
          address: pageId
        },
  });
 const contents = page?.content;
  console.log("Contents received: ", contents)
  if (!page) {
    notFound();
  }
 
 
   
  return (
    
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      
      <Header userRole="public"  />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       <div className="grid grid-cols-1 gap-4">           
        <div> 
           <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
           {page.title}
          </h1>
            {page && <RouteRenderer data={contents ?? ""} />}</div>
        </div>
       <div>
       </div>
      </main>
    </div>
  );
}
