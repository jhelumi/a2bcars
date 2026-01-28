'use client';

import { useId } from 'react';

import { ChevronDownIcon, CreditCardIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible';

import { Separator } from '@/components/ui/separator';

const CollapsibleFormDemo = () => {
  const id = useId();

  const items = [
    {
      value: '1',
      label: 'Standard 3-5 Days',
      description: 'Friday, 15 June - Tuesday, 19 June',
      price: 'Free',
    },
    {
      value: '2',
      label: 'Express',
      description: 'Friday, 15 June - Sunday, 17 June',
      price: '$5.00',
    },
    {
      value: '3',
      label: 'Overnight',
      description: 'Tomorrow',
      price: '$10.00',
    },
  ];

  return (
    <div className="w-full space-y-3">
      <div className="w-full max-w space-y-3 rounded border py-4">
        <Collapsible className="flex flex-col gap-2">
          <div className="flex content-start justify-between gap-4 px-4">
            <div className="text-sm font-bold content-start">
              Booking & Quotes
            </div>
            <CollapsibleTrigger asChild className="group">
              <Button variant="ghost" size="icon-sm">
                <ChevronDownIcon className="text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col text-left gap-3 px-4 pt-3">
            <div className="group relative  w-full">
              <span className="text-sm font-semibold text-left">
                How do I get a quote?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                Simply send us your pickup address, destination, date, and time
                via our quote form. We’ll reply with a personalised quotation
                quickly. We don’t offer instant online pricing because every
                journey is different.
              </span>
            </div>

            <div className="group w-full">
              <span className="text-sm font-semibold text-left">
                How early should I book?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                As early as possible — especially for airport journeys,
                mornings, and evenings. We do not operate as a last-minute taxi
                service, and we do not overbook.
              </span>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Separator />
        <Collapsible className="flex flex-col gap-2">
          <div className="flex content-start justify-between gap-4 px-4">
            <div className="text-sm font-bold content-start">
              Airports & Flights
            </div>
            <CollapsibleTrigger asChild className="group">
              <Button variant="ghost" size="icon-sm">
                <ChevronDownIcon className="text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col text-left gap-3 px-4 pt-3">
            <div className="group relative  w-full">
              <span className="text-sm font-semibold text-left">
                Do you cover all major airports?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                Yes. We provide airport transfers to and from:
                <ul className="list-disc  list-inside ml-6 text-left">
                  <li>Heathrow</li>
                  <li>Gatwick</li>
                  <li>Luton</li>
                  <li>Stansted</li>
                  <li>London City Airport</li>
                  <li>Birmingham Airport</li>
                </ul>
                <br />
                We track flights in real time, assist with luggage, and always
                communicate clearly at pickup.
              </span>
            </div>

            <div className="group w-full">
              <span className="text-sm font-semibold text-left">
                Do you offer meet-and-greet at airports?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                Yes. Your driver can meet you inside the terminal with a name
                board, assist with luggage, and guide you to the vehicle.
              </span>
            </div>
            <div className="group w-full">
              <span className="text-sm font-semibold text-left">
                What happens if my flight is delayed?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                We monitor all flights live and adjust pickup times accordingly.
                There are no extra charges for delays caused by the airline.
              </span>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Separator />
        <Collapsible className="flex flex-col gap-2">
          <div className="flex content-start justify-between gap-4 px-4">
            <div className="text-sm font-bold content-start">
              Vehicles & Drivers
            </div>
            <CollapsibleTrigger asChild className="group">
              <Button variant="ghost" size="icon-sm">
                <ChevronDownIcon className="text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col text-left gap-3 px-4 pt-3">
            <div className="group relative  w-full">
              <span className="text-sm font-semibold text-left">
                What vehicles do you use?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                We operate executive vehicles only from our fleet:
                <ul className="list-disc  list-inside ml-6 text-left">
                  <li>Mercedes S-Class</li>
                  <li>Mercedes E-Class</li>
                  <li>Mercedes V-Class</li>
                  <li>Mercedes Vito 8-Seater</li>
                </ul>
                All vehicles are licensed by Buckinghamshire Council, fully
                insured, and maintained to a clean, professional standard.
              </span>
            </div>

            <div className="group w-full">
              <span className="text-sm font-semibold text-left">
                Are your drivers licensed and DBS-checked?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                Yes. All drivers are fully licensed, DBS-checked, insured, and
                experienced in executive travel. Safety and calm driving are
                central to our service.
              </span>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Separator />
        <Collapsible className="flex flex-col gap-2">
          <div className="flex content-start justify-between gap-4 px-4">
            <div className="text-sm font-bold content-start">
              Families, Pets & Groups
            </div>
            <CollapsibleTrigger asChild className="group">
              <Button variant="ghost" size="icon-sm">
                <ChevronDownIcon className="text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col text-left gap-3 px-4 pt-3">
            <div className="group relative  w-full">
              <span className="text-sm font-semibold text-left">
                Do you offer child seats?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                We don’t carry spare child seats, but we’re happy to store and
                return your own seat for the return journey.
              </span>
            </div>

            <div className="group w-full">
              <span className="text-sm font-semibold text-left">
                Can I bring pets?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                Yes. Small pets are welcome, but please let us know in advance
                so we can allocate the most suitable vehicle.
              </span>
            </div>
            <div className="group w-full">
              <span className="text-sm font-semibold text-left">
                Do you offer shared transport?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                No. All journeys are private, pre-booked, and exclusive to your
                group.
              </span>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Separator />
        <Collapsible className="flex flex-col gap-2">
          <div className="flex content-start justify-between gap-4 px-4">
            <div className="text-sm font-bold content-start">
              Payments & Accounts
            </div>
            <CollapsibleTrigger asChild className="group">
              <Button variant="ghost" size="icon-sm">
                <ChevronDownIcon className="text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col text-left gap-3 px-4 pt-3">
            <div className="group relative  w-full">
              <span className="text-sm font-semibold text-left">
                How do I pay?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                Payment options include:
                <ul className="list-disc  list-inside ml-6 text-left">
                  <li>Bank transfer</li>
                  <li>Card payment</li>
                  <li>Corporate invoicing</li>
                  <li>Cash (when agreed in advance)</li>
                </ul>
              </span>
            </div>

            <div className="group w-full">
              <span className="text-sm font-semibold text-left">
                Can I book regular travel for my business?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                Yes. We offer corporate accounts with priority bookings, clear
                invoicing, monthly statements, and a dedicated point of contact.
                Many businesses rely on us for regular airport and city travel.
              </span>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Separator />
        <Collapsible className="flex flex-col gap-2">
          <div className="flex content-start justify-between gap-4 px-4">
            <div className="text-sm font-bold content-start">
              Areas & Availability
            </div>
            <CollapsibleTrigger asChild className="group">
              <Button variant="ghost" size="icon-sm">
                <ChevronDownIcon className="text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col text-left gap-3 px-4 pt-3">
            <div className="group relative  w-full">
              <span className="text-sm font-semibold text-left">
                What areas do you cover?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                We cover over 100 towns and villages across Buckinghamshire,
                Oxfordshire, and the Aylesbury-side of Hertfordshire. Your
                journey page will show the exact route from your location.
              </span>
            </div>

            <div className="group w-full">
              <span className="text-sm font-semibold text-left">
                Do you operate 24/7?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                Yes, but all journeys must be pre-booked. We are not a taxi
                company and do not take last-minute jobs.
              </span>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Separator />
        <Collapsible className="flex flex-col gap-2">
          <div className="flex content-start justify-between gap-4 px-4">
            <div className="text-sm font-bold content-start">
              Cancellations & Policies
            </div>
            <CollapsibleTrigger asChild className="group">
              <Button variant="ghost" size="icon-sm">
                <ChevronDownIcon className="text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col text-left gap-3 px-4 pt-3">
            <div className="group relative  w-full">
              <span className="text-sm font-semibold text-left">
                What happens if I need to cancel?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                We understand plans can change. Our cancellation policy is
                outlined clearly in our Terms & Conditions page.
              </span>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Separator />
        <Collapsible className="flex flex-col gap-2">
          <div className="flex content-start justify-between gap-4 px-4">
            <div className="text-sm font-bold content-start">Get in Touch</div>
            <CollapsibleTrigger asChild className="group">
              <Button variant="ghost" size="icon-sm">
                <ChevronDownIcon className="text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col text-left gap-3 px-4 pt-3">
            <div className="group relative  w-full">
              <span className="text-sm font-semibold text-left">
                How to contact us?
              </span>
              <span className="text-sm text-justify px-1">
                <br />
                If you have any other questions or would like to discuss a
                booking, please contact us via our Contact page. We’re always
                happy to help.
              </span>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

export default CollapsibleFormDemo;
