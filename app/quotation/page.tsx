import Image from 'next/image';
import Header from '../../components/header';
import { Mail, Phone, Hourglass } from 'lucide-react';
import Link from 'next/link';
import BookingForm from '../../components/bookingQuote/BookingQuoteForm';
import QuotationForm from '@/components/bookingQuote/quotationForm';

export default function Quotation() {
  return (
    <div className="min-h-screen  bg-zinc-50 font-sans dark:bg-black">
      <Header userRole="public" />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-4 gap-4">
          <div className="col-span-12 md:col-span-6">
            <h1 className="text-3xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
              Quotation Form
            </h1>
          </div>

          <div className="col-span-12 md:col-span-6 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden">
            <div className="p-8">
              {/* <BookingForm /> */}
              <QuotationForm />
            </div>
          </div>
          <div></div>
        </div>
      </main>
    </div>
  );
}
