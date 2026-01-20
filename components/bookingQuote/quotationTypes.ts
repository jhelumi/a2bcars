export enum JourneyType {
  SINGLE = 'single',
  RETURN = 'return',
  AIRPORT = 'airport',
}

export enum ContactMethod {
  EMAIL = 'email',
  SMS = 'sms',
  PHONE = 'phone',
}

export enum VehiclePreference {
  STANDARD = 'standard',
  EXECUTIVE = 'executive',
  MPV = 'mpv',
  LUXURY = 'luxury',
}

export enum LuggageType {
  LIGHT = 'light',
  STANDARD = 'standard',
  HEAVY = 'heavy',
}

export type BookingFormData = {
  // Step 1: Journey Details
  journeyType: JourneyType;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  pickupTime: string;

  // Conditional: Return
  returnPickupLocation?: string;
  returnDropoffLocation?: string;
  returnDate?: string;
  returnTime?: string;

  // Conditional: Airport
  airportName?: string;
  terminal?: string;
  flightNumber?: string;
  meetAndGreet: boolean;

  // Step 2: Personal Details
  name: string;
  email: string;
  phone: string;
  contactPreference: ContactMethod;

  // Step 3: Additional
  adults: number;
  children: number;
  luggageType: LuggageType;
  notes?: string;
  vehiclePreference: VehiclePreference;
  extras: string[];
};
