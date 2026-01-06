import Header from "../../components/header"

import RouteRenderer from "../../components/dynamicContent/RouteRenderer"

const add1= "woking-to-heathrow"
export default async  function OurRoutes(){
   
  return (
    
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      
      <Header userRole="public"  />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       <div className="grid grid-cols-4 gap-4">
      
       </div>
      </main>
    </div>
  );
}
