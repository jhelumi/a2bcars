'use client';
import React, { useState, useMemo } from 'react';
import { useForm, FormProvider, FieldPath, Resolver } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { bookingSchema } from './qutationSchema';
import {
  BookingFormData,
  JourneyType,
  ContactMethod,
  VehiclePreference,
  LuggageType,
} from './quotationTypes';
import StepIndicator from './StepIndicator';
import GooglePlaceInput from './GooglePlaceInput';
import {
  Plane,
  Calendar,
  Clock,
  User,
  Phone,
  Mail,
  FileText,
  CheckCircle2,
  ChevronRight,
  ChevronLeft,
  Car,
  Info,
  Users,
  Briefcase,
  AlertCircle,
} from 'lucide-react';

const QuotationForm = () => {
  const [step, setStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Get current date in YYYY-MM-DD format for input 'min' attribute
  const today = useMemo(() => new Date().toISOString().split('T')[0], []);

  // Initialize form with the BookingFormData type and Zod resolver
  // Use explicit casting for the resolver to resolve type mismatch between inferred Zod type and BookingFormData
  const methods = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema) as Resolver<BookingFormData>,
    mode: 'onBlur',
    defaultValues: {
      journeyType: JourneyType.SINGLE,
      pickupLocation: '',
      dropoffLocation: '',
      pickupDate: '',
      pickupTime: '',
      meetAndGreet: true,
      contactPreference: ContactMethod.EMAIL,
      adults: 1,
      children: 0,
      luggageType: LuggageType.STANDARD,
      vehiclePreference: VehiclePreference.STANDARD,
      extras: [],
    },
  });

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    trigger,
    setValue,
  } = methods;

  const journeyType = watch('journeyType');
  const pickupDate = watch('pickupDate');

  const handleNext = async (e?: React.MouseEvent) => {
    if (e) e.preventDefault();
    let fieldsToValidate: FieldPath<BookingFormData>[] = [];

    if (step === 1) {
      fieldsToValidate = [
        'journeyType',
        'pickupLocation',
        'dropoffLocation',
        'pickupDate',
        'pickupTime',
      ];
      if (journeyType === JourneyType.RETURN) {
        fieldsToValidate.push(
          'returnPickupLocation',
          'returnDropoffLocation',
          'returnDate',
          'returnTime'
        );
      }
      if (journeyType === JourneyType.AIRPORT) {
        fieldsToValidate.push('airportName', 'flightNumber');
      }
    } else if (step === 2) {
      fieldsToValidate = ['name', 'email', 'phone', 'contactPreference'];
    }

    const isValid = await trigger(fieldsToValidate);
    if (isValid) {
      console.log('STEP: ', step);
      setStep((s) => s + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setStep((s) => s - 1);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const onFinalSubmit = (data: BookingFormData) => {
    console.log('Final Data:', data);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-white p-8 rounded-2xl shadow-xl text-center border border-slate-100">
          <div className="flex justify-center mb-6">
            <div className="bg-green-100 p-4 rounded-full text-green-600">
              <CheckCircle2 size={64} />
            </div>
          </div>
          <h2 className="text-2xl font-bold text-slate-800 mb-2">
            Booking Requested!
          </h2>
          <p className="text-slate-600 mb-8">
            Thank you for your request. Our dispatch team will review your
            journey details and send a confirmation shortly.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="w-full bg-brand-blue text-white py-3 rounded-lg font-semibold hover:bg-indigo-600 transition-colors shadow-lg"
          >
            Create Another Booking
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-slate-50 rounded-2xl py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-slate-900 tracking-tight">
            A2B CARS
          </h1>
          <p className="mt-2 text-slate-600 text-lg">
            Quick and easy booking for any journey
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="p-8">
            <StepIndicator currentStep={step} />

            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onFinalSubmit)}
                className="space-y-8 mt-12"
              >
                {/* STEP 1: JOURNEY DETAILS */}
                {step === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <Calendar className="text-indigo-600" size={24} />
                      Journey Details
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="col-span-1 md:col-span-2">
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Journey Type
                        </label>
                        <select
                          {...register('journeyType')}
                          className="w-full p-2.5 border border-slate-300 rounded-lg bg-white focus:ring-2 focus:ring-indigo-500 transition-all"
                        >
                          <option value={JourneyType.SINGLE}>
                            One Way Journey
                          </option>
                          <option value={JourneyType.RETURN}>
                            Return Journey
                          </option>
                          <option value={JourneyType.AIRPORT}>
                            Airport Transfer
                          </option>
                        </select>
                      </div>

                      <div className="col-span-1 md:col-span-2">
                        <GooglePlaceInput
                          label="Pickup Location"
                          value={watch('pickupLocation') || ''}
                          onChange={(val) => setValue('pickupLocation', val)}
                          error={errors.pickupLocation?.message}
                        />
                      </div>

                      <div className="col-span-1 md:col-span-2">
                        <GooglePlaceInput
                          label="Dropoff Location"
                          value={watch('dropoffLocation') || ''}
                          onChange={(val) => setValue('dropoffLocation', val)}
                          error={errors.dropoffLocation?.message}
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Pickup Date
                        </label>
                        <input
                          type="date"
                          min={today}
                          {...register('pickupDate')}
                          className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.pickupDate ? 'border-red-500' : 'border-slate-300'}`}
                        />
                        {errors.pickupDate && (
                          <p className="text-xs text-red-500 mt-1">
                            {errors.pickupDate.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Pickup Time
                        </label>
                        <input
                          type="time"
                          {...register('pickupTime')}
                          className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.pickupTime ? 'border-red-500' : 'border-slate-300'}`}
                        />
                        {errors.pickupTime && (
                          <p className="text-xs text-red-500 mt-1">
                            {errors.pickupTime.message}
                          </p>
                        )}
                      </div>

                      {journeyType === JourneyType.RETURN && (
                        <div className="col-span-1 md:col-span-2 pt-6 border-t border-slate-100 space-y-6">
                          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                            <ChevronRight
                              size={18}
                              className="text-indigo-600"
                            />{' '}
                            Return Details
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="col-span-1 md:col-span-2">
                              <GooglePlaceInput
                                label="Return Pickup Location"
                                value={watch('returnPickupLocation') || ''}
                                onChange={(val) =>
                                  setValue('returnPickupLocation', val)
                                }
                                error={errors.returnPickupLocation?.message}
                              />
                            </div>
                            <div className="col-span-1 md:col-span-2">
                              <GooglePlaceInput
                                label="Return Dropoff Location"
                                value={watch('returnDropoffLocation') || ''}
                                onChange={(val) =>
                                  setValue('returnDropoffLocation', val)
                                }
                                error={errors.returnDropoffLocation?.message}
                              />
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">
                                Return Date
                              </label>
                              <input
                                type="date"
                                min={pickupDate || today}
                                {...register('returnDate')}
                                className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.returnDate ? 'border-red-500' : 'border-slate-300'}`}
                              />
                              {errors.returnDate && (
                                <p className="text-xs text-red-500 mt-1">
                                  {errors.returnDate.message}
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">
                                Return Time
                              </label>
                              <input
                                type="time"
                                {...register('returnTime')}
                                className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.returnTime ? 'border-red-500' : 'border-slate-300'}`}
                              />
                              {errors.returnTime && (
                                <p className="text-xs text-red-500 mt-1">
                                  {errors.returnTime.message}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}

                      {journeyType === JourneyType.AIRPORT && (
                        <div className="col-span-1 md:col-span-2 pt-6 border-t border-slate-100 space-y-6">
                          <h3 className="font-semibold text-slate-800 flex items-center gap-2">
                            <Plane size={18} className="text-indigo-600" />{' '}
                            Flight Information
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">
                                Airport Name
                              </label>
                              <input
                                {...register('airportName')}
                                placeholder="e.g. Heathrow (LHR)"
                                className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.airportName ? 'border-red-500' : 'border-slate-300'}`}
                              />
                              {errors.airportName && (
                                <p className="text-xs text-red-500 mt-1">
                                  {errors.airportName.message}
                                </p>
                              )}
                            </div>
                            <div>
                              <label className="block text-sm font-medium text-slate-700 mb-1">
                                Terminal
                              </label>
                              <input
                                {...register('terminal')}
                                placeholder="e.g. T5"
                                className="w-full p-2.5 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-500"
                              />
                            </div>
                            <div className="col-span-1">
                              <label className="block text-sm font-medium text-slate-700 mb-1">
                                Flight Number
                              </label>
                              <input
                                {...register('flightNumber')}
                                placeholder="e.g. BA123"
                                className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.flightNumber ? 'border-red-500' : 'border-slate-300'}`}
                              />
                              {errors.flightNumber && (
                                <p className="text-xs text-red-500 mt-1">
                                  {errors.flightNumber.message}
                                </p>
                              )}
                            </div>
                            <div className="flex items-center space-x-3 pt-6">
                              <input
                                type="checkbox"
                                id="meetAndGreet"
                                {...register('meetAndGreet')}
                                className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500 cursor-pointer"
                              />
                              <label
                                htmlFor="meetAndGreet"
                                className="text-sm font-medium text-slate-700 cursor-pointer"
                              >
                                Include Meet & Greet service
                              </label>
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}

                {/* STEP 2: PERSONAL DETAILS */}
                {step === 2 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                      <User className="text-indigo-600" size={24} />
                      Personal Details
                    </h2>

                    <div className="space-y-6">
                      <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                            <User size={18} />
                          </span>
                          <input
                            {...register('name')}
                            className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.name ? 'border-red-500' : 'border-slate-300'}`}
                            placeholder="John Doe"
                          />
                        </div>
                        {errors.name && (
                          <p className="text-xs text-red-500 mt-1">
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">
                            Email Address
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                              <Mail size={18} />
                            </span>
                            <input
                              type="email"
                              {...register('email')}
                              className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.email ? 'border-red-500' : 'border-slate-300'}`}
                              placeholder="john@example.com"
                            />
                          </div>
                          {errors.email && (
                            <p className="text-xs text-red-500 mt-1">
                              {errors.email.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="block text-sm font-medium text-slate-700 mb-1">
                            Telephone Number
                          </label>
                          <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-slate-400">
                              <Phone size={18} />
                            </span>
                            <input
                              type="tel"
                              {...register('phone')}
                              className={`w-full pl-10 pr-3 py-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.phone ? 'border-red-500' : 'border-slate-300'}`}
                              placeholder="+44 123 456 7890"
                            />
                          </div>
                          {errors.phone && (
                            <p className="text-xs text-red-500 mt-1">
                              {errors.phone.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="p-4 bg-indigo-50 rounded-xl border border-indigo-100">
                        <label className="block text-sm font-bold text-indigo-900 mb-3 flex items-center gap-2">
                          <Info size={16} /> Preferred Contact Method
                        </label>
                        <div className="flex flex-wrap gap-4">
                          {[
                            {
                              id: ContactMethod.EMAIL,
                              label: 'Email',
                              icon: Mail,
                            },
                            {
                              id: ContactMethod.SMS,
                              label: 'SMS / Text',
                              icon: Phone,
                            },
                            {
                              id: ContactMethod.PHONE,
                              label: 'Voice Call',
                              icon: Phone,
                            },
                          ].map((method) => (
                            <label
                              key={method.id}
                              className="relative flex items-center cursor-pointer"
                            >
                              <input
                                type="radio"
                                value={method.id}
                                {...register('contactPreference')}
                                className="sr-only peer"
                              />
                              <div className="px-4 py-2 border border-indigo-200 bg-white rounded-lg text-sm font-medium text-slate-600 peer-checked:bg-indigo-600 peer-checked:text-white peer-checked:border-indigo-600 transition-all">
                                {method.label}
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* STEP 3: EXTRAS & REQUIREMENTS */}
                {step === 3 && (
                  <div className="space-y-10">
                    <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
                      <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                          <Users className="text-brand-blue" size={24} />
                          Passengers
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                              Adults
                            </label>
                            <input
                              type="number"
                              min="1"
                              {...register('adults')}
                              className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.adults ? 'border-red-500' : 'border-slate-300'}`}
                            />
                            {errors.adults && (
                              <p className="text-xs text-red-500 mt-1">
                                {errors.adults.message}
                              </p>
                            )}
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">
                              Children
                            </label>
                            <input
                              type="number"
                              min="0"
                              {...register('children')}
                              className={`w-full p-2.5 border rounded-lg focus:ring-2 focus:ring-indigo-500 ${errors.children ? 'border-red-500' : 'border-slate-300'}`}
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                          <Briefcase className="text-brand-blue" size={24} />
                          Luggage
                        </h2>
                        <div className="grid grid-cols-3 gap-2">
                          {[
                            {
                              id: LuggageType.LIGHT,
                              label: 'Light',
                              desc: 'Handbags',
                            },
                            {
                              id: LuggageType.STANDARD,
                              label: 'Std',
                              desc: '1-2 Cases',
                            },
                            {
                              id: LuggageType.HEAVY,
                              label: 'Heavy',
                              desc: 'Large bags',
                            },
                          ].map((type) => (
                            <label
                              key={type.id}
                              className="relative cursor-pointer"
                            >
                              <input
                                type="radio"
                                value={type.id}
                                {...register('luggageType')}
                                className="sr-only peer"
                              />
                              <div className="h-full p-2 border border-slate-200 rounded-lg bg-white text-center peer-checked:bg-brand-blue peer-checked:text-white peer-checked:border-brand-blue transition-all">
                                <span className="block font-bold text-xs">
                                  {type.label}
                                </span>
                                <span className="block text-[9px] opacity-80">
                                  {type.desc}
                                </span>
                              </div>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                        <Car className="text-brand-blue" size={24} />
                        Vehicle Class
                      </h2>
                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                        {[
                          {
                            id: VehiclePreference.STANDARD,
                            label: 'Standard',
                            desc: '4 Seats',
                          },
                          {
                            id: VehiclePreference.EXECUTIVE,
                            label: 'Exec',
                            desc: 'Luxury Saloon',
                          },
                          {
                            id: VehiclePreference.MPV,
                            label: 'MPV',
                            desc: '7-8 Seats',
                          },
                          {
                            id: VehiclePreference.LUXURY,
                            label: 'Luxury+',
                            desc: 'First Class',
                          },
                        ].map((v) => (
                          <label key={v.id} className="relative cursor-pointer">
                            <input
                              type="radio"
                              value={v.id}
                              {...register('vehiclePreference')}
                              className="sr-only peer"
                            />
                            <div className="h-full p-4 border border-slate-200 rounded-xl bg-white text-center peer-checked:border-brand-blue peer-checked:ring-2 peer-checked:ring-brand-blue transition-all">
                              <span className="block font-bold text-slate-800 text-sm">
                                {v.label}
                              </span>
                              <span className="block text-[10px] text-slate-500 uppercase">
                                {v.desc}
                              </span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-1 gap-10">
                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider">
                          Extras
                        </h3>
                        <div className="space-y-3">
                          {[
                            { id: 'childSeat', label: 'Child Seat / Booster' },
                            {
                              id: 'extraLuggage',
                              label: 'Extra Luggage Space',
                            },
                            { id: 'water', label: 'Bottled Water' },
                            { id: 'wifi', label: 'On-board Wi-Fi' },
                          ].map((extra) => (
                            <label
                              key={extra.id}
                              className="flex items-center gap-3 p-3 rounded-lg hover:bg-slate-50 transition-colors cursor-pointer border border-transparent hover:border-slate-100"
                            >
                              <input
                                type="checkbox"
                                value={extra.id}
                                {...register('extras')}
                                className="h-5 w-5 rounded border-slate-300 text-indigo-600 focus:ring-indigo-500"
                              />
                              <span className="text-sm font-medium text-slate-700">
                                {extra.label}
                              </span>
                            </label>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-sm font-bold text-slate-900 mb-4 uppercase tracking-wider flex items-center gap-2">
                          <FileText size={16} /> Special Notes
                        </h3>
                        <textarea
                          {...register('notes')}
                          rows={5}
                          className="w-full p-3 border border-slate-300 rounded-xl focus:ring-2 focus:ring-indigo-500 text-sm transition-all"
                          placeholder="Flight details, specific luggage help, quiet journey request, etc..."
                        />
                      </div>
                    </div>
                  </div>
                )}

                {/* NAVIGATION */}
                <div className="flex items-center justify-between pt-8 border-t border-slate-100">
                  {step > 1 ? (
                    <button
                      type="button"
                      onClick={handleBack}
                      className="flex items-center gap-2 px-6 py-2.5 text-sm font-semibold text-slate-500 hover:text-indigo-600 transition-colors"
                    >
                      <ChevronLeft size={20} />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={handleNext}
                      className="flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-700 transition-all active:scale-95"
                    >
                      Continue
                      <ChevronRight size={20} />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center gap-2 bg-brand-blue text-white px-8 py-3 rounded-xl font-bold shadow-lg hover:bg-indigo-600 transition-all active:scale-95"
                    >
                      Book Journey
                      <CheckCircle2 size={20} />
                    </button>
                  )}
                </div>

                {/* GLOBAL ERRORS FOR DEBUGGING/USER AWARENESS */}
                {Object.keys(errors).length > 0 && (
                  <div className="p-4 bg-red-50 rounded-xl border border-red-100 flex items-start gap-3">
                    <AlertCircle className="text-red-500 shrink-0" size={20} />
                    <div>
                      <p className="text-sm font-bold text-red-800">
                        Please correct the following errors:
                      </p>
                      <ul className="mt-1 list-disc list-inside text-xs text-red-700">
                        {Object.values(errors).map((err, idx) => (
                          <li key={idx}>{err?.message}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuotationForm;
