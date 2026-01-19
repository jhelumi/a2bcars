import React from 'react';

const OurVehicles = () => {
  return (
    <div>
      <h2 className="text-xl font-semibold leading-10 tracking-tight text-brand-blue dark:text-zinc-50">
        Our Vehicles
      </h2>
      <ul className="list-disc  list-inside ml-4 text-left">
        <li>Mercedes S-Class</li>
        <li>Mercedes E-Class</li>
        <li>Mercedes V-Class</li>
        <li>Mercedes Vito 8-Seater</li>
      </ul>

      <p>
        All vehicles are executive-licensed with Buckinghamshire Council and
        maintained to a high standard.
      </p>
    </div>
  );
};

export default OurVehicles;
