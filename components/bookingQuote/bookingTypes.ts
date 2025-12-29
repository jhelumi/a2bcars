
import { z } from 'zod';

export const BookingSchema = z.object({
  customerType: z.enum(['Personal', 'Corporate'], {
    // Fix: Use 'message' instead of 'required_error' for Zod enum
    message: "Please select a customer type.",
  }),
  companyName: z.string().optional(),
  journeyType: z.enum(['Single', 'Return', 'Airport'], {
    // Fix: Use 'message' instead of 'required_error' for Zod enum
    message: "Please select a journey type.",
  }),
  // Contact Details
  name: z.string().min(2, "Name must be at least 2 characters."),
  email: z.string().email("Invalid email address."),
  phone: z.string().min(10, "Phone number must be at least 10 digits."),
  
  // Locations
  startLocation: z.string().min(5, "Start location is required."),
  endLocation: z.string().min(5, "End location is required."),
  
  // Travel Details
  travelDate: z.string().min(1, "Travel date is required."),
  travelTime: z.string().min(1, "Travel time is required."),
  adults: z.coerce.number().min(1, "At least 1 adult required.").max(20),
  children: z.coerce.number().min(0).max(20).default(0),
  luggageType: z.enum(['Light', 'Standard', 'Heavy']),
  
  // Airport Specifics
  airportName: z.string().optional(),
  terminal: z.string().optional(),
  flightNumber: z.string().optional(),
  meetAndGreet: z.boolean().optional(),
  
  specialRequirements: z.string().optional(),
}).refine((data) => {
  if (data.customerType === 'Corporate' && !data.companyName) return false;
  return true;
}, {
  message: "Company name is required for corporate bookings.",
  path: ["companyName"],
}).refine((data) => {
  if (data.journeyType === 'Airport') {
    return !!data.airportName && !!data.terminal && !!data.flightNumber;
  }
  return true;
}, {
  message: "Please provide all airport details.",
  path: ["airportName"],
});

export type BookingFormData = z.infer<typeof BookingSchema>;

export interface QuoteResult {
  estimatedPrice: string;
  distance: string;
  duration: string;
  carType: string;
  summary: string;
  additionalNotes: string[];
}
