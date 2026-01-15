export type Enquiry = {
  id: string;
  customerType: CutomerType;
  companyName?: string;
  journeyType: JourneyType;
  name: string;
  email?: string;
  phone?: string;
  startLocation: string;
  endLocation: string;
  travelDate: Date;
  travelTime: string;

  returnDate: Date;
  returnTime: string;
  adults?: number;
  children?: number;
  luggageType: LuggageType;

  airportName?: string;
  terminal?: string;
  flightNumber?: string;
  meetAndGreet?: boolean;

  specialRequirements: string;
  status: EnquiryStatus;
  createdAt: Date;
  updatedAt: Date;
  userId: string;
};

export enum JourneyType {
  Single,
  Return,
  Airport,
}
export enum CutomerType {
  Personal,
  Corporate,
}

export enum LuggageType {
  Light,
  Standard,
  Heavy,
}

export enum EnquiryStatus {
  Open,
  InProgress,
  Closed,
}
