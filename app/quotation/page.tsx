import Image from "next/image";
import Header from "../../components/header"
import {Mail, Phone, Hourglass} from "lucide-react"
import Link from "next/link";
import BookingForm from "../../components/bookingQuote/BookingQuoteForm"

export default function Quotation() {

   
  return (
    
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      
      <Header userRole="public"  />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
       <div className="grid grid-cols-4 gap-4">
       <div></div>
       <div className="col-span-2 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
        <div className="p-8"><BookingForm /></div>
        </div>
       <div></div>
       </div>
      </main>
    </div>
  );
}
