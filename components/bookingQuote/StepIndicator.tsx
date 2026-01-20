'use client';
import React from 'react';
import { Check } from 'lucide-react';

interface StepIndicatorProps {
  currentStep: number;
}

const steps = [
  { id: 1, name: 'Journey' },
  { id: 2, name: 'Personal' },
  { id: 3, name: 'Extras' },
];

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
  return (
    <nav aria-label="Progress" className="mb-10">
      <ol role="list" className="flex items-center justify-evenly">
        {steps.map((step, stepIdx) => (
          <li
            key={step.name}
            className={`relative ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''}`}
          >
            {step.id < currentStep ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-brand-blue" />
                </div>
                <div className="relative flex h-8 w-full items-center justify-center rounded-full bg-brand-blue hover:bg-indigo-600">
                  <Check className="h-5 w-8 text-white" aria-hidden="true" />
                  <span className="hidden lg:block sr-only">{step.name}</span>
                </div>
              </>
            ) : step.id === currentStep ? (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-slate-200" />
                </div>
                <div
                  className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-indigo-600 bg-white"
                  aria-current="step"
                >
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-indigo-600"
                    aria-hidden="true"
                  />
                  <span className="hidden lg:block sr-only">{step.name}</span>
                </div>
              </>
            ) : (
              <>
                <div
                  className="absolute inset-0 flex items-center"
                  aria-hidden="true"
                >
                  <div className="h-0.5 w-full bg-slate-200" />
                </div>
                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-slate-300 bg-white group hover:border-slate-400">
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-transparent group-hover:bg-slate-300"
                    aria-hidden="true"
                  />
                  <span className="hidden lg:block sr-only">{step.name}</span>
                </div>
              </>
            )}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 whitespace-nowrap">
              <span
                className={`hidden md:block text-xs font-semibold tracking-wide uppercase ${step.id === currentStep ? 'text-indigo-600' : 'text-slate-500'}`}
              >
                {step.name}
              </span>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default StepIndicator;
