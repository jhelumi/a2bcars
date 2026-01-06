"use client";
import { FilePenLine } from 'lucide-react';
import React from 'react'
import { useRouter } from 'next/navigation';
const GetQuote = () => {
  const router = useRouter();
    const getQuoteClick = () => {
        router.replace("/quotation")
    }
  return (
    <div>
      <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">Get a Quote</h2>
       <p> We don’t offer instant online pricing. Every journey is unique.Tell us about your journey, and we’ll send a personalised quotation quickly.</p>

         <button onClick={getQuoteClick} className="bg-brand-blue hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 mt-4">
            { <><FilePenLine className="w-5 h-5" />Get Quote</>}
            </button>
        
    </div>
  )
}

export default GetQuote
