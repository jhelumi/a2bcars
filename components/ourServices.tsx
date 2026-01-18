'use client';
import Link from 'next/link';
import React from 'react';

const OurServices = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
        Our Services
      </h2>
      <ul className="list-disc  list-inside ml-4 text-left">
        <li>
          <Link href="/airporttransfers">
            Airport transfers (all major UK airports)
          </Link>
        </li>
        <li>
          <Link href="/longdistancetravel">Long-distance travel</Link>
        </li>
        <li>
          <Link href="/city2citytravel">City-to-city travel</Link>
        </li>
        <li>
          <Link href="/businesstravel">
            Corporate accounts & business travel
          </Link>
        </li>
        <li>
          <Link href="/eventstravel">Event and seasonal travel</Link>
        </li>
      </ul>
    </div>
  );
};

export default OurServices;
