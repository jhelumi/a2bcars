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
      <div className="w-full max-w-md space-y-3 rounded-md border py-4">
        <Collapsible className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4 px-4">
            <div className="text-sm font-semibold">Delivery Address</div>
            <CollapsibleTrigger asChild className="group">
              <Button variant="ghost" size="icon-sm">
                <ChevronDownIcon className="text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col gap-3 px-4 pt-3">
            <div className="group relative w-full">
              <label
                htmlFor="full-name"
                className="origin-start text-muted-foreground group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
              >
                <span className="bg-background inline-flex px-1">
                  Full Name
                </span>
              </label>
            </div>
            <div className="group relative w-full space-y-2">
              <label
                htmlFor="address"
                className="origin-start text-muted-foreground group-focus-within:text-foreground has-[+textarea:not(:placeholder-shown)]:text-foreground has-aria-invalid:ring-destructive/20 dark:has-aria-invalid:ring-destructive/40 has-aria-invalid:border-destructive absolute top-0 block translate-y-2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:-translate-y-1/2 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+textarea:not(:placeholder-shown)]:pointer-events-none has-[+textarea:not(:placeholder-shown)]:-translate-y-1/2 has-[+textarea:not(:placeholder-shown)]:cursor-default has-[+textarea:not(:placeholder-shown)]:text-xs has-[+textarea:not(:placeholder-shown)]:font-medium"
              >
                <span className="bg-background inline-flex px-1">Address</span>
              </label>
            </div>
            <div className="group relative w-full">
              <label
                htmlFor="pin-code"
                className="origin-start text-muted-foreground group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
              >
                <span className="bg-background inline-flex px-1">Pin Code</span>
              </label>
            </div>
            <div className="group relative w-full">
              <label
                htmlFor="city-name"
                className="origin-start text-muted-foreground group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
              >
                <span className="bg-background inline-flex px-1">City</span>
              </label>
            </div>
            <div className="group relative w-full">
              <label
                htmlFor="landmark"
                className="origin-start text-muted-foreground group-focus-within:text-foreground has-[+input:not(:placeholder-shown)]:text-foreground absolute top-1/2 block -translate-y-1/2 cursor-text px-2 text-sm transition-all group-focus-within:pointer-events-none group-focus-within:top-0 group-focus-within:cursor-default group-focus-within:text-xs group-focus-within:font-medium has-[+input:not(:placeholder-shown)]:pointer-events-none has-[+input:not(:placeholder-shown)]:top-0 has-[+input:not(:placeholder-shown)]:cursor-default has-[+input:not(:placeholder-shown)]:text-xs has-[+input:not(:placeholder-shown)]:font-medium"
              >
                <span className="bg-background inline-flex px-1">Landmark</span>
              </label>
            </div>
          </CollapsibleContent>
        </Collapsible>
        <Separator />
        <Collapsible className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4 px-4">
            <div className="text-sm font-semibold">Delivery Options</div>
            <CollapsibleTrigger asChild className="group">
              <Button variant="ghost" size="icon-sm">
                <ChevronDownIcon className="text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col gap-2 px-4">
            <p>test</p>
          </CollapsibleContent>
        </Collapsible>
        <Separator />
        <Collapsible className="flex flex-col gap-2">
          <div className="flex items-center justify-between gap-4 px-4">
            <div className="text-sm font-semibold">Payment</div>
            <CollapsibleTrigger asChild className="group">
              <Button variant="ghost" size="icon-sm">
                <ChevronDownIcon className="text-muted-foreground transition-transform group-data-[state=open]:rotate-180" />
                <span className="sr-only">Toggle</span>
              </Button>
            </CollapsibleTrigger>
          </div>
          <CollapsibleContent className="flex flex-col gap-2">
            <div className="w-full space-y-2 px-4 pt-2">
              <p>test</p>
            </div>
          </CollapsibleContent>
        </Collapsible>
      </div>
      <p className="text-muted-foreground text-xs">
        Built with{' '}
        <a
          className="hover:text-foreground underline"
          href="https://github.com/medipass/react-payment-inputs"
          target="_blank"
          rel="noopener noreferrer"
        >
          React Payment Inputs
        </a>
      </p>
    </div>
  );
};

export default CollapsibleFormDemo;
