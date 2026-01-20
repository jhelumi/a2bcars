import { z } from 'zod';
import {
  JourneyType,
  ContactMethod,
  VehiclePreference,
  LuggageType,
} from './quotationTypes';

export const bookingSchema = z
  .object({
    // Step 1
    journeyType: z.nativeEnum(JourneyType),
    pickupLocation: z.string().min(3, 'Pickup location is required'),
    dropoffLocation: z.string().min(3, 'Dropoff location is required'),
    pickupDate: z.string().min(1, 'Pickup date is required'),
    pickupTime: z.string().min(1, 'Pickup time is required'),

    // Step 1: Return Fields
    returnPickupLocation: z.string().optional(),
    returnDropoffLocation: z.string().optional(),
    returnDate: z.string().optional(),
    returnTime: z.string().optional(),

    // Step 1: Airport Fields
    airportName: z.string().optional(),
    terminal: z.string().optional(),
    flightNumber: z.string().optional(),
    meetAndGreet: z.boolean(),

    // Step 2
    name: z.string().min(2, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Valid phone number is required'),
    contactPreference: z.nativeEnum(ContactMethod),

    // Step 3
    adults: z.coerce.number().min(1, 'At least 1 adult is required').max(50),
    children: z.coerce.number().min(0, 'Cannot be negative').max(50),
    luggageType: z.nativeEnum(LuggageType),
    notes: z.string().optional(),
    vehiclePreference: z.nativeEnum(VehiclePreference),
    extras: z.array(z.string()),
  })
  .superRefine((data, ctx) => {
    const now = new Date();
    const pickupDateTime = new Date(`${data.pickupDate}T${data.pickupTime}`);

    // 1. Pickup Date/Time cannot be in the past
    if (data.pickupDate && data.pickupTime) {
      if (pickupDateTime < now) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Pickup date and time cannot be in the past',
          path: ['pickupTime'],
        });
      }
    }

    // 2. JourneyType: Return Validation
    if (data.journeyType === JourneyType.RETURN) {
      if (!data.returnPickupLocation || data.returnPickupLocation.length < 3) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Return pickup location is required',
          path: ['returnPickupLocation'],
        });
      }
      if (
        !data.returnDropoffLocation ||
        data.returnDropoffLocation.length < 3
      ) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Return dropoff location is required',
          path: ['returnDropoffLocation'],
        });
      }
      if (!data.returnDate) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Return date is required',
          path: ['returnDate'],
        });
      }
      if (!data.returnTime) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Return time is required',
          path: ['returnTime'],
        });
      }

      // Return Date/Time must be after Pickup Date/Time
      if (
        data.pickupDate &&
        data.pickupTime &&
        data.returnDate &&
        data.returnTime
      ) {
        const returnDateTime = new Date(
          `${data.returnDate}T${data.returnTime}`
        );
        if (returnDateTime <= pickupDateTime) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: 'Return journey must be after the initial pickup',
            path: ['returnTime'],
          });
        }
      }
    }

    // 3. JourneyType: Airport Validation
    if (data.journeyType === JourneyType.AIRPORT) {
      if (!data.airportName) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Airport name is required',
          path: ['airportName'],
        });
      }
      if (!data.flightNumber) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Flight number is required',
          path: ['flightNumber'],
        });
      }
    }

    // 4. Contact Preference Validations
    if (data.contactPreference === ContactMethod.EMAIL && !data.email) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Email is required for your preferred contact method',
        path: ['email'],
      });
    }
    if (data.contactPreference === ContactMethod.PHONE && !data.phone) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Phone is required for your preferred contact method',
        path: ['phone'],
      });
    }
    if (data.contactPreference === ContactMethod.SMS && !data.phone) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: 'Phone is required for SMS contact',
        path: ['phone'],
      });
    }
  });
