"use client";
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { BookingSchema, BookingFormData } from './bookingTypes';
import { User, Building2, Send, Loader2, Plane, Users, Briefcase, Calendar, Clock } from 'lucide-react';


const BookingForm: React.FC = () => {
      const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingFormData>({
    // Fix: Cast zodResolver to any to fix unrelated type errors between react-hook-form and resolvers
    /* eslint-disable @typescript-eslint/no-explicit-any */
    resolver: zodResolver(BookingSchema) as any,
    defaultValues: {
      customerType: 'Personal',
      journeyType: 'Single',
      name:'arshad',
      adults: 1,
      children: 0,
      luggageType: 'Standard',
      meetAndGreet: false,
    },
  });

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const handleFormSubmit = async (data:any) => {
   
    try {
     console.log(data);
    } catch (error) {
      console.error("Error fetching quote:", error);
      alert("Failed to calculate quote. Please try again.");
    } finally {
      
    }
  };
  const customerType = watch('customerType');
  const journeyType = watch('journeyType');

  return (
    // Fix: Cast onSubmit to any in handleSubmit to resolve type mismatch
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-6">
      {/* Customer Type Selector */}
      <div className="space-y-3">
        <label className="text-sm font-medium text-slate-700">Customer Type</label>
        <div className="grid grid-cols-2 gap-4">
          <label className={`
            cursor-pointer flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all
            ${customerType === 'Personal' 
              ? 'border-brand-blue bg-indigo-50 text-brand-blue' 
              : 'border-slate-200 hover:border-slate-300 text-slate-600'}
          `}>
            <input type="radio" value="Personal" {...register('customerType')} className="hidden" />
            <User size={18} />
            <span className="font-semibold">Personal</span>
          </label>
          <label className={`
            cursor-pointer flex items-center justify-center gap-2 p-3 rounded-xl border-2 transition-all
            ${customerType === 'Corporate' 
              ? 'border-brand-blue bg-indigo-50 text-brand-blue' 
              : 'border-slate-200 hover:border-slate-300 text-slate-600'}
          `}>
            <input type="radio" value="Corporate" {...register('customerType')} className="hidden" />
            <Building2 size={18} />
            <span className="font-semibold">Corporate</span>
          </label>
        </div>
      </div>

      {/* Basic Contact Info */}
      <div className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Full Name</label>
            <input type="text" {...register('name')} placeholder="John Doe" className="w-full p-3 rounded-xl border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600" />
            {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
          </div>
          {customerType === 'Corporate' && (
            <div className="space-y-2 animate-in fade-in slide-in-from-top-2 duration-300">
              <label className="text-sm font-medium text-slate-700">Company Name</label>
              <input type="text" {...register('companyName')} placeholder="Acme Corp" className="w-full p-3 rounded-xl border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600" />
              {errors.companyName && <p className="text-xs text-red-500">{errors.companyName.message}</p>}
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Email Address</label>
            <input type="email" {...register('email')} placeholder="john@example.com" className="w-full p-3 rounded-xl border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600" />
            {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700">Phone Number</label>
            <input type="tel" {...register('phone')} placeholder="+1 (555) 000-0000" className="w-full p-3 rounded-xl border border-slate-200 outline-none focus:ring-1 focus:ring-indigo-600" />
            {errors.phone && <p className="text-xs text-red-500">{errors.phone.message}</p>}
          </div>
        </div>
      </div>

      <hr className="border-slate-100" />

      {/* Travel Logistics */}
      <div className="space-y-4">
        <div className="space-y-3">
          <label className="text-sm font-medium text-slate-700">Journey Type</label>
          <select {...register('journeyType')} className="w-full p-3 rounded-xl border-2 border-slate-200 bg-white focus:border-indigo-600 outline-none">
            <option value="Single">Single Trip</option>
            <option value="Return">Return Trip</option>
            <option value="Airport">Airport Transfer</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Calendar size={14}/> Travel Date</label>
            <input type="date" {...register('travelDate')} className="w-full p-3 rounded-xl border border-slate-200 outline-none" />
            {errors.travelDate && <p className="text-xs text-red-500">{errors.travelDate.message}</p>}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Clock size={14}/> Travel Time</label>
            <input type="time" {...register('travelTime')} className="w-full p-3 rounded-xl border border-slate-200 outline-none" />
            {errors.travelTime && <p className="text-xs text-red-500">{errors.travelTime.message}</p>}
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="space-y-2 col-span-1">
            <label className="text-sm font-medium text-slate-700">Adults</label>
            <input type="number" {...register('adults')} className="w-full p-3 rounded-xl border border-slate-200 outline-none" />
          </div>
          <div className="space-y-2 col-span-1">
            <label className="text-sm font-medium text-slate-700">Children</label>
            <input type="number" {...register('children')} className="w-full p-3 rounded-xl border border-slate-200 outline-none" />
          </div>
          <div className="space-y-2 col-span-2">
            <label className="text-sm font-medium text-slate-700 flex items-center gap-2"><Briefcase size={14}/> Luggage</label>
            <select {...register('luggageType')} className="w-full p-3 rounded-xl border border-slate-200 outline-none bg-white">
              <option value="Light">Light (Hand luggage only)</option>
              <option value="Standard">Standard (Up to 2 suitcases)</option>
              <option value="Heavy">Heavy (Large items/Multiple bags)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Locations */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Pick-up Location</label>
          <input type="text" {...register('startLocation')} placeholder="Pick-up address" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-1 focus:ring-brand-blue outline-none" />
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-slate-700">Drop-off Location</label>
          <input type="text" {...register('endLocation')} placeholder="Drop-off address" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-1 focus:ring-brand-blue outline-none" />
        </div>
      </div>

      {/* Airport Specifics */}
      {journeyType === 'Airport' && (
        <div className="p-6 bg-slate-50 border border-indigo-100 rounded-2xl space-y-4 animate-in zoom-in-95 duration-300">
          <h3 className="text-brand-blue font-bold flex items-center gap-2 mb-2">
            <Plane size={18} /> Airport Information
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase">Airport Name</label>
              <input type="text" {...register('airportName')} placeholder="Heathrow / JFK" className="w-full p-2 rounded-lg border border-slate-200 outline-none" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase">Terminal</label>
              <input type="text" {...register('terminal')} placeholder="T5" className="w-full p-2 rounded-lg border border-slate-200 outline-none" />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label className="text-xs font-semibold text-slate-500 uppercase">Flight Number</label>
              <input type="text" {...register('flightNumber')} placeholder="BA123" className="w-full p-2 rounded-lg border border-slate-200 outline-none" />
            </div>
            <div className="flex items-center gap-3 pt-6">
              <input type="checkbox" {...register('meetAndGreet')} id="meetAndGreet" className="w-5 h-5 rounded border-slate-300 text-brand-blue focus:ring-brand-blue" />
              <label htmlFor="meetAndGreet" className="text-sm font-medium text-slate-700 cursor-pointer">Include Meet & Greet service?</label>
            </div>
          </div>
          {errors.airportName && <p className="text-xs text-red-500">{errors.airportName.message}</p>}
        </div>
      )}

      <div className="space-y-2">
        <label className="text-sm font-medium text-slate-700">Special Requirements</label>
        <textarea {...register('specialRequirements')} rows={2} placeholder="Any specific needs?" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-1 focus:ring-brand-blue outline-none resize-none" />
      </div>

      <button type="submit" disabled={isLoading} className="w-full bg-brand-blue hover:bg-indigo-700 disabled:bg-indigo-400 text-white font-bold py-4 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2">
        {isLoading ? <Loader2 className="animate-spin w-5 h-5" /> : <><Send className="w-5 h-5" /> Get Instant Quote</>}
      </button>
    </form>
  );
};


export default BookingForm;